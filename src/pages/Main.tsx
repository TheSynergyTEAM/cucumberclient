import SectionContainer, { SectionBase } from 'components/main/SectionContainer'
import userContext from 'context/user'
import React, { useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

const Main: React.FC<RouteComponentProps> = () => {
  const { isLoggedIn } = useContext(userContext)
  const [childSections, setChildSections] = useState<React.ReactNodeArray>([
    <SectionBase title="최근 매물" key="recent-items">
      1234
    </SectionBase>,
    <SectionBase title="HOT한 매물" key="hot-items">
      HOT HOT
    </SectionBase>
  ])

  useEffect(() => {
    if (isLoggedIn) {
      setChildSections((nodes) => [
        ...nodes,
        <SectionBase title="우리 동네 매물" key="address-items">
          1234567
        </SectionBase>
      ])
    }
  }, [isLoggedIn])

  return <SectionContainer childSections={childSections} />
}

export default Main
