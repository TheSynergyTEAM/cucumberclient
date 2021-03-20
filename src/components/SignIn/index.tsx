import React from 'react'

import Container from 'components/common/Container'
import { Link } from 'react-router-dom'
import {
  ModalOverlay,
  ModalContainer,
  ModalNav,
  StyledForm,
  Title,
  SubText,
  DivideLine,
  SignUpLink
} from './style'
import { Form, Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
}

interface SignInProps {
  handleModal: () => void
}

const SignIn: React.FC<SignInProps> = ({ handleModal }) => {
  //const [userInfo, setUserInfo] = useState({ id: '', password: '' })
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <ModalOverlay>
      <Container>
        <ModalContainer>
          <ModalNav>
            <Button onClick={handleModal}>
              <CloseOutlined />
            </Button>
          </ModalNav>
          <StyledForm>
            <Title>시작하기</Title>
            <SubText>
              지금 로그인하고 오이마켓을 경험해보세요.
              <br />
              중고 거래부터 동네 정보까지,
              <br /> 이웃과 함께 해요.
            </SubText>
            <DivideLine />
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="Email" name="username">
                <Input placeholder="이메일을 입력해주세요" />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password placeholder="비밀번호를 입력해주세요" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" ghost block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </StyledForm>
          <SignUpLink>
            계정이 없으신가요?{' '}
            <Link to="/sign-up" onClick={handleModal}>
              SIGN UP
            </Link>
          </SignUpLink>
        </ModalContainer>
      </Container>
    </ModalOverlay>
  )
}

export default SignIn
