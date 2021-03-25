import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
`

export const Title = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.grey[6]};
  }
`

export const EmptyBox = styled.div`
  margin: ${({ theme }) => theme.margins.xl};
`
