import styled, { css } from 'styled-components'
import bp from 'styles/breakpoints'

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.35);
  transition: 0.3s;
  ${bp.onlyMobile} {
    background-color: white;
  }
`

interface DrawerBoxProps {
  isVisible: boolean
}

export const DrawerWrapper = styled.div<DrawerBoxProps>`
  ${bp.onlyMobile} {
    width: 100%;
  }
  width: 450px;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.5s;
  height: 100%;
  background-color: white;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => `40px ${theme.paddings.xxl}`};
  display: flex;
  justify-content: center;
  ${(props) =>
    props.isVisible
      ? css`
          right: 0;
        `
      : css`
          right: -500px;
        `};
`

export const DrawerBox = styled.div`
  width: 80%;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: fit-content;
  & > p:first-child {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.palette.green[8]};
    margin-bottom: ${({ theme }) => theme.margins.xl};
  }
  & > p:last-child {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.palette.grey[3]};
    margin-bottom: 50px;
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 2vh;
  display: flex;
  justify-content: space-around;
  button {
    width: 35%;
  }
`
