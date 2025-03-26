import { createContext, useEffect, useState } from "react"

import { meRequest } from "../requests"
import { useDisconnect } from "../hooks/disconnect"

export const UserContext = createContext(null)
let i = 0
export const UserFetcher = ({ children }) => {
  const [user, setUser] = useState()
  const [s, setIsLoading] = useState(false)
  const disconnect = useDisconnect()

  useEffect(() => {
    console.log('getMe', i ++)
    const getMe = async () => {
      let result
      setIsLoading(true)
      const token = localStorage.getItem('token')
      try {
        result = await meRequest({ token })
        setUser(result)
      } catch (e) {
        disconnect()
      }
      setIsLoading(false)
    }

    getMe()
  }, [disconnect])
  if (!user) {
    return 'Chargement...'
  }
  
  return <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>
}