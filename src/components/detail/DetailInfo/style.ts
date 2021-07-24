import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 500px;
`

export const UserInfo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  div {
    margin-left: ${({ theme }) => theme.margins.md};
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-weight: 500;
      line-height: 20px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: 300;
    }
  }
`
export const ArticleDesc = styled.div`
  min-height: 320px;
  border-top: ${({ theme }) => `1px solid ${theme.palette.grey[2]}`};
  padding: ${({ theme }) => `${theme.paddings.xl} ${theme.paddings.sm}`};
  box-sizing: border-box;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey[4]};
    line-height: 30px;
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 20px;
  }
  h6 {
    margin: ${({ theme }) => `${theme.margins.xxl} 0`};
    line-height: 20px;
  }
`
export const OtherInfo = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[2]}`};
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey[4]};
    line-height: 30px;
  }
`
export const ButtonBox = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.margins.xl};
`

interface StatusTagProps {
  status: '판매중' | '예약중' | '판매완료'
}

export const StatusTag = styled.div<StatusTagProps>`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 10px;
  p {
    color: white;
  }
  ${(props) => {
    if (props.status === '판매중') {
      return css`
         {
          background-color: ${({ theme }) => theme.palette.green[4]};
        }
      `
    }
    if (props.status === '예약중') {
      return css`
         {
          background-color: ${({ theme }) => theme.palette.blue[4]};
        }
      `
    }
    if (props.status === '판매완료') {
      return css`
         {
          background-color: ${({ theme }) => theme.palette.grey[4]};
        }
      `
    }
  }}
`
