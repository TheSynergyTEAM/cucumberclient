import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  display: block;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  ${({ theme }) => css`
    padding: ${theme.paddings.xxl};
    background-color: ${theme.palette.white.main};
    margin: ${theme.palette.white.main};
  `}
`

export const StyledTitle = styled.h1`
  font-weight: bold;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    margin-bottom: ${theme.margins.lg};
  `}
`

export const StyledTitlePrimaryColor = styled.span`
  color: ${({ theme }) => theme.palette.green.main};
`

export const StyledDescription = styled.h5`
  color: ${({ theme }) => theme.palette.grey[5]};
`
