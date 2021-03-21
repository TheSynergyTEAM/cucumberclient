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

export const StyledMessage = styled.div<Pick<SampleMessage, 'type'>>`
  max-width: 350px;
  border-radius: 5px;
  ${(props) => css`
    margin-bottom: ${props.theme.margins.md};
    padding: ${props.theme.paddings.lg};
  `}

  ${(props) => {
    switch (props.type) {
      case 'me':
        return css`
          background-color: ${props.theme.palette.green[1]};
          align-self: flex-end;
        `
      case 'system':
        return css`
          background-color: ${props.theme.palette.grey[0]};
          align-self: center;
        `
      case 'y':
        return css`
          background-color: ${props.theme.palette.grey[1]};
          align-self: flex-start;
        `
    }
  }}
`
