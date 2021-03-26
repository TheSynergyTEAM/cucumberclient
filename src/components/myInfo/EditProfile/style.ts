import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const styledBox = styled.div`
  width: 100%;
  border-radius: 5px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey.main}`};
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.md};
`

export const EditBox = styled(styledBox)`
  flex-direction: column;
`

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  margin: ${({ theme }) => `${theme.margins.xxl} 0`};
  left: 50%;
  margin-left: -40px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
  input {
    display: none;
  }
`

export const SelectFile = styled.label`
  position: absolute;
  right: -10px;
  bottom: -8px;
  display: block;
  background-color: ${({ theme }) => theme.palette.green[2]};
  opacity: 0.9;
  padding: ${({ theme }) => theme.paddings.sm};
  border-radius: 30px;
  cursor: pointer;
`
export const EditDetail = styled.div`
  margin: ${({ theme }) => `${theme.margins.md} 0`};
  display: flex;
  justify-content: space-between;
  h6 {
    margin: ${({ theme }) => `${theme.margins.md} 0`};
    width: 20%;
  }
  div {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      width: 70%;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      width: 70%;
    }
  }
`

export const SecessionBox = styled(styledBox)`
  margin-top: ${({ theme }) => theme.margins.xxl};
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
  }
  p {
    font-size: 0.3rem;
    margin-left: ${({ theme }) => theme.margins.lg};
  }
`
