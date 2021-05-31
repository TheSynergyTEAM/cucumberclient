import React from 'react'
import { StyledContainer, ImageBox, Nickname, Score } from './style'

interface ProfileBoxProps {
  user: Nullable<User>
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ user }) => {
  return (
    <StyledContainer>
      <ImageBox>
        <img src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" />
      </ImageBox>
      <Nickname>
        <span>{user?.name} </span>님
      </Nickname>
      <Score>
        <div>
          <p>거래횟수</p>
          <p>5회</p>
        </div>
        <div>
          <p>후기평점</p>
          <p>{'⭐'.repeat(user?.ratingScore || 5)}</p>
        </div>
      </Score>
    </StyledContainer>
  )
}

export default ProfileBox
