import React, { useState } from 'react'
import {
  StyledContainer,
  SecessionBox,
  Title,
  EditBox,
  EditDetail,
  ImageBox,
  SelectFile
} from './style'
import { Button, Input } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
const EditProfile: React.FC = () => {
  const [editMode, setEditMode] = useState(new Array(5).fill(false))
  const handleChangeMode = (num: number) => {
    const arr = editMode
    arr[num] = !editMode[num]
    console.log(arr)
    setEditMode([...arr])
  }

  return (
    <StyledContainer>
      <EditBox>
        <Title>
          <h5>개인정보 수정</h5>
          <p>개인정보를 수정할 수 있어요.</p>
        </Title>
        <ImageBox>
          <img src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" />
          <SelectFile htmlFor="profile-img">
            <PictureOutlined />
          </SelectFile>
          <input type="file" id="profile-img" />
        </ImageBox>
        <EditDetail>
          <h6>닉네임</h6>
          <div>
            {editMode[0] ? (
              <>
                <Input type="text" value="오이말고 당근" />
                <Button onClick={() => handleChangeMode(0)}>완료</Button>
              </>
            ) : (
              <>
                <p>오이말고 당근</p>
                <Button onClick={() => handleChangeMode(0)}>수정</Button>
              </>
            )}
          </div>
        </EditDetail>
        <EditDetail>
          <h6>생년월일</h6>
          <div>
            {editMode[1] ? (
              <>
                <Input type="text" value="996633" />
                <Button onClick={() => handleChangeMode(1)}>완료</Button>
              </>
            ) : (
              <>
                <p>996633</p>
                <Button onClick={() => handleChangeMode(1)}>수정</Button>
              </>
            )}
          </div>
        </EditDetail>
        <EditDetail>
          <h6>이메일</h6>
          <div>
            {editMode[2] ? (
              <>
                <Input type="email" value="123@gmail.com" />
                <Button onClick={() => handleChangeMode(2)}>인증</Button>
              </>
            ) : (
              <>
                <p>123@gmail.com</p>
                <Button onClick={() => handleChangeMode(2)}>변경</Button>
              </>
            )}
          </div>
        </EditDetail>
        <EditDetail>
          <h6>휴대폰</h6>
          <div>
            {editMode[3] ? (
              <>
                <Input type="text" value="01012345678" />
                <Button onClick={() => handleChangeMode(3)}>인증</Button>
              </>
            ) : (
              <>
                <p>01012345678</p>
                <Button onClick={() => handleChangeMode(3)}>변경</Button>
              </>
            )}
          </div>
        </EditDetail>
        <EditDetail>
          <h6>주소</h6>
          <div>
            {editMode[4] ? (
              <>
                <Input type="text" value="서울 중구 00동" />
                <Button onClick={() => handleChangeMode(4)}>완료</Button>
              </>
            ) : (
              <>
                <p>서울 중구 00동</p>
                <Button onClick={() => handleChangeMode(4)}>변경</Button>
              </>
            )}
          </div>
        </EditDetail>
      </EditBox>
      <SecessionBox>
        <Title>
          <h5>회원탈퇴</h5>
          <p>회원 탈퇴시, 모든 사용정보가 삭제됩니다.</p>
        </Title>
        <Button type="primary" htmlType="submit">
          탈퇴하기
        </Button>
      </SecessionBox>
    </StyledContainer>
  )
}

export default EditProfile
