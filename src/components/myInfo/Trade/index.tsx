import React, { useEffect, useState } from 'react'
import { StyledContainer, Title, EmptyBox } from './style'
import ArticleBox from 'components/common/ArticleBox'
import { getBuyArticles, getSellArticles } from 'api/article'

interface TradeProps {
  userId: Nullable<number>
}

const Trade: React.FC<TradeProps> = ({ userId }) => {
  const [type, setType] = useState('buy')

  // 판매, 구매 목록 받아오는 처리가 필요함 > 아직 api없어서 임시로 만들어놓음
  const [sellList, setSellList] = useState<ArticleCardData[]>([])
  const [buyList, setBuyList] = useState<ArticleCardData[]>([])

  useEffect(() => {
    if (userId) {
      getBuyArticles(userId).then((res) => setBuyList(res))
      getSellArticles(userId).then((res) => setSellList(res))
    }
  }, [])

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
