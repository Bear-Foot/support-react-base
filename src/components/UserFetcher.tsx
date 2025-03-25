import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import { meRequest } from "../requests"

export const UserFetcher = ({ children }) => {
  const [user, setUser] = useState()
  const [s, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const disconnect = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    const getMe = async () => {
      console.log('qwe')
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
  }, [])
  if (!user) {
    return 'Chargement...'
  }
  
  return children
}