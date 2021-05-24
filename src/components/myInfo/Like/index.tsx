import React, { useState } from 'react'
import { StyledContainer, Title, EmptyBox } from './style'
import ArticleBox from 'components/common/ArticleBox'

const Like: React.FC = () => {
  // 판매, 구매 목록 받아오는 처리가 필요함 > 아직 api없어서 임시로 만들어놓음
  const [itemList] = useState<ArticleCardData[]>([])

  return (
    <StyledContainer>
      <Title>
        <p>관심상품</p>
      </Title>
      <div>
        {itemList.length ? (
          itemList.map((article, index) => (
            <div key={index}>
              <ArticleBox {...article} />
            </div>
          ))
        ) : (
          <EmptyBox>관심 상품이 없습니다.</EmptyBox>
        )}
      </div>
    </StyledContainer>
  )
}

export default Like
