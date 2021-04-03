import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { StyledForm } from './style'

const halfStyle: (isMargin: boolean) => React.CSSProperties = (isMargin) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    width: 'calc(50% - 6px)'
  }

  if (isMargin) style.marginRight = '12px'

  return style
}

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <StyledForm layout="horizontal" form={form}>
      <Form.Item required style={halfStyle(true)}>
        <Input placeholder="아이디" />
      </Form.Item>
      <Form.Item required style={halfStyle(false)}>
        <Input placeholder="이메일" />
      </Form.Item>
      <Form.Item required>
        <Input type="password" placeholder="비밀번호" />
      </Form.Item>
      <Form.Item required>
        <Input type="password" placeholder="비밀번호 확인" />
      </Form.Item>
      <Form.Item required style={halfStyle(true)}>
        <Select placeholder="광역시/도">
          <Select.Option value={1}>서울특별시</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item required style={halfStyle(false)}>
        <Select placeholder="구">
          <Select.Option value={1}>서울특별시</Select.Option>
        </Select>
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
