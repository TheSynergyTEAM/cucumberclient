import styled from 'styled-components'

export const StyledContainer = styled.div``

export const Title = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.grey[5]};
  }
`

export const Articles = styled.div``
