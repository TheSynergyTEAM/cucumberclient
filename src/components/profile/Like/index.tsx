import React from 'react'
import { StyledContainer, Title, Articles } from './style'
import { ArticleBoxProps } from 'components/common/ArticleBox'
import ArticleBox from 'components/common/ArticleBox'

interface LikeProps {
  likeArticles: ArticleBoxProps[]
}

const Like: React.FC<LikeProps> = ({ likeArticles }) => {
  console.log(likeArticles.length)
  return (
    <StyledContainer>
      <Title>
        <p>관심상품</p>
      </Title>
      <Articles>
        {likeArticles.length
          ? likeArticles.map((article, index) => (
              <div key={index}>
                <ArticleBox {...article} />
              </div>
            ))
          : '관심 상품이 없습니다.'}
      </Articles>
    </StyledContainer>
  )
}

export default Like
