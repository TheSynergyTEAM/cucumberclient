import styled, { css } from 'styled-components'
import { Form } from 'antd'
import bp from 'styles/breakpoints'

export const StyledForm = styled(Form)`
  ${bp.mobile} {
    border-bottom: 1px solid #ddd;
    border-right: none;
    padding-bottom: ${({ theme }) => theme.paddings.xl};
  }

  ${bp.laptop} {
    border-right: 1px solid #ddd;
    border-bottom: none;
    padding-right: ${({ theme }) => theme.paddings.xl};
  }

  & .ant-form-item {
    margin-bottom: 12px;
    &-explain {
      ${(props) => css`
        font-size: ${props.theme.fontSizes.xs};
        padding: ${props.theme.paddings.xs};
      `}
    }
  }
`
