import styled, { css } from 'styled-components'

export const StyledChatHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;

  ${(props) => css`
    padding: ${props.theme.paddings.md};
    background-color: ${props.theme.palette.white.main};
  `}
`
