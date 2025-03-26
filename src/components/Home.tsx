import { useContext, useReducer, useState, useTransition } from "react"
import { Button } from "@mui/material"

import { UserContext } from "./UserFetcher"

const counterActions = {
  'INCREMENT': 'INCREMENT',
  'DECREMENT': 'DECREMENT',
  'RESET': 'RESET',
  'SET': 'SET',
}

export const Home = () => {
  const user = useContext(UserContext)
  const reducer = useCounterReducer(10)
  const {value, increment} = counterState(0)

  return <div>
    {user.username}

    <Button onClick={reducer.increment}>{reducer.value}</Button>
    <Button onClick={increment}>{value}</Button>
  </div>
}

const counterReducer = (state, { type, payload }) => {
  switch (type) {
  case counterActions.INCREMENT: return state + 1
  case 'DECREMENT': return state - 1
  case 'RESET': return 0
  case 'SET': return payload.value
  default: return state
  }
}

const useCounterReducer = (initialState) => {
  const [count, dispatch] = useReducer(counterReducer, initialState)

  return {
    value: count,
    increment: () => dispatch({ type: counterActions.INCREMENT }),
    decrement: () => dispatch({ type: counterActions.DECREMENT }),
    reset: () => dispatch({ type: counterActions.RESET }),
  }
}


const counterState = (init) => {
  const [state, setState] = useState(init)

  return {
    value: state,
    increment: () => setState(state + 1),
    decrement: () => setState(state - 1),
    reset: () => setState(state + 1),
  }
}

counterReducer(1432, { type: 'INCREMENT' })