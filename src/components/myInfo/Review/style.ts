import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.grey[6]};
  line-height: 30px;
`

export const EmptyBox = styled.div`
  margin: ${({ theme }) => theme.margins.xl};
`
