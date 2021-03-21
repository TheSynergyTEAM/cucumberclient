import React, { useCallback } from 'react'
import { Row, Col, RowProps, ColProps } from 'antd'
import { useLocation } from 'react-router-dom'
import ChatContainer from 'components/chat/Container'

interface ContainerProps {
  rowProps?: RowProps
  colProps?: ColProps
}

interface ColumnsWidth {
  xs: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export const Column: Partial<ColumnsWidth> = {
  xs: 24,
  md: 18,
  lg: 12,
  xl: 10,
  xxl: 8
}

const Container: React.FC<ContainerProps> = ({
  rowProps = {},
  colProps = {},
  children
}) => {
  const location = useLocation()

  const isChatPage = useCallback(() => {
    return location.pathname.startsWith('/chat')
  }, [location.pathname])

  return !isChatPage() ? (
    <Row justify="center" gutter={10} align="middle" {...rowProps}>
      <Col {...colProps} {...Column}>
        {children}
      </Col>
    </Row>
  ) : (
    <ChatContainer origin={children} />
  )
}

export default Container
