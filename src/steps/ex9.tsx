import styled from 'styled-components'
import { useState } from 'react'

import { Field } from './Field'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const isDisabled = !email || !password

  return (
    <CenteringContainer>
      <LoginForm>
        <Field name="email" label="Email" value={email} onChange={handleEmail}/>
        <Field name="password" label="Mot de passe" type="password" value={password} onChange={handlePassword}/>
        <LoginButton disabled={isDisabled} title={isDisabled ? 'Remplissez les champs' : ''}>
        Se connecter
        </LoginButton>
      </LoginForm>
    </CenteringContainer>
  )
}

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
