import React from 'react'
import {
  StyledContainer,
  SecessionBox,
  Text,
  EditBox,
  NicknameBox
} from './style'
import { Button, Input } from 'antd'

const EditProfile: React.FC = () => {
  return (
    <StyledContainer>
      <EditBox>
        <Text>
          <h5>개인정보 수정</h5>
          <p>개인정보를 수정할 수 있어요.</p>
        </Text>
        <NicknameBox>
          <p>닉네임 수정</p>
          <Input value="오이말고 당근" />
        </NicknameBox>
        <NicknameBox>
          <p>주소 수정</p>
          <Input />
        </NicknameBox>
        <NicknameBox>
          <p>전화번호 수정</p>
          <Input />
        </NicknameBox>
      </EditBox>
      <SecessionBox>
        <Text>
          <h5>회원탈퇴</h5>
          <p>회원 탈퇴시, 모든 사용정보가 삭제됩니다.</p>
        </Text>
        <Button type="primary" htmlType="submit">
          탈퇴하기
        </Button>
      </SecessionBox>
    </StyledContainer>
  )
}

export default EditProfile
