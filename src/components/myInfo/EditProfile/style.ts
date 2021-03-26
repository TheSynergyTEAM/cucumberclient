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
export const NicknameBox = styled.div`
  margin: ${({ theme }) => `${theme.margins.md} 0`};
  p {
    margin: ${({ theme }) => `${theme.margins.md} 0`};
    font-size: ${({ theme }) => theme.fontSizes.xs};
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
