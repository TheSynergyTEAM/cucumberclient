import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: block;
  padding: ${({ theme }) => theme.paddings.xxl};
  background-color: ${({ theme }) => theme.palette.white.main};
  border-radius: 5px;
  margin: ${({ theme }) => theme.margins.xxxl} 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 3rem;
  text-align: center;
`
