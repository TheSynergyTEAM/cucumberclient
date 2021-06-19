import { useColumnSize } from 'components/chat/hooks/column-size'
import React, { useEffect, useRef, useState, useContext } from 'react'
import { getChattingInfo } from 'api/chat'
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
import userContext from 'context/user'
import chatContext from 'context/chat'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

let stompClient: any = null
const ChatMain: React.FC = () => {
  const { user } = useContext(userContext)
  const { currentChatroom } = useContext(chatContext)
  const [contents, setContents] = React.useState<IndividualChat[]>([])
  const [message, setMessage] = React.useState('')
  const { center } = useColumnSize()
  const [focusing, setFocusing] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)

  const handleFocusing = () => setFocusing(true)
  const disableFocusing = () => setFocusing(false)

  const getChatting = async (
    senderId: number,
    receiverId: number,
    itemId: number
  ) => {
    const responseInfo = await getChattingInfo(senderId, receiverId, itemId)
    setContents(responseInfo.contents)
  }

  useEffect(() => {
    if (currentChatroom) {
      getChatting(
        currentChatroom.senderId,
        currentChatroom.receiverId,
        currentChatroom.itemId
      )
    }
  }, [currentChatroom])

  const onScroll = () => {
    if (wrapper.current) {
      const scroll = wrapper.current.scrollHeight - wrapper.current.clientHeight
      wrapper.current.scrollTo(0, scroll)
    }
  }

  const handleEnter = () => {
    // 채팅내용을 서버로 보냄
    stompClient.send(
      `/app/chat`,
      {},
      JSON.stringify({
        senderId: user?.id,
        receiverId: 1,
        content: message,
        itemId: 1
      })
    )
  }

  console.log(currentChatroom)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      handleEnter()
    }
  }

  useEffect(() => {
    const sockJS = new SockJS('http://localhost:8080/ws')
    stompClient = Stomp.over(sockJS)
    stompClient.connect({}, onConnected)
  }, [])

  // const updateChat = (res: any) => {
  //   console.log(contents)
  //   setContents([
  //     ...contents,
  //     {
  //       value: res.content,
  //       type: 'me',
  //       date: 4
  //     }
  //   ])
  //   setMessage('')
  // }
  const onConnected = () => {
    console.log('connected')
    stompClient.subscribe('/user/2/1/1/queue/messages', (data: any) => {
      const res = JSON.parse(data.body)
      const newChat = {
        ...res,
        created: `${new Date()}`,
        modified: `${new Date()}`
      }

      console.log('============chat===========', contents)
      setContents([...contents, newChat])
      setMessage('')
    })
  }

  useEffect(() => {
    onScroll()
  }, [])

  return (
    <StyledChatMain span={center} ref={wrapper}>
      <StyledMessageWrapper>
        {contents.map((message: IndividualChat) => {
          return (
            <StyledMessage key={Math.floor(Math.random() * 99999)} type="me">
              <StyledMessageValue type="me">
                {message.content}
              </StyledMessageValue>
              <StyledMessageDate type="me">{message.created}</StyledMessageDate>
            </StyledMessage>
          )
        })}
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
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
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
