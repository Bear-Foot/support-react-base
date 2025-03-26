import { useCallback, useState } from "react"

export const useInputState = initialValue => {
  const [value, setValue] = useState(initialValue)
  
  const setter = useCallback(e => setValue(e.target.value), [])

  return [
    value,
    setter,
    setValue,
  ]
}
