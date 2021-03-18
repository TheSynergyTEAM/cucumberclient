import React from 'react'
import { Button, Form, Input } from 'antd'
import { StyledForm } from './style'

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <StyledForm layout="horizontal" form={form}>
      <Form.Item
        required
        style={{
          display: 'inline-block',
          marginRight: '1rem',
          width: 'calc(50% - 0.5rem)'
        }}
      >
        <Input placeholder="아이디" />
      </Form.Item>
      <Form.Item
        required
        style={{ display: 'inline-block', width: 'calc(50% - 0.5rem)' }}
      >
        <Input placeholder="이메일" />
      </Form.Item>
      <Form.Item required>
        <Input type="password" placeholder="비밀번호" />
      </Form.Item>
      <Form.Item required>
        <Input type="password" placeholder="비밀번호 확인" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{ width: '100%' }}>
          회원가입
        </Button>
      </Form.Item>
    </StyledForm>
  )
}

export default SignUpForm
