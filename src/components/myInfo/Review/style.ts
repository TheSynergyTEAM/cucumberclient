import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
`

interface TitleProps {
  type: Nullable<'buy' | 'sell'>
}

export const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  p {
    text-align: center;
  }
  p:nth-child(2) {
    margin: ${({ theme }) => ` 0 ${theme.margins.xl}`};
    width: 5%;
  }

  p:not(:nth-child(2)) {
    cursor: pointer;
    font-weight: 600;
    width: 3.7rem;
  }

  ${(props) =>
    props.type === 'buy'
      ? css`
          p:nth-child(1) {
            font-size: ${({ theme }) => theme.fontSizes.md};
            color: ${({ theme }) => theme.palette.green.main};
          }
        `
      : css`
          p:nth-child(3) {
            font-size: ${({ theme }) => theme.fontSizes.md};
            color: ${({ theme }) => theme.palette.green.main};
          }
        `}
`

export const EmptyBox = styled.div`
  margin: ${({ theme }) => theme.margins.xl};
`
