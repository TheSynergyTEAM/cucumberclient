import { Badge, Col, Input } from 'antd'
import styled, { css } from 'styled-components'

export const StyledChatList = styled(Col)`
  ${(props) => css`
    background-color: ${props.theme.palette.white.main};
    border-right: 1px solid ${props.theme.palette.grey[1]};
    height: 100%;
    overflow-y: auto;
  `}
`

export const StyledChatListTitle = styled.p`
  font-weight: bold;

  ${(props) => css`
    color: ${props.theme.palette.grey[5]};
    font-size: ${props.theme.fontSizes.sm};
    padding: ${props.theme.paddings.xl} ${props.theme.paddings.xl}
      ${props.theme.paddings.xs} ${props.theme.paddings.xl};
  `}
`

export const StyledChatListSearchWrapper = styled.div`
  padding: ${({ theme }) => `${theme.paddings.sm} ${theme.paddings.lg}`};
`

export const StyledChatListSearch = styled(Input)`
  ${(props) => css`
    /* border-radius: ${props.theme.fontSizes.xl}; */
    padding: ${props.theme.paddings.sm} ${props.theme.paddings.xl};
  `}
`

export const StyledListItemWrapper = styled.div`
  background: transparent;

  & .ant-list-item-meta-title {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    ${(props) => css`
      background-color: ${props.theme.palette.blue[0]};
    `}
  }
`

export const StyledItemTitle = styled.div`
  font-weight: bold;
`

export const StyledBadge = styled(Badge)`
  margin-left: ${({ theme }) => theme.margins.sm};
  position: relative;
  top: -1px;

  & p {
    position: relative;
    top: 1px;
  }
`
