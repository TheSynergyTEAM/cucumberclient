import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { useEffect, useState } from 'react'

type Columns = {
  left: number
  center: number
  right: number
}

export const useColumnSize = (): Columns => {
  const [columns, setColumns] = useState<Columns>({
    left: 0,
    center: 24,
    right: 0
  })
  const { lg } = useBreakpoint()

  useEffect(() => {
    if (lg) {
      setColumns({ left: 5, center: 15, right: 4 })
    } else {
      setColumns({ left: 0, center: 24, right: 0 })
    }
  }, [lg])

  return columns
}
