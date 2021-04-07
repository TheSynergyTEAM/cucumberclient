import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'antd'
import { StyledForm } from './style'
import { useAddrCity } from 'components/auth/hooks/address'

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
  const [parentAddr, setParentAddr] = useState<Nullable<number>>(undefined)
  const { parentAddress, childAddress, childAddrDisabled } = useAddrCity(
    parentAddr
  )

  const handleSubmit = (values: any) => {
    // 회원가입 버튼 클릭 이벤트
    console.log(values)
  }

  const handleChangeParentAddr = (value: any) => {
    setParentAddr(value)

    // 광역시,도가 변경되면 하위 주소를 null로 만듭니다.
    form.setFieldsValue({
      childAddress: null
    })
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
      <Form.Item required style={halfStyle(true)} name="parentAddress">
        <Select placeholder="광역시/도" onChange={handleChangeParentAddr}>
          {parentAddress.map((address) => (
            <Select.Option value={address.id} key={address.id}>
              {address.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item required style={halfStyle(false)} name="childAddress">
        <Select placeholder="구" disabled={childAddrDisabled}>
          {childAddress &&
            childAddress.streetList.map((address) => (
              <Select.Option key={address} value={address}>
                {address}
              </Select.Option>
            ))}
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
