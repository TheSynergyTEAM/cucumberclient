import React, { useRef } from 'react'
import {
  StyledContainer,
  Direction,
  StyledLeftIcon,
  StyledRightIcon,
  StyledCarousel
} from './style'
import { CarouselRef } from 'antd/lib/carousel'

interface ImgBoxProps {
  fileList: number[]
}

const ImgBox: React.FC<ImgBoxProps> = ({ fileList }) => {
  const carouselRef = useRef<CarouselRef | null>(null)

  function onChange(a: any) {
    console.log(a)
  }

  return (
    <StyledContainer>
      <StyledCarousel afterChange={onChange} ref={carouselRef}>
        {fileList.map((url, index) => (
          <img src={`/image/${url}`} style={{ height: '100%' }} key={index} />
        ))}
      </StyledCarousel>
      {fileList.length > 1 && (
        <>
          <Direction isLeft={true}>
            <StyledLeftIcon onClick={() => carouselRef?.current?.prev()} />
          </Direction>
          <Direction isLeft={false}>
            <StyledRightIcon onClick={() => carouselRef?.current?.next()} />
          </Direction>
        </>
      )}
    </StyledContainer>
  )
}

export default ImgBox
