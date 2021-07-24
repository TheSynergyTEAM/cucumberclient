import styled, { css } from 'styled-components'
import { Space } from 'antd'

export const StyledSpace = styled(Space)`
  border-radius: 8px;
  background-color: white;
  margin-bottom: ${({ theme }) => theme.margins.xxl};
  overflow: hidden;
  box-shadow: 1px 1px 10px 3px #bdbdbd40;
`

export const Bottom = styled.div`
  margin: ${({ theme }) => theme.margins.lg} 0;
  padding: 0 ${({ theme }) => theme.paddings.md};
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: ${({ theme }) => theme.margins.sm} 0;
  font-weight: 500;
`

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: ${({ theme }) => theme.margins.sm} 0;
  font-weight: 500;
`

export const Tags = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: ${theme.paddings.sm} 0;
    font-size: ${theme.fontSizes.xs};
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.margins.sm};
    margin-bottom: ${theme.margins.sm};
    background-color: ${theme.palette.green[1]};
    padding: ${theme.paddings.sm} ${theme.paddings.sm};
    color: white;
    font-size: 8px;
    border-radius: 5px;
  `}
`

export const SubInfo = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.palette.green[0]};
    padding-top: ${theme.paddings.sm};

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const IconBox = styled.div`
  width: 40px;
  display: flex;
  align-items: center;

  & > p {
    margin-left: 5px;
    color: ${({ theme }) => theme.palette.grey.main};
  }
`

interface StatusTagProps {
  status: '판매중' | '예약중' | '판매완료'
}

export const StatusTag = styled.div<StatusTagProps>`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 10px;
  p {
    color: white;
    font-size: 0.6rem;
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
