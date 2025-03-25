import { useNavigate } from "react-router"

export const Home = () => {
  const navigate = useNavigate()

  const disconnect = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return <div>
    {/* {isLoading ? 'Chargement...': user?.username} */}
    <button onClick={disconnect}>Se déconnecter</button>
  </div>
}
