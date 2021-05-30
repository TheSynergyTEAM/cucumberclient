import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ArticleContainer = styled.div`
  width: 70%;
`
export const Title = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.green[7]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: ${({ theme }) => theme.margins.md} 0;
`
export const Desc = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.green[6]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: ${({ theme }) => theme.margins.md} 0;
`
export const ReviewContainer = styled.div`
  width: 70%;
  p:nth-child(2) {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.margins.xl};
  }
`
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
