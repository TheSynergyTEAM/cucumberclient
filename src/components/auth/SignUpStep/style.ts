import styled, { css } from 'styled-components'
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined'
import UsergroupAddOutlined from '@ant-design/icons/UsergroupAddOutlined'

export const StyledStep = styled.div`
  margin: 2rem 0;
`

interface StyledStepItemProps {
  $active: boolean
  direction: 'left' | 'right'
}

export const StyledStepItem = styled.div<StyledStepItemProps>`
  display: inline-block;
  width: 50%;
  height: 150px;
  vertical-align: top;
  border: 1px solid ${({ theme }) => theme.palette.grey[1]};

  ${(props) =>
    props.$active &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.green.main};
      background-color: #f8fbf8;
    `}

  ${(props) =>
    props.direction === 'left'
      ? css`
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        `
      : css`
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        `}
`

export const StyledInner = styled.div`
  padding: ${({ theme }) => theme.paddings.xl};
`

export const StyledInnerIconWrap = styled.div`
  text-align: center;
`

export const StyledTitle = styled.div`
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: bold;
`

export const StyledDescription = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.grey[5]};
`

interface IconProps {
  $active: boolean
}

export const CheckIcon = styled(CheckCircleOutlined)<IconProps>`
  color: ${({ theme }) => theme.palette.grey.main};
  font-size: 2.5rem;

  ${(props) =>
    props.$active &&
    css`
      transition: color 0.5s ease;
      color: ${({ theme }) => theme.palette.green.main};
    `}
`

export const UserIcon = styled(UsergroupAddOutlined)<IconProps>`
  color: ${({ theme }) => theme.palette.grey.main};
  font-size: 2.5rem;

  ${(props) =>
    props.$active &&
    css`
      transition: color 0.5s ease;
      color: ${({ theme }) => theme.palette.green.main};
    `}
`
