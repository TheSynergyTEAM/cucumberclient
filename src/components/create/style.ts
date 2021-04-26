import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.35);
  transition: 0.3s;
`

interface SliderBoxProps {
  isVisible: boolean
}

export const SlideWrapper = styled.div<SliderBoxProps>`
  width: 450px;
  position: absolute;
  top: 0;
  transition: 0.5s;
  height: 100%;
  background-color: white;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => `40px ${theme.paddings.xxl}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.isVisible
      ? css`
          right: 0;
        `
      : css`
          transform: translateX(-500px);
        `};
`

export const SliderBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
