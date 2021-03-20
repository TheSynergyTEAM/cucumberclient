import styled from 'styled-components'

import bp from 'styles/breakpoints'

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`

export const ModalContainer = styled.div`
  padding: 30px;
  background-color: white;
  margin: 70px auto;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
`

export const ModalNav = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.palette.green[6]};
  font-weight: 700;
  margin: ${({ theme }) => `${theme.margins.xl} 0`};
`

export const SubText = styled.p`
  width: 60%;
  line-height: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.palette.black.main};
  font-weight: 400;
  ${bp.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

export const DivideLine = styled.hr`
  width: 30%;
  height: 1px;
  border: none;
  margin: ${({ theme }) => `${theme.margins.xxxl} 0`};
  background-color: ${({ theme }) => theme.palette.grey[4]};
`

export const SignUpLink = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.palette.grey.main};
  margin-bottom: ${({ theme }) => theme.margins.xxxl};
`
