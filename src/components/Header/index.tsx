import React from 'react'
import * as S from './style'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import Container from 'components/common/Container'

const Header: React.FC = () => {
  return (
    <S.StyledContainer>
      <Container rowProps={{ justify: 'center', style: { width: '100%' } }}>
        <S.InnerWrapper>
          <S.Logo>오이마켓</S.Logo>
          <S.InputBox>
            <input
              type="text"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
            />
            <SearchOutlined />
          </S.InputBox>
          <S.Menu>
            <li>SIGN IN</li>
          </S.Menu>
        </S.InnerWrapper>
      </Container>
    </S.StyledContainer>
  )
}

export default Header
