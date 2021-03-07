import React from 'react'
import * as S from './style'
import SearchOutlined from '@ant-design/icons/SearchOutlined'

const Header: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.Logo>오이마켓</S.Logo>
      <S.InputBox>
        <input type="text" placeholder="동네 이름, 물품명 등을 검색해보세요!" />
        <SearchOutlined />
      </S.InputBox>
      <S.Menu>
        <li>SIGN IN</li>
      </S.Menu>
    </S.StyledContainer>
  )
}

export default Header
