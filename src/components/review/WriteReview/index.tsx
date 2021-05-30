import React, { useState, useRef, useContext } from 'react'
import ArticleBox from 'components/common/ArticleBox'
import userContext from 'context/user'
import {
  StyledContainer,
  ArticleContainer,
  ReviewContainer,
  Title,
  Desc,
  ButtonBox
} from './style'
import { Form, Input, Button, message, Rate, Modal, Upload } from 'antd'
import { FormItemProps, Rule } from 'antd/lib/form'
import { postReview } from 'api/review'
import { UploadFile } from 'antd/lib/upload/interface'
import { getBase64 } from 'utils/readFile'
import { PlusOutlined } from '@ant-design/icons'

type RuleTarget = 'desc' | 'rate'

type FormRule = {
  [P in RuleTarget]: Rule[]
}
// 폼의 룰을 정합니다.
const formRule: FormRule = {
  // 거래점수
  rate: [
    {
      required: true,
      message: '거래점수를 선택해주세요'
    }
  ],
  // 상세리뷰
  desc: [
    {
      required: false,
      message: '상품설명을 적어주세요'
    }
  ]
}

const baseFormItemProps: FormItemProps = {
  required: true,
  hasFeedback: true
}
interface Files {
  previewVisible: boolean
  previewImage: string
  previewTitle: string
  fileList: UploadFile<any>[]
}

interface WriteReviewProps {
  articleInfo: Nullable<ArticleData>
}

const WriteReview: React.FC<WriteReviewProps> = ({ articleInfo }) => {
  const [form] = Form.useForm()
  const [imgs, setImgs] = useState<Files>({
    previewVisible: false,
    previewImage: '',
    previewTitle: '사진을 올려보세요',
    fileList: []
  })
  const [RateNum, setRateMNum] = useState<number>()
  const fileListRef = useRef<File[]>([])
  const userInfo = useContext(userContext)
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

  const handleCancel = () => setImgs({ ...imgs, previewVisible: false })

  const handleChange = ({ fileList }: any) => {
    console.log(fileList)
    setImgs({ ...imgs, fileList })
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const handleSubmit = async (_values: any) => {
    const formData = await form.validateFields()

    const reviewData = new FormData()
    if (articleInfo) {
      reviewData.append('itemid', `${articleInfo.id}`)
      reviewData.append('memberid', `${userInfo.user?.id}`)
    }
    reviewData.append('ratingscore', `${RateNum}`)
    reviewData.append('content', formData.desc || '리뷰내용이 없습니다')

    postReview(reviewData)

    try {
      message.success('리뷰가 등록되었습니다')
    } catch (error) {
      return message.error('리뷰를 등록하지못했습니다')
    }
  }

  return (
    <StyledContainer>
      <ArticleContainer>
        <Title>구매하신 상품</Title>
        {articleInfo ? (
          <ArticleBox {...articleInfo} thumbnailid={1} />
        ) : (
          <div>Loading....</div>
        )}
      </ArticleContainer>
      <ReviewContainer>
        <Title style={{ marginTop: '30px' }}>구매하신 상품은 어떠신가요?</Title>
        <p>판매자에게 감사인사를 남겨보세요.</p>
        <Form
          layout="horizontal"
          validateMessages={{ required: '', default: '' }}
          onFinish={handleSubmit}
          form={form}
        >
          <Desc>- 거래를 별점으로 매겨보세요. (필수)</Desc>
          <Form.Item {...baseFormItemProps} name="rate" rules={formRule.rate}>
            <Rate allowHalf onChange={(value) => setRateMNum(value)} />
          </Form.Item>
          <Desc>- 사진으로 리뷰를 남겨보세요.</Desc>
          <Upload
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
          <Desc>- 판매자에게 사용후기를 알려주세요.</Desc>

          <Form.Item name="desc">
            <Input.TextArea
              placeholder="상품에 대한 후기를 적어주세요"
              style={{ minHeight: '120px' }}
            />
          </Form.Item>
          <ButtonBox>
            <Button type="primary">취소하기</Button>
            <Button type="primary" htmlType="submit">
              리뷰 등록하기
            </Button>
          </ButtonBox>
        </Form>
      </ReviewContainer>
    </StyledContainer>
  )
}

export default WriteReview
