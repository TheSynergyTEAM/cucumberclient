import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { StyledForm } from './style'
import { useAddrCity } from '../hooks/address'

// 한 줄에 아이템을 2개 표현할 때 사용합니다.
// 인자 값이 true면 margin-right를 포함합니다.
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
  const { cities } = useAddrCity()

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <StyledForm layout="horizontal" form={form} onFinish={handleSubmit}>
      <Form.Item required style={halfStyle(true)} name="id">
        <Input placeholder="아이디" />
      </Form.Item>
      <Form.Item required style={halfStyle(false)} name="email">
        <Input placeholder="이메일" />
      </Form.Item>
      <Form.Item required name="pw">
        <Input type="password" placeholder="비밀번호" />
      </Form.Item>
      <Form.Item required name="pwRe">
        <Input type="password" placeholder="비밀번호 확인" />
      </Form.Item>
      <Form.Item required style={halfStyle(true)} name="parentLocation">
        <Select placeholder="광역시/도">
          {/* <Select.Option value={1}>서울특별시</Select.Option> */}
          {cities.map((city) => (
            <Select.Option value={city.id} key={city.id}>
              {city.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item required style={halfStyle(false)} name="childLocation">
        <Select placeholder="구">
          <Select.Option value={1}>서울특별시</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{ width: '100%' }} htmlType="submit">
          회원가입
        </Button>
      </Form.Item>
    </StyledForm>
  )
}

export default SignUpForm
