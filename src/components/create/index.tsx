import React, { useRef, useState } from 'react'
import { Form, Input, Button, Select, Modal, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FormItemProps, Rule } from 'antd/lib/form'
import {
  StyledContainer,
  DrawerBox,
  Title,
  DrawerWrapper,
  ButtonBox,
  StyledUpload
} from './style'
import { useAddrCity } from 'hooks/useAddress'
import { useCategory } from 'hooks/useCategory'
import { postArticle } from 'api/article'
import { UploadFile } from 'antd/lib/upload/interface'
// import useOutsideClick from 'hooks/useOutsideClick'

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

  const fileListRef = useRef<File[]>([])
  // drawer 외부 클릭시 꺼지게 하기위해 추가
  // const drawerRef = createRef<HTMLDivElement>()
  // useOutsideClick(drawerRef, () => setIsShowDrawer(false))

  const [parentAddr, setParentAddr] = useState<Nullable<number>>(undefined)
  const { parentAddress, childAddress, childAddrDisabled } = useAddrCity(
    parentAddr
  )
  const { categories } = useCategory()

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
    console.log(fileList)
    setImgs({ ...imgs, fileList })
  }

  // 상품 등록하기
  const handleSubmit = async (_values: any) => {
    const formData = await form.validateFields()

    // 광역시,도 아이디 값으로 해당 지역 이름 찾기
    formData.city = parentAddress.find(
      (addr) => addr.id === formData.city
    )?.name

    // 1 > 유저 아이디로 수정해야함
    const articleInfo = new FormData()
    articleInfo.append('id', '1')
    articleInfo.append('city', formData.city)
    articleInfo.append('street1', formData.street1)
    articleInfo.append('title', formData.title)
    articleInfo.append('spec', formData.spec)
    articleInfo.append('price', formData.price)
    articleInfo.append('categories', formData.categories)
    articleInfo.append('sold', 'false')

    fileListRef.current.map((file) => {
      articleInfo.append('files', file)
    })
    postArticle(articleInfo)

    try {
      message.success('상품이 등록되었습니다')
      setIsShowDrawer(false)
    } catch (error) {
      return message.error('상품을 등록하지못했습니다')
    }
  }

  const handleChangeParentAddr = (value: any) => {
    setParentAddr(value)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <StyledContainer>
      <DrawerWrapper
        style={isShowDrawer ? { right: '0' } : { right: '-500px' }}
        isVisible={isShowDrawer}
        // ref={drawerRef}
      >
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
            <Form.Item required name="categories" rules={formRule.categories}>
              <Select placeholder="카테고리">
                {categories.map((category) => (
                  <Select.Option key={category.value} value={category.value}>
                    {category.value}
                  </Select.Option>
                ))}
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
            <StyledUpload
              listType="picture-card"
              fileList={imgs.fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              accept="image/*"
              beforeUpload={(file) => {
                fileListRef.current = [...fileListRef.current, file]
                return false
              }}
            >
              {imgs.fileList.length >= 6 ? null : uploadButton}
            </StyledUpload>

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
