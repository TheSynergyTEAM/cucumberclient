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
  StyledMessageWrapper,
  StyledFinishMessage
} from './style'
import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import userContext from 'context/user'
import chatContext from 'context/chat'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
interface ChatMainProps {
  changeChatRoomInfo: (receiverId: number, changedInfo: ChatRoom) => void
}

const ChatMain: React.FC<ChatMainProps> = ({ changeChatRoomInfo }) => {
  const stompClient = useRef<Stomp.Client>()
  const plate = useRef<Nullable<IndividualChat>>()
  const { user } = useContext(userContext)
  const { currentChatroom } = useContext(chatContext)
  const [contents, setContents] = React.useState<IndividualChat[]>([])
  // const { changeChatRoomInfo } = useChatRoom()

  const [message, setMessage] = React.useState('')
  const { center } = useColumnSize()
  const [focusing, setFocusing] = useState(false)
  const currentIndexRef = useRef<number>(0)
  const totalIndexRef = useRef<number>(0)
  const wrapper = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)

  const handleFocusing = () => setFocusing(true)
  const disableFocusing = () => setFocusing(false)

  const getChatting = async (
    senderId: number,
    receiverId: number,
    itemId: number,
    currentPageIndex: number
  ) => {
    console.log(receiverId)
    const responseInfo = await getChattingInfo(
      senderId,
      receiverId,
      itemId,
      currentPageIndex
    )

    totalIndexRef.current = Number(responseInfo.totalPages)
    // console.log(contents)
    setContents(
      currentPageIndex === 0
        ? responseInfo.contents.reverse()
        : [...responseInfo.contents.reverse(), ...contents]
    )
  }

  useEffect(() => {
    if (currentChatroom) {
      currentIndexRef.current = 0
      getChatting(
        currentChatroom.senderId,
        currentChatroom.receiverId,
        currentChatroom.itemId,
        currentIndexRef.current
      )
      currentIndexRef.current += 1
    }
  }, [currentChatroom])

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current?.addEventListener('scroll', () => {
        if (
          wrapper.current?.scrollTop &&
          wrapper.current?.scrollTop < 10 &&
          currentIndexRef.current < totalIndexRef.current &&
          currentChatroom
        ) {
          console.log(currentChatroom)

          getChatting(
            currentChatroom.senderId,
            currentChatroom.receiverId,
            currentChatroom.itemId,
            currentIndexRef.current
          )
          currentIndexRef.current += 1
        }
      })
    }
    return () => wrapper.current?.removeEventListener('scroll', () => {})
  }, [currentChatroom])

  const onScroll = () => {
    if (wrapper.current && target.current) {
      wrapper.current.scrollTo(0, target.current.offsetHeight)
    }
  }

  useEffect(() => {
    if (contents.length > 0 && plate.current) {
      console.log('========1===========')
      console.log(currentChatroom)
      setContents([...contents, plate.current])
      if (
        currentChatroom &&
        currentChatroom.receiverId === plate.current.receiverId
      ) {
        changeChatRoomInfo(currentChatroom.receiverId, {
          ...currentChatroom,
          lastContent: plate.current.content
        })
      }
    }
  }, [plate.current?.id, currentChatroom])

  const handleEnter = () => {
    // 채팅내용을 서버로 보냄
    if (stompClient.current) {
      stompClient.current.send(
        `/app/chat`,
        {},
        JSON.stringify({
          senderId: user?.id,
          receiverId: currentChatroom?.receiverId,
          content: message,
          itemId: currentChatroom?.itemId
        })
      )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.key === 'Enter') {
      handleEnter()
    }
  }

  useEffect(() => {
    if (currentChatroom) {
      const sockJS = new SockJS('http://localhost:8080/ws')
      stompClient.current = Stomp.over(sockJS)
      stompClient.current.connect({}, onConnected)
    }
    return () => {
      if (stompClient.current?.connected) {
        stompClient.current?.disconnect(() => console.log('연결이 끊김'))
      }
    }
  }, [currentChatroom])

  const onConnected = () => {
    console.log('connected')
    if (stompClient.current && stompClient.current?.connected) {
      stompClient.current.subscribe(
        `/user/2/${currentChatroom?.receiverId}/${currentChatroom?.itemId}/queue/messages`,
        (data: any) => {
          const res = JSON.parse(data.body)
          const newChat = {
            ...res,
            created: `${new Date()}`,
            modified: `${new Date()}`
          }

          plate.current = newChat
          setMessage('')
        }
      )
    }
  }

  useEffect(() => {
    onScroll()
  }, [contents])

  console.log(contents)

  // 여기까지했음 > 내꺼 상대방꺼 보여주는거 해야됨
  return (
    <StyledChatMain span={center} ref={wrapper}>
      <StyledMessageWrapper ref={target}>
        {contents.map((message: IndividualChat) => {
          console.log(message)
          if (Number(message.chatId.split('_')[0]) === user?.id) {
            return (
              <StyledMessage key={message.id} type="me">
                <StyledMessageValue type="me">
                  {message.content}
                </StyledMessageValue>
                <StyledMessageDate type="me">
                  {message.created}
                </StyledMessageDate>
              </StyledMessage>
            )
          } else if (
            Number(message.chatId.split('_')[1]) === message.receiverId
          ) {
            return (
              <StyledMessage key={message.id} type="y">
                <StyledMessageValue type="y">
                  {message.content}
                </StyledMessageValue>
                <StyledMessageDate type="y">
                  {message.created}
                </StyledMessageDate>
              </StyledMessage>
            )
          }
        })}
      </StyledMessageWrapper>
      <StyledMessageInputWrapper>
        <StyledMessageInputInner>
          <StyledMessageInputItem span={center}>
            {currentChatroom?.valid ? (
              <StyledMessageInput
                $focusing={focusing}
                onBlur={disableFocusing}
                onFocus={handleFocusing}
                onKeyPress={handleKeyPress}
                placeholder="메세지를 입력하세요."
                size="large"
                value={message}
                onChange={(e) => {
                  setMessage(e.currentTarget.value)
                }}
                suffix={
                  <StyledMessageSuffix>
                    <PictureOutlined />
                    <SendOutlined onClick={onScroll} />
                  </StyledMessageSuffix>
                }
              />
            ) : (
              <StyledFinishMessage>
                거래가 완료되어, 채팅이 종료되었습니다
              </StyledFinishMessage>
            )}
          </StyledMessageInputItem>
        </StyledMessageInputInner>
      </StyledMessageInputWrapper>
    </StyledChatMain>
  )
}

export default ChatMain
