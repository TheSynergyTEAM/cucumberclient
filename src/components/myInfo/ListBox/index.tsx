import React from 'react'
import { StyledContainer, SelectBox, SelectList } from './style'
import { useHistory } from 'react-router-dom'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
  EditOutlined
} from '@ant-design/icons'

interface ListBoxProps {
  selected: string
  handleChange: (type: string) => void
}

const ListBox: React.FC<ListBoxProps> = ({ selected, handleChange }) => {
  const history = useHistory()
  return (
    <StyledContainer>
      <SelectBox>
        <SelectList
          isSelected={selected === 'my'}
          onClick={() => handleChange('my')}
        >
          <UserOutlined />
          <p>내 정보</p>
        </SelectList>
        <SelectList
          isSelected={selected === 'trade'}
          onClick={() => handleChange('trade')}
        >
          <ShoppingCartOutlined />
          <p>거래내역</p>
        </SelectList>
        <SelectList
          isSelected={selected === 'like'}
          onClick={() => handleChange('like')}
        >
          <HeartOutlined />
          <p>관심목록</p>
        </SelectList>
        <SelectList
          isSelected={selected === 'review'}
          onClick={() => handleChange('review')}
        >
          <EditOutlined />
          <p>리뷰내역</p>
        </SelectList>
        <SelectList
          isSelected={selected === 'chat'}
          onClick={() => history.push('/chat')}
        >
          <MessageOutlined />
          <p>채팅목록</p>
        </SelectList>
      </SelectBox>
    </StyledContainer>
  )
}

export default ListBox
