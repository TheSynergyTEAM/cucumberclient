import { Link, useHistory, useLocation } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { StyledContainer, InnerWrapper, Logo, InputBox, Menu } from './style'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import Container from 'components/common/Container'
import SignIn from 'components/SignIn'
import UserContext from 'context/user'
import { logout } from 'api/auth'

const Header: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const [search, setSearch] = useState<string>()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isLoggedIn, setUser } = useContext(UserContext)

  const handleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSearch = () => {
    if (search) {
      history.push(`/search/${search}`)
      setSearch(undefined)
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    history.push('/')
    setIsOpenModal(false)
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
              onChange={(e) => setSearch(e.currentTarget.value)}
              value={search}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />
            <SearchOutlined onClick={handleSearch} />
          </InputBox>
          <Menu>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/my-info">내 정보</Link>
                </li>
                <li onClick={handleLogout} key="logout">
                  로그아웃
                </li>
              </>
            ) : (
              <>
                <li onClick={handleModal} key="login">
                  로그인
                </li>
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
