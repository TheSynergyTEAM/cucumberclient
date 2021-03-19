import styled from 'styled-components'
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined'
import UsergroupAddOutlined from '@ant-design/icons/UsergroupAddOutlined'

export const StyledStep = styled.div`
  margin: 2rem 0;
`

export const StyledStepItem = styled.div`
  display: inline-block;
  width: 50%;
  height: 150px;
  vertical-align: top;
  border: 1px solid ${({ theme }) => theme.palette.grey[1]};

  &.left,
  &.right {
    &-active {
      border: 1px solid ${({ theme }) => theme.palette.green.main};
      background-color: #f8fbf8;
    }
  }

  &.left {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &.right {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    &-active {
      border: 1px solid ${({ theme }) => theme.palette.green.main};
    }
  }

  & > .inner {
    padding: ${({ theme }) => theme.paddings.xl};

    & > .inner-icon-wrap {
      text-align: center;
    }

    & > .title,
    & > .description {
      text-align: center;
    }

    & > .title {
      margin: 1rem 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: bold;
    }

    & > .description {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.palette.grey[5]};
    }
  }
`

export const CheckIcon = styled(CheckCircleOutlined)`
  color: ${({ theme }) => theme.palette.grey.main};
  font-size: 2.5rem;

  &.left-active {
    transition: color 0.5s ease;
    color: ${({ theme }) => theme.palette.green.main};
  }
`

export const UserIcon = styled(UsergroupAddOutlined)`
  color: ${({ theme }) => theme.palette.grey.main};
  font-size: 2.5rem;

  &.right-active {
    transition: color 0.5s ease;
    color: ${({ theme }) => theme.palette.green.main};
  }
`
