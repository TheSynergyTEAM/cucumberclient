import { Col, Skeleton } from 'antd'
import React from 'react'
import { COLUMN_SIZE, MAX_VIEW_COUNT } from '../hooks/articles'

const ArticleLoading: React.FC = () => {
  return (
    <>
      {new Array(MAX_VIEW_COUNT).fill(0).map((key, idx) => (
        <Col span={COLUMN_SIZE} key={`card-loading-${idx}`}>
          <Skeleton.Button
            active
            style={{ width: '100%', height: '200px', marginBottom: '0.5rem' }}
          />
          <Skeleton.Button
            active
            size="small"
            style={{ width: '50%', marginBottom: '0.5rem' }}
          />
          <Skeleton.Button active size="small" style={{ width: '80%' }} />
        </Col>
      ))}
    </>
  )
}

export default ArticleLoading
