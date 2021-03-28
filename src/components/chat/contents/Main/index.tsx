import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useEffect, useRef, useState } from 'react'
import {
  StyledChatMain,
  StyledMessage,
  StyledMessageDate,
  StyledMessageInput,
  StyledMessageInputInner,
  StyledMessageInputItem,
  StyledMessageInputWrapper,
  StyledMessageSuffix,
  StyledMessageValue,
  StyledMessageWrapper
} from './style'
import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import { useChatMessages, SampleMessage } from 'components/chat/hooks/chat'

const ChatMain: React.FC = () => {
  const { center } = useColumnSize()
  const [focusing, setFocusing] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)

  const { messages } = useChatMessages()

  const handleFocusing = () => setFocusing(true)
  const disableFocusing = () => setFocusing(false)
  const onScroll = () => {
    if (wrapper.current) {
      const scroll = wrapper.current.scrollHeight - wrapper.current.clientHeight
      wrapper.current.scrollTo(0, scroll)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      console.log('Hello Input')
    }
  }

  useEffect(() => {
    onScroll()
  }, [])

  return (
    <StyledChatMain span={center} ref={wrapper}>
      <StyledMessageWrapper>
        {messages.map((message: SampleMessage) => (
          <StyledMessage
            key={Math.floor(Math.random() * 99999)}
            type={message.type}
          >
            <StyledMessageValue type={message.type}>
              {message.value}
            </StyledMessageValue>
            <StyledMessageDate type={message.type}>
              {message.date}
            </StyledMessageDate>
          </StyledMessage>
        ))}
      </StyledMessageWrapper>
      <StyledMessageInputWrapper>
        <StyledMessageInputInner>
          <StyledMessageInputItem span={center}>
            <StyledMessageInput
              $focusing={focusing}
              onBlur={disableFocusing}
              onFocus={handleFocusing}
              onKeyPress={handleKeyPress}
              placeholder="메세지를 입력하세요."
              size="large"
              suffix={
                <StyledMessageSuffix>
                  <PictureOutlined />
                  <SendOutlined onClick={onScroll} />
                </StyledMessageSuffix>
              }
            />
          </StyledMessageInputItem>
        </StyledMessageInputInner>
      </StyledMessageInputWrapper>
    </StyledChatMain>
  )
}

export default ChatMain
