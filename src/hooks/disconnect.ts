import { useCallback } from "react"
import { useNavigate } from "react-router"

export const useDisconnect = () => {
  const navigate = useNavigate()
  
  const disconnect = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  return disconnect
}