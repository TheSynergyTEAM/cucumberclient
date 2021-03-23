import styled, { css } from 'styled-components'

export const StyledContatainer = styled.div`
  background-color: ${({ theme }) => theme.palette.white.main};
  border: ${({ theme }) => `1px solid ${theme.palette.grey.main}`};
  margin: ${({ theme }) => `${theme.margins.md} 0`};
  border-radius: 5px;
`

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

interface IconProps {
  isSelected: boolean
}

export const SelectList = styled.li<IconProps>`
  display: flex;
  width: 50%;
  margin: ${({ theme }) => `${theme.margins.xl} 0`};
  list-style: none;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 12px;
    margin-left: ${({ theme }) => theme.margins.xl}};
  }

  ${(props) =>
    props.isSelected &&
    css`
      color: ${props.theme.palette.green.main};
    `}
`
