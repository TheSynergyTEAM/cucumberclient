const calcRem = (size: number): string => `${size / 16}rem`

export type Color = {
  main: string
  [key: number]: string
}
export interface Colors {
  [key: string]: Color
}

export interface Units {
  [key: string]: string
}

const fontSizes: Units = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  logo: calcRem(21)
}

const paddings: Units = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
}

const margins: Units = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
}

const colors: Colors = {
  green: {
    main: '#5cc76e',
    0: '#e9f2ea',
    1: '#addbb5',
    2: '#8dd899',
    3: '#69db7c',
    4: '#5cc76e',
    5: '#53b463',
    6: '#519b5d',
    7: '#508558',
    8: '#4c7353',
    9: '#48644d'
  },
  white: {
    main: '#ffffff'
  },
  grey: {
    main: '#ced4da',
    0: '#ced4da',
    1: '#bcc0c4'
  }
}

const theme = {
  colors,
  fontSizes,
  paddings,
  margins
}

export default theme
