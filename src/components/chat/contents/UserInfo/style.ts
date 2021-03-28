import { Col } from 'antd'
import styled, { css } from 'styled-components'

export const StyledWrapper = styled(Col)`
  position: relative;
  height: 100%;

  ${(props) => css`
    background-color: ${props.theme.palette.white.main};
    padding: ${props.theme.paddings.lg};
  `}
`

interface FlexAlign {
  $center?: boolean
}

export const StyledFlex = styled.div<FlexAlign>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${(props) => css`
    align-items: ${props.$center ? 'center' : 'flex-start'};
  `}
`

export const StyledUserName = styled.div`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.xl};
    font-weight: bold;
    color: ${props.theme.palette.black.main};
    margin: ${props.theme.margins.lg} 0;
  `}
`

export const StyledUserDealInfo = styled.div`
  ${(props) => css`
    display: flex;
    font-size: ${props.theme.fontSizes.xs};
    color: ${props.theme.palette.grey[5]};
    margin-bottom: ${props.theme.margins.md};
  `}
`
