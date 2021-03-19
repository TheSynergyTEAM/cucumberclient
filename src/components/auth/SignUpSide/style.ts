import bp from 'styles/breakpoints'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  ${bp.mobileL} {
    padding-top: 1rem;
  }
`

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margins.md};
`

export const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.palette.grey[5]};
`

export const StyledList = styled.ul`
  margin: ${({ theme }) => theme.margins.xl} 0;
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  list-style: initial;
`

export const StyledListItem = styled.li`
  line-height: ${({ theme }) => theme.margins.xxxl};
`
