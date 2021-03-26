import styled from 'styled-components'

export const StyledContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.palette.grey.main}`};
  background-color: ${({ theme }) => theme.palette.white.main};
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.grey.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.paddings.xxl} 0`};
`

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  margin: ${({ theme }) => `${theme.margins.xxl} 0`};
  img {
    width: 100%;
    height: 100%;
  }
`

export const Nickname = styled.p`
  font-size: 0.6rem;
  margin: ${({ theme }) => `${theme.margins.xxl} 0`};
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.grey[4]};
  }
`

export const Score = styled.div`
  width: 90%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 50px;
    p:last-child {
      color: ${({ theme }) => theme.palette.grey[4]};
    }
  }
`
