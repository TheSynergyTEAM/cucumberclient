import { Link, useLocation } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { StyledContainer, InnerWrapper, Logo, InputBox, Menu } from './style'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import Container from 'components/common/Container'
import SignIn from 'components/SignIn'
import UserContext from 'context/user'

const Header: React.FC = () => {
  const location = useLocation()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isLoggedIn } = useContext(UserContext)

  const handleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  return location.pathname !== '/chat' ? (
    <StyledContainer>
      <Container rowProps={{ justify: 'center', style: { width: '100%' } }}>
        <InnerWrapper>
          <Logo>
            <Link to="/">오이마켓</Link>
          </Logo>
          <InputBox>
            <input
              type="text"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
            />
            <SearchOutlined />
          </InputBox>
          <Menu>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/my-info">내 정보</Link>
                </li>
                <li>
                  <Link to="/">로그아웃</Link>
                </li>
              </>
            ) : (
              <>
                <li onClick={handleModal}>로그인</li>
                {isOpenModal && <SignIn handleModal={handleModal} />}
              </>
            )}
          </Menu>
        </InnerWrapper>
      </Container>
    </StyledContainer>
  ) : null
}

export default Header
