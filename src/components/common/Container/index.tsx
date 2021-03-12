import React from 'react'
import { Row, Col, RowProps, ColProps } from 'antd'

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
  xl: 10
}

const Container: React.FC<ContainerProps> = ({
  rowProps = {},
  colProps = {},
  children
}) => {
  return (
    <Row justify="center" gutter={10} align="middle" {...rowProps}>
      <Col {...colProps} {...Column}>
        {children}
      </Col>
    </Row>
  )
}

export default Container
