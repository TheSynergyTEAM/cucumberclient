import React from 'react'
import { StyledContainer, ImageBox, Nickname, Score } from './style'

const ProfileBox: React.FC = () => {
  return (
    <StyledContainer>
      <ImageBox>
        <img src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" />
      </ImageBox>
      <Nickname>
        <span>오이말고 당근 </span>님
      </Nickname>
      <Score>
        <div>
          <p>거래횟수</p>
          <p>5회</p>
        </div>
        <div>
          <p>후기평점</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </Score>
    </StyledContainer>
  )
}

export default ProfileBox
