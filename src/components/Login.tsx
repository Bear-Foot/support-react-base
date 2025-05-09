import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { loginRequest } from '../requests'
import { useInputState } from '../hooks/useInputValue'
import { myEmitter } from '../emitter'

import { CustomField } from './Field'

export const Login = () => {
  const [email, setEmail] = useInputState('qwe')
  const [password, setPassword, setPasswordValue] = useInputState('e')

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const navigate = useNavigate()

  const resetErrorAndData = () => {
    setError()
    setData()
  }

  useEffect(resetErrorAndData, [email, password])

  const isDisabled = !email || !password

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result
    try {
      setIsLoading(true)
      result = await loginRequest({ email, password })
      
      setData(result)
      navigate('/home')
      localStorage.setItem('token', result.token)
    } catch (error) {
      setError(error)
      // setPasswordValue('')
    }
    setIsLoading(false)
  }
  
  return (
    <CenteringContainer>
      <LoginForm onSubmit={handleSubmit}>
        <CustomField name="email" label="Email" value={email} onChange={setEmail}/>
        <CustomField name="password" label="Mot de passe"
          type="password" value={password} onChange={setPassword}
        />
        {error && <Error>{error.message}</Error>}
        <LoginButton
          disabled={isDisabled || isLoading ||  error}
          title={isDisabled ? 'Remplissez les champs' : ''}
        >
        Se connecter {isLoading && '...'}
        </LoginButton>
        {data && <div>Votre token est: {data.token}</div>}
      </LoginForm>
    </CenteringContainer>
  )
}

const Error = styled.div`
  color: red;
`

const CenteringContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const LoginButton = styled.button`
  background: #128;
  color: white;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:disabled {
    background: #888;
    cursor: default;
  }
`
