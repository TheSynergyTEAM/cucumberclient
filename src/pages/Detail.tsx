import React from 'react'
import { Col, Row } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import DetailInfo from 'components/detail/DetailInfo'
import ImgBox from 'components/detail/ImgBox'

const imgList = [
  'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
  'https://ccimg.hellomarket.com/images/2021/item/04/09/21/4411680_4880079_3.jpg?size=s6',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop'
]

const detail: Article.ArticleDetail = {
  id: 1,
  img: [
    'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
    'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
    'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop',
    'https://dnvefa72aowie.cloudfront.net/origin/article/202103/E1F4AA664E524FD622535207EEB9A445165DB89079455111AD4E48433DDB20F5.jpg?q=82&s=300x300&t=crop'
  ],
  name: '자전거팝니다',
  desc: `3발 두발 가능해요
상태 좋아요 생활기스 있어요 예민맘 ×
실사용 5회 이하 !3발 두발 가능해요
상태 좋아요 생활기스 있어요 예민맘 ×
실사용 5회 이하 !3발 두발 가능해요
상태 좋아요 생활기스 있어요 예민맘 ×
실사용 5회 이하 !3발 두발 가능해요
상태 좋아요 생활기스 있어요 예민맘 ×
실사용 5회 이하 !`,
  price: '100,000',
  region: '서울 중구',
  user_profile:
    'https://pgnqdrjultom1827145.cdn.ntruss.com/img/48/45/484566523fa21c60f55661c3dae19dd2df2a089ce81f8e10a8927b8f95c32bcb_v1.jpg',
  nickname: '홍길동',
  rating: 4,
  category: '운동기구',
  upload_time: '2020-03-27',
  like: 5,
  chat: 3,
  views: 50
}

const Detail: React.FC<RouteComponentProps> = () => {
  return (
    <Row justify="space-between">
      <Col xs={24} md={11}>
        <ImgBox imgList={imgList} />
      </Col>
      <Col xs={24} md={11}>
        <DetailInfo articleInfo={detail} />
      </Col>
    </Row>
  )
}

export default Detail
