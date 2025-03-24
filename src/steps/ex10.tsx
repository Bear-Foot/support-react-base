import styled from 'styled-components'
import { useState } from 'react'

import { loginRequest } from '../requests'

import { Field } from './Field'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const handleEmail = e => {
    setEmail(e.target.value)
    setError()
    setData()
  }
  const handlePassword = e => {
    setPassword(e.target.value)
    setError()
    setData()
  }

  const isDisabled = !email || !password

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result
    try {
      setIsLoading(true)
      result = await loginRequest({ email, password })
      
      setData(result)
    } catch (error) {
      setError(error)
      setPassword('')
    }
    setIsLoading(false)
  }

  return (
    <CenteringContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Field name="email" label="Email" value={email} onChange={handleEmail}/>
        <Field name="password" label="Mot de passe" type="password" value={password} onChange={handlePassword}/>
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
