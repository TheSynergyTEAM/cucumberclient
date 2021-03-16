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
}

export interface Units {
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  logo?: string
}

const fontSizes: Units = {
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  logo: calcRem(21)
}

const paddings: Units = {
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
  // green: {
  //   main: '#5cc76e',
  //   0: '#e9f2ea',
  //   1: '#addbb5',
  //   2: '#8dd899',
  //   3: '#69db7c',
  //   4: '#5cc76e',
  //   5: '#53b463',
  //   6: '#519b5d',
  //   7: '#508558',
  //   8: '#4c7353',
  //   9: '#48644d'
  // },
  // white: {
  //   main: '#ffffff'
  // },
  // grey: {
  //   main: '#ced4da',
  //   0: '#ced4da',
  //   1: '#bcc0c4'
  // }
}

const theme: DefaultTheme = {
  palette,
  fontSizes,
  paddings,
  margins
}

export default theme
