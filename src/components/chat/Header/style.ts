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

interface HeaderItemProps {
  $center?: boolean
}

export const StyledChatHeaderItem = styled(Col)<HeaderItemProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;

  ${(props) => css`
    padding: 0 ${props.theme.paddings.xl};
    border-right: 1px solid ${props.theme.palette.grey[1]};
    border-bottom: 1px solid ${props.theme.palette.grey[1]};
  `}

  ${(props) =>
    props.$center &&
    css`
      flex-direction: column;
      justify-content: center;
    `}
`

export const StyledHeaderUser = styled.div`
  padding: 0;
  margin: 0;

  ${(props) => css`
    font-size: ${props.theme.fontSizes.lg};
    font-weight: bold;
  `}
`

export const StyledHeaderDesc = styled.div`
  ${(props) => css`
    margin-top: 3px;
    font-size: ${props.theme.fontSizes.xs};
    color: ${props.theme.palette.grey[6]};
  `}
`
