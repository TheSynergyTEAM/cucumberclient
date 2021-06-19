import { Col, Input } from 'antd'
import styled, { css } from 'styled-components'
import bp from 'styles/breakpoints'

export const StyledChatMain = styled(Col)`
  /* 100% - (헤더 높이 + 채팅 인풋 높이) */
  height: calc(100% - (60px + 75px));
  position: relative;
  top: 0;
  overflow-y: auto;

  ${(props) => css`
    padding: ${props.theme.paddings.xl};
    background-color: ${props.theme.palette.white.main};
    border-right: 1px solid ${props.theme.palette.grey[1]};
  `}
`

export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`

type MessageType = Pick<SampleMessage, 'type'>

export const StyledMessage = styled.div<MessageType>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;

  ${(props) => css`
    margin-bottom: ${props.theme.margins.md};
  `}

  ${(props) => {
    switch (props.type) {
      case 'me':
        return css`
          align-self: flex-end;
        `
      case 'system':
        return css`
          align-self: center;
        `
      case 'y':
        return css`
          align-self: flex-start;
        `
    }
  }}
`

export const StyledMessageValue = styled.div<MessageType>`
  max-width: 300px;
  border-radius: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: ${({ theme }) => theme.paddings.lg};

  ${(props) => {
    switch (props.type) {
      case 'me':
        return css`
          background-color: ${props.theme.palette.green[1]};
          order: 2;
        `
      case 'system':
        return css`
          color: ${props.theme.palette.white.main};
          background-color: ${props.theme.palette.grey[5]};
        `
      case 'y':
        return css`
          background-color: ${props.theme.palette.grey[0]};
          order: 1;
        `
    }
  }}

  ${bp.mobileL} {
    max-width: 200px;
  }
`

export const StyledMessageDate = styled.div<MessageType>`
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${(props) => {
    switch (props.type) {
      case 'me':
        return css`
          margin-right: ${props.theme.margins.sm};
          order: 1;
        `
      case 'y':
        return css`
          margin-left: ${props.theme.margins.sm};
          order: 2;
        `
    }
  }}
`

export const StyledMessageInputWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
`

export const StyledMessageInputInner = styled.div`
  position: fixed;
  z-index: 2000;
  bottom: 0;
  width: 100%;
`

export const StyledMessageInputItem = styled(Col)`
  ${(props) => css`
    padding: ${props.theme.paddings.xxxl} ${props.theme.paddings.lg};
    background-color: ${props.theme.palette.white.main};
    border-top: 1px solid ${props.theme.palette.grey[1]};
    border-right: 1px solid ${props.theme.palette.grey[1]};
  `}
`

interface MessageInputProps {
  $focusing: boolean
}

export const StyledMessageInput = styled(Input)<MessageInputProps>`
  ${(props) => css`
    border: none;
    border-radius: 15px;

    &::placeholder {
      color: ${props.theme.palette.grey[3]};
    }

    ${props.$focusing &&
    css`
      & .anticon {
        color: ${props.theme.palette.grey[5]} !important;
      }
    `}
  `}
`

export const StyledMessageSuffix = styled.div`
  .anticon {
    transition: color 0.5s ease;
    will-change: color;
    color: ${({ theme }) => theme.palette.grey[3]};

    /* 첫번째 아이콘 제외하고 마진 */
    &:not(:first-of-type) {
      margin-left: ${({ theme }) => theme.margins.sm};
    }

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.palette.green[4]} !important;
    }
  }
`
