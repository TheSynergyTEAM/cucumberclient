import AreaArticles from 'components/articles/AreaArticles'
import HotArticles from 'components/articles/HotArticles'
import RecentArticles from 'components/articles/RecentArticles'
import SectionContainer from 'components/main/SectionContainer'
import userContext from 'context/user'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { RouteComponentProps } from 'react-router-dom'
import Create from 'components/create'

const Main: React.FC<RouteComponentProps> = () => {
  const { isLoggedIn } = useContext(userContext)
  const [childSections, setChildSections] = useState<React.ReactNodeArray>([
    <RecentArticles key="recent-items" />,
    <HotArticles key="hot-items" />
  ])
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)

  useEffect(() => {
    if (isLoggedIn) {
      setChildSections((nodes) => [...nodes, <AreaArticles key="area-items" />])
    }
  }, [isLoggedIn])

  return (
    <>
      <Button onClick={() => setIsShowDrawer(true)}>
        <PlusOutlined />
        상품등록
      </Button>
      <SectionContainer childSections={childSections} />
      {isShowDrawer && (
        <Create isShowDrawer={isShowDrawer} setIsShowDrawer={setIsShowDrawer} />
      )}
    </>
  )
}

export default Main
