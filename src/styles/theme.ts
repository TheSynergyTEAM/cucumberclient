export type Color = {
  main: string
  [key: number]: string
}

export interface Colors {
  [key: string]: Color
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
    main: '#ced4da'
  }
}

const theme = {
  colors
}

export default theme
