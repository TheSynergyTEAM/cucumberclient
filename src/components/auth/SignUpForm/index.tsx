import React from 'react'
import { Form, Input } from 'antd'
import { StyledForm } from './style'

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <StyledForm layout="horizontal" form={form} labelCol={{ span: 3 }}>
      <Form.Item label="아이디" colon={false} required wrapperCol={{ span: 5 }}>
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        colon={false}
        required
        wrapperCol={{ span: 8 }}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        label="비밀번호 확인"
        colon={false}
        required
        wrapperCol={{ span: 8 }}
      >
        <Input type="password" />
      </Form.Item>
    </StyledForm>
  )
}

export default SignUpForm
