import styled from 'styled-components'
export const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 20px 3px rgba(233, 233, 233, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.palette.green.main};
  font-size: ${({ theme }) => theme.fontSizes.logo};
  font-weight: 500;
  font-family: 'Recipekorea';
  display: inline-block;
`

export const InputBox = styled.div`
  width: 50%;
  margin: 0 1rem;
  border: 1px solid ${({ theme }) => theme.palette.grey.main};
  border-radius: 5px;
  padding: ${({ theme }) => theme.paddings.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    width: 80%;
    font-weight: 600;
    &::placeholder {
      color: ${({ theme }) => theme.palette.grey.main};
    }
  }
  svg {
    color: ${({ theme }) => theme.palette.grey[1]};
  }
`

export const Menu = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.palette.green[1]};
  font-weight: 600;
  li {
    list-style: none;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
