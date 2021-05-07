import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { RouteComponentProps } from 'react-router-dom'
import Create from 'components/create'

const Main: React.FC<RouteComponentProps> = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)
  return (
    <div>
      <Input />
      <Button onClick={() => setIsShowDrawer(true)}>
        <PlusOutlined />
        상품등록
      </Button>
      {isShowDrawer && (
        <Create isShowDrawer={isShowDrawer} setIsShowDrawer={setIsShowDrawer} />
      )}
    </div>
  )
}

export default Main
