import React, { useState, createRef } from 'react'
import { Form, Input, Button, Select, Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FormItemProps, Rule } from 'antd/lib/form'
import {
  StyledContainer,
  DrawerBox,
  Title,
  DrawerWrapper,
  ButtonBox
} from './style'
import { useAddrCity } from 'hooks/useAddress'
import { postArticle } from 'api/article'
import { UploadFile } from 'antd/lib/upload/interface'
import useOutsideClick from 'hooks/useOutsideClick'

const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const halfStyle: (isMargin: boolean) => React.CSSProperties = (isMargin) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    width: 'calc(50% - 6px)'
  }

  if (isMargin) style.marginRight = '12px'

  return style
}

type RuleTarget =
  | 'title'
  | 'parentAddr'
  | 'childAddr'
  | 'categories'
  | 'price'
  | 'spec'

type FormRule = {
  [P in RuleTarget]: Rule[]
}

// 폼의 룰을 정합니다.
const formRule: FormRule = {
  // 상품명
  title: [
    {
      required: true,
      message: '상품명을 입력해주세요'
    }
  ],
  // 상품 상세설명
  spec: [
    {
      required: true,
      message: '상품설명을 적어주세요'
    }
  ],
  // 카테고리
  categories: [{ required: true, message: '카테고리를 선택해주세요' }],
  // 가격
  price: [
    { required: true, message: '가격을 입력해주세요' },
    (_) => ({
      validator(_, value) {
        if (Number(value)) {
          return Promise.resolve()
        }
        return Promise.reject()
      },
      message: '숫자만 입력할수있습니다.'
    })
  ],
  // 광역시,도
  parentAddr: [{ required: true, message: '광역시,도를 선택해주세요.' }],
  // 구
  childAddr: [{ required: true, message: '지역을 선택해주세요.' }]
}

interface Files {
  previewVisible: boolean
  previewImage: string
  previewTitle: string
  fileList: UploadFile<any>[]
}

const baseFormItemProps: FormItemProps = {
  required: true,
  hasFeedback: true
}

interface CreateProps {
  isShowDrawer: boolean
  setIsShowDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const Create = ({ isShowDrawer, setIsShowDrawer }: CreateProps) => {
  const [form] = Form.useForm()
  const [imgs, setImgs] = useState<Files>({
    previewVisible: false,
    previewImage: '',
    previewTitle: '사진을 올려보세요',
    fileList: []
  })

  // drawer 외부 클릭시 꺼지게 하기위해 추가
  const drawerRef = createRef<HTMLDivElement>()
  useOutsideClick(drawerRef, () => setIsShowDrawer(false))

  const [parentAddr, setParentAddr] = useState<Nullable<number>>(undefined)
  const { parentAddress, childAddress, childAddrDisabled } = useAddrCity(
    parentAddr
  )
  const handleCancel = () => setImgs({ ...imgs, previewVisible: false })

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setImgs({
      ...imgs,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    })
  }

  const handleChange = ({ fileList }: any) => {
    console.log(FileList)
    setImgs({ ...imgs, fileList })
  }

  const { Option } = Select

  // 상품 등록하기
  const handleSubmit = async (_values: any) => {
    const formData = await form.validateFields()

    // 광역시,도 아이디 값으로 해당 지역 이름 찾기
    formData.city = parentAddress.find(
      (addr) => addr.id === formData.city
    )?.name

    // 1 > 유저 아이디로 수정해야함
    const newArticleInfo = {
      id: 1,
      city: formData.city,
      street1: formData.street1,
      title: formData.title,
      spec: formData.spec,
      price: formData.price,
      category: formData.categories,
      sold: false
    }

    postArticle(newArticleInfo)
  }

  const handleChangeParentAddr = (value: any) => {
    setParentAddr(value)

    // 광역시,도가 변경되면 하위 주소를 null로 만듭니다.
    form.setFieldsValue({
      childAddress: null
    })
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <StyledContainer>
      <DrawerWrapper isVisible={isShowDrawer} ref={drawerRef}>
        <DrawerBox>
          <Title>
            <p>상품 등록하기</p>
            <p>판매하실 상품에대해 적어보세요</p>
          </Title>
          <Form
            layout="horizontal"
            form={form}
            onFinish={handleSubmit}
            validateMessages={{ required: '', default: '' }}
          >
            <Form.Item
              {...baseFormItemProps}
              name="title"
              rules={formRule.title}
            >
              <Input placeholder="상품명" />
            </Form.Item>
            <Form.Item
              {...baseFormItemProps}
              name="price"
              rules={formRule.price}
            >
              <Input placeholder="가격" />
            </Form.Item>
            <Form.Item
              required
              name="categories"
              rules={formRule.categories}
              dependencies={['parentAddress']}
            >
              <Select placeholder="카테고리">
                <Option value="DIGIT">디지털/가전</Option>
                <Option value="INTERIOR">가구/인테리어</Option>
                <Option value="KID">유아동/유아도서</Option>
                <Option value="LIVING">생활/가공식품</Option>
                <Option value="LEISURE">스포츠/레저</Option>
                <Option value="WOMAN">여성의류/잡화</Option>
                <Option value="MAN">남성의류/잡화</Option>
                <Option value="BEAUTY">뷰티/미용</Option>
                <Option value="PET">반려동물용품</Option>
                <Option value="HOBBY">게임/취미</Option>
                <Option value="CULTURAL">도서/티켓/음반</Option>
                <Option value="PLANT">식물</Option>
                <Option value="ETC">기타</Option>
              </Select>
            </Form.Item>

            <Form.Item
              required
              style={halfStyle(true)}
              name="city"
              rules={formRule.parentAddr}
            >
              <Select placeholder="광역시/도" onChange={handleChangeParentAddr}>
                {parentAddress.map((address) => (
                  <Select.Option value={address.id} key={address.id}>
                    {address.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              required
              style={halfStyle(false)}
              name="street1"
              rules={formRule.childAddr}
              dependencies={['parentAddress']}
            >
              <Select placeholder="구" disabled={childAddrDisabled}>
                {childAddress &&
                  childAddress.streetList.map((address) => (
                    <Select.Option key={address} value={address}>
                      {address}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item name="spec">
              <Input.TextArea
                placeholder="판매하실 상품에대해 설명해주세요"
                style={{ minHeight: '200px' }}
              />
            </Form.Item>
            <div>
              <Upload
                listType="picture-card"
                fileList={imgs.fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {imgs.fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                visible={imgs.previewVisible}
                title={imgs.previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={imgs.previewImage}
                />
              </Modal>
            </div>
            <ButtonBox>
              <Button type="primary" onClick={() => setIsShowDrawer(false)}>
                취소하기
              </Button>
              <Button type="primary" htmlType="submit">
                등록하기
              </Button>
            </ButtonBox>
          </Form>
        </DrawerBox>
      </DrawerWrapper>
    </StyledContainer>
  )
}

export default Create
