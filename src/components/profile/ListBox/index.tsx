import React from 'react'
import { StyledContatainer, SelectBox, SelectList } from './style'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined
} from '@ant-design/icons'

interface ListBoxProps {
  selected: string
  handleChange: (type: string) => void
}

const ListBox: React.FC<ListBoxProps> = ({ selected, handleChange }) => {
  return (
    <StyledContatainer>
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
          isSelected={selected === 'chat'}
          onClick={() => handleChange('chat')}
        >
          <MessageOutlined />
          <p>채팅목록</p>
        </SelectList>
      </SelectBox>
    </StyledContatainer>
  )
}

export default ListBox
