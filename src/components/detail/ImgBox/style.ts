import { Carousel } from 'antd'
import styled, { css } from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
export const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  padding: 20px 0;
  box-sizing: border-box;
  .ant-carousel,
  .slick-list,
  .slick-track {
    height: 100%;
  }
  .slick-slider {
    height: 100%;
    div {
      height: 100%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => `${theme.palette.green[1]}56`};
    }
  }
`
interface DirectionProps {
  isLeft: boolean
}

export const Direction = styled.div<DirectionProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  ${(props) =>
    props.isLeft
      ? css`
          left: 0px;
        `
      : css`
          right: 0px;
        `}
`

export const StyledCarousel = styled(Carousel)`
  height: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const StyledLeftIcon = styled(LeftOutlined)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #00000057;
  display: flex;
  svg {
    width: 50%;
    height: 50%;
    margin: auto;
    color: white;
  }
`
export const StyledRightIcon = styled(RightOutlined)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #00000057;
  display: flex;
  svg {
    width: 50%;
    height: 50%;
    margin: auto;
    color: white;
  }
`
