import React, { useContext } from 'react'
import { Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { RouteComponentProps } from 'react-router-dom'
import SliderContext from 'context/Slider'

const Main: React.FC<RouteComponentProps> = () => {
  const { setIsVisible } = useContext(SliderContext)
  return (
    <div>
      <Input />
      <Button onClick={() => setIsVisible(true)}>
        <PlusOutlined />
        상품등록
      </Button>
    </div>
  )
}

export default Main
