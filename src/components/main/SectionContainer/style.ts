import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  ${({ theme }) => css`
    margin: ${theme.margins.xl} 0;
    padding: ${theme.paddings.xxxl} ${theme.paddings.lg};
  `}
`

export const StyledBase = styled.div``

export const StyledBaseTitle = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.margins.xl};
    font-size: ${theme.fontSizes.xxl};
    font-weight: bold;
  `}
`
