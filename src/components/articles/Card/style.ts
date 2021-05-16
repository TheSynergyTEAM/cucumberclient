import styled, { css } from 'styled-components'

export const Bottom = styled.div`
  margin: ${({ theme }) => theme.margins.xxl} 0;
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
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
    background-color: ${theme.palette.green[6]};
    padding: ${theme.paddings.sm} ${theme.paddings.lg};
    color: white;
    border-radius: 5px;
  `}
`
