import AreaArticles from 'components/articles/AreaArticles'
import HotArticles from 'components/articles/HotArticles'
import RecentArticles from 'components/articles/RecentArticles'
import SectionContainer from 'components/main/SectionContainer'
import userContext from 'context/user'
import React, { useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

const Main: React.FC<RouteComponentProps> = () => {
  const { isLoggedIn } = useContext(userContext)
  const [childSections, setChildSections] = useState<React.ReactNodeArray>([
    <RecentArticles key="recent-items" />,
    <HotArticles key="hot-items" />
  ])

  useEffect(() => {
    if (isLoggedIn) {
      setChildSections((nodes) => [...nodes, <AreaArticles key="area-items" />])
    }
  }, [isLoggedIn])

  return <SectionContainer childSections={childSections} />
}

export default Main
