import { DefaultTheme } from 'styled-components'
import colors from './colors.json'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Colors
    fontSizes: Units
    paddings: Units
    margins: Units
  }
}

const calcRem = (size: number): string => `${size / 16}rem`

export type Color = {
  main: string
  [key: number]: string
}
export interface Colors {
  green: Color
  grey: Color
  white: Color
  black: Color
  blue: Color
}

export interface Units {
  xs?: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  logo?: string
}

const fontSizes: Units = {
  xs: calcRem(12),
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  logo: calcRem(21)
}

const paddings: Units = {
  xs: calcRem(2),
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
}

const margins: Units = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
}

const palette: Colors = {
  ...colors
}

const theme: DefaultTheme = {
  palette,
  fontSizes,
  paddings,
  margins
}

export default theme
