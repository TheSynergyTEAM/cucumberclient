import bp from 'styles/breakpoints'
import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  ${bp.mobileL} {
    padding-top: 1rem;
  }
`

export const StyledTitle = styled.div`
  font-weight: bold;

  ${({ theme }) => css`
    margin-bottom: ${theme.margins.md};
    font-size: ${theme.fontSizes.md};
  `}
`

export const StyledDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.palette.grey[5]};
  `}
`

export const StyledList = styled.ul`
  padding: 0 1rem;
  list-style: initial;

  ${({ theme }) => css`
    margin: ${theme.margins.xl} 0;
    font-size: ${theme.fontSizes.sm};
  `}
`

export const StyledListItem = styled.li`
  line-height: ${({ theme }) => theme.margins.xxxl};
`
