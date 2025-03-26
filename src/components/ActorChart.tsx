import { useMemo, useState } from "react"

import { mockActors } from "../mocks/actors"
import { useInputState } from "../hooks/useInputValue"

export const ActorChart = () => {
  const [count, setCount] = useState(0)
  const [gender, setGender] = useInputState(mockActors[0].gender)

  const genderOptions = useMemo(() => {
    const genderOptionsSet = new Set()
    mockActors.forEach(a => { genderOptionsSet.add(a.gender)})
    
    return [...genderOptionsSet]
  }, [])

  const actorsWithCoef = useMemo(() => {
    console.log('actorsWithCoef computed')
    
    return mockActors.map(a => ({...a, coef: a.ip_address
      .split('.')
      .reduce((prev, current) => prev * +current, 1),
    }))
  }, [])
  
  
  const filteredActors = useMemo(() => {
    console.log('filteredActors computed')

    return actorsWithCoef.filter(a => a.gender === gender)
  }, [gender, actorsWithCoef])

  return <div>
    <select value={gender} onChange={setGender}>
      {genderOptions.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    <div>
      {filteredActors.length} acteurs correspondent
    </div>
    <button onClick={() => setCount(count + 1)}>{count}</button>
    <div>
      {filteredActors.map(a => <div key={a.id}>{a.coef}</div>)}
    </div>
  </div>
}