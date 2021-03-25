import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey.main}`};
  background-color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.paddings.md};
  margin: ${({ theme }) => `${theme.margins.md} 0`};
`

export const ImgBox = styled.div`
  width: 25%;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
`
export const ArticleInfo = styled.div`
  width: 70%;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    margin: ${({ theme }) => `${theme.margins.xl} 0`};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
  }
`

export const SubInfo = styled.ul`
  width: 100%;
  margin: ${({ theme }) => `${theme.margins.sm} 0`};
  li {
    list-style: none;
    float: left;
    margin-right: ${({ theme }) => theme.margins.sm};
    span {
      font-size: ${({ theme }) => theme.fontSizes.sm};

      margin-right: ${({ theme }) => theme.margins.sm};
    }
  }
`
