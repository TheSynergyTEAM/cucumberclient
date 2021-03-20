import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import Container from 'components/common/Container'
import SignIn from 'components/SignIn'

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <S.StyledContainer>
      <Container rowProps={{ justify: 'center', style: { width: '100%' } }}>
        <S.InnerWrapper>
          <S.Logo>
            <Link to="/">오이마켓</Link>
          </S.Logo>
          <S.InputBox>
            <input
              type="text"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
            />
            <SearchOutlined />
          </S.InputBox>
          <S.Menu>
            <li onClick={handleModal}>SIGN IN</li>
            {isOpenModal && <SignIn handleModal={handleModal} />}
          </S.Menu>
        </S.InnerWrapper>
      </Container>
    </S.StyledContainer>
  )
}

export default Header
