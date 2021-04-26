import React from 'react'

type SliderContextType = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValue: SliderContextType = {
  isVisible: false,
  setIsVisible: (_t) => {}
}

const SliderContext = React.createContext<SliderContextType>(initialValue)

export default SliderContext
