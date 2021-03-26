import React from 'react'
import { StyledContainer, Title, EmptyBox } from './style'
import { ArticleBoxProps } from 'components/common/ArticleBox'
import ArticleBox from 'components/common/ArticleBox'

interface LikeProps {
  likeList: ArticleBoxProps[]
}

const Like: React.FC<LikeProps> = ({ likeList }) => {
  return (
    <StyledContainer>
      <Title>
        <p>관심상품</p>
      </Title>
      <div>
        {likeList.length ? (
          likeList.map((article, index) => (
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
