import React, { useState } from 'react'
import { StyledContainer, Title, EmptyBox } from './style'
import ArticleBox from 'components/common/ArticleBox'

interface TradeProps {
  buyList: ArticleInfo[]
  sellList: ArticleInfo[]
}

const Trade: React.FC<TradeProps> = ({ buyList, sellList }) => {
  const [type, setType] = useState('buy')
  return (
    <StyledContainer>
      <Title type={type}>
        <p onClick={() => setType('buy')}>구매상품</p>
        <p> | </p>
        <p onClick={() => setType('sell')}>판매상품</p>
      </Title>
      <div>
        {type === 'buy' ? (
          buyList.length ? (
            buyList.map((article, index) => (
              <div key={index}>
                <ArticleBox {...article} />
              </div>
            ))
          ) : (
            <EmptyBox>구매 상품이 없습니다.</EmptyBox>
          )
        ) : sellList.length ? (
          sellList.map((article, index) => (
            <div key={index}>
              <ArticleBox {...article} />
            </div>
          ))
        ) : (
          <EmptyBox>판매 상품이 없습니다.</EmptyBox>
        )}
      </div>
    </StyledContainer>
  )
}

export default Trade
