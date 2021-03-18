import styled from 'styled-components'

export const StyledStep = styled.div`
  margin: 1rem 0;
`

export const StyledStepItem = styled.div`
  display: inline-block;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.palette.grey[1]};

  &.left {
    transition: all 1s ease;
    border-right: 1px solid #ccc;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    &-active {
      border: 1px solid ${({ theme }) => theme.palette.green.main};
    }
  }

  &.right {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    &-active {
      /* border: 1px solid blue; */
    }
  }

  & > .inner {
    padding: ${({ theme }) => theme.paddings.xl};
  }
`
