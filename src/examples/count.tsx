import { useState } from 'react'

export const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  const increase = () => setCount(count + 1)

  return <button onClick={increase}>Cliqué {count} fois</button>
}