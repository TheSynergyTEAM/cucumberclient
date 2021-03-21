import { Col, Row } from 'antd'
import styled, { css } from 'styled-components'

export const StyledChatHeader = styled(Row)`
  display: flex;
  align-items: center;
  height: 60px;

  ${(props) => css`
    /* padding: ${props.theme.paddings.md}; */
    background-color: ${props.theme.palette.white.main};
  `}
`

export const StyledChatHeaderItem = styled(Col)`
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) => css`
    padding: 0 ${props.theme.paddings.xl};
    border-right: 1px solid ${props.theme.palette.grey[1]};
    border-bottom: 1px solid ${props.theme.palette.grey[1]};
  `}
`
