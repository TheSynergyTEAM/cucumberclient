import styled from 'styled-components'
export const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 20px 3px rgba(233, 233, 233, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.green.main};
  font-size: ${({ theme }) => theme.fontSizes.logo};
  font-weight: 500;
  font-family: 'Recipekorea';
`

export const InputBox = styled.div`
  width: 25vw;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 5px;
  padding: ${({ theme }) => theme.paddings.base};
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    font-size: ${({ theme }) => theme.fontSizes.small};
    width: 80%;
    font-weight: 600;
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey.main};
    }
  }
  svg {
    color: ${({ theme }) => theme.colors.grey[1]};
  }
`

export const Menu = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.green[1]};
  font-weight: 600;
  li {
    list-style: none;
  }
`
