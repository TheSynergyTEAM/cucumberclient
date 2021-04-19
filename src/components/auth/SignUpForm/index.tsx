import React, { useState } from 'react'
import { Button, Form, Input, message, Select } from 'antd'
import { StyledForm } from './style'
import { useAddrCity } from 'components/auth/hooks/address'
import { FormItemProps, Rule } from 'antd/lib/form'
import { signUp } from 'api/auth'

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

type RuleTarget =
  | 'id'
  | 'email'
  | 'password'
  | 'passwordRe'
  | 'parentAddr'
  | 'childAddr'
  | 'phone'
  | 'birth'
type FormRule = {
  [P in RuleTarget]: Rule[]
}

// 폼의 룰을 정합니다.
const formRule: FormRule = {
  // 아이디
  id: [
    { required: true, message: '아이디를 확인해주세요.' },
    (_) => ({
      // 길이 제한 validate
      validator(_, value) {
        if (value && value.length && value.length < 5) {
          return Promise.reject()
        }
        return Promise.resolve()
      },
      message: '아이디는 5자 이상이여야 합니다.'
    }),
    {
      validator: (_, value) => {
        // 한글 정규식
        const regexKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g
        // 특수문자 정규식
        const regexSpecial = /[~!@#$%^&*()_+|<>?:{}]/g

        if (regexKor.test(value) || regexSpecial.test(value)) {
          return Promise.reject()
        }
        return Promise.resolve()
      },
      message: '아이디는 숫자와 영어로만 작성 가능합니다.'
    }
  ],
  // 이메일
  email: [{ type: 'email', required: true, message: '이메일을 확인해주세요.' }],
  // 비밀번호
  password: [
    { required: true, message: '비밀번호를 입력해주세요.' },
    (_) => ({
      validator(_, value) {
        if (value && value.length > 7) {
          return Promise.resolve()
        }
        return Promise.reject()
      },
      message: '비밀번호는 8자 이상이여야 합니다.'
    })
  ],
  // 비밀번호 확인
  passwordRe: [
    { required: true, message: '비밀번호를 다시 한번 입력해주세요.' },
    ({ getFieldsValue }) => ({
      validator(_, value) {
        if (getFieldsValue(['password']).password === value) {
          return Promise.resolve()
        }
        return Promise.reject()
      },
      message: '비밀번호가 서로 다릅니다.'
    })
  ],
  // 광역시,도
  parentAddr: [{ required: true, message: '광역시,도를 선택해주세요.' }],
  // 구
  childAddr: [{ required: true, message: '지역을 선택해주세요.' }],
  // 전화번호
  phone: [
    {
      required: true,
      message: '전화번호를 입력하세요. (- 제외)',
      min: 11,
      max: 11
    }
  ],
  // 생년월일
  birth: [
    {
      required: true,
      message: '생년월일을 입력하세요. (- 제외)',
      min: 6,
      max: 6
    }
  ]
}

const baseFormItemProps: FormItemProps = {
  required: true,
  hasFeedback: true
}

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm()
  const [parentAddr, setParentAddr] = useState<Nullable<number>>(undefined)
  const { parentAddress, childAddress, childAddrDisabled } = useAddrCity(
    parentAddr
  )
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (_values: any) => {
    setLoading(true)
    // 회원가입 버튼 클릭 이벤트
    const formData = await form.validateFields()
    // 데이터 가공
    // 핸드폰 번호 (01025989724 -> 010-2598-9724)
    const processContact = (contact: string) => {
      const r = contact.split('')
      r.splice(3, 0, '-')
      r.splice(8, 0, '-')
      return r.join('')
    }
    formData.contact = processContact(formData.contact)
    // 광역시,도 아이디 값으로 해당 지역 이름 찾기
    formData.street1 = parentAddress.find(
      (addr) => addr.id === formData.street1
    )?.name
    // 생년월일 (970313 -> 1997-03-13)
    const processBirthDate = (birthDate: string) => {
      const r = birthDate.split('')
      r.splice(2, 0, '-')
      r.splice(5, 0, '-')

      const yearPostfix = parseInt(r[0] + r[1])

      if (yearPostfix > 50) {
        r.unshift('1', '9')
      } else {
        r.unshift('2', '0')
      }

      return r.join('')
    }
    formData.birthDate = processBirthDate(formData.birthdate)
    delete formData.birthdate

    try {
      signUp(formData)
      message.success('회원가입 성공')
    } catch (error) {
      return message.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeParentAddr = (value: any) => {
    setParentAddr(value)

    // 광역시,도가 변경되면 하위 주소를 null로 만듭니다.
    form.setFieldsValue({
      childAddress: null
    })
  }

  return (
    <StyledForm
      layout="horizontal"
      form={form}
      onFinish={handleSubmit}
      validateMessages={{ required: '', default: '' }}
    >
      <Form.Item
        {...baseFormItemProps}
        style={halfStyle(true)}
        name="name"
        rules={formRule.id}
      >
        <Input placeholder="아이디" />
      </Form.Item>
      <Form.Item
        {...baseFormItemProps}
        style={halfStyle(false)}
        name="email"
        rules={formRule.email}
      >
        <Input placeholder="이메일" type="email" />
      </Form.Item>
      <Form.Item
        {...baseFormItemProps}
        name="password"
        rules={formRule.password}
      >
        <Input type="password" placeholder="비밀번호" />
      </Form.Item>
      <Form.Item
        {...baseFormItemProps}
        name="pwRe"
        rules={formRule.passwordRe}
        dependencies={['pw']}
      >
        <Input type="password" placeholder="비밀번호 확인" />
      </Form.Item>
      <Form.Item
        required
        style={halfStyle(true)}
        name="street1"
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
        name="street2"
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
      <Form.Item
        {...baseFormItemProps}
        style={halfStyle(true)}
        name="contact"
        rules={formRule.phone}
      >
        <Input type="tel" placeholder="전화번호" maxLength={11} max={11} />
      </Form.Item>
      <Form.Item
        {...baseFormItemProps}
        style={halfStyle(false)}
        name="birthdate"
        rules={formRule.birth}
      >
        <Input type="text" placeholder="생년월일" maxLength={6} max={6} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          style={{ width: '100%' }}
          htmlType="submit"
          loading={loading}
        >
          회원가입
        </Button>
      </Form.Item>
    </StyledForm>
  )
}

export default SignUpForm
