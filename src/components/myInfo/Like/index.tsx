import React, { useState, useContext, useEffect } from 'react'
import userContext from 'context/user'
import { getFavouriteList } from 'api/favourite'
import { StyledContainer, Title, EmptyBox } from './style'
import ArticleBox from 'components/common/ArticleBox'

const Like: React.FC = () => {
  const { user } = useContext(userContext)
  const [itemList, setItemList] = useState<ArticleCardData[]>([])

  const getList = async (userId: number) => {
    const list = await getFavouriteList(userId)
    setItemList(list)
  }

  useEffect(() => {
    if (user) {
      getList(user.id)
    }
  }, [user])
  console.log(itemList)
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
