import { Col } from 'antd'
import styled, { css } from 'styled-components'
import type { SampleMessage } from './'

export const StyledChatMain = styled(Col)`
  overflow-y: scroll;

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
  width: 100;
`

// export const StyledMessage = styled.div``

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
  max-width: 350px;
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
`

export const StyledMessageDate = styled.div<MessageType>`
  font-size: ${({ theme }) => theme.fontSizes.sm};

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
