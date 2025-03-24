import styled from "styled-components"
import { createRoot } from 'react-dom/client'

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
const FieldWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`

const FieldLabel = styled.label`
  margin-bottom: 5px;
  color: #128;
`
const FieldInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 5px 0;
  outline: none;

  &:focus{
    border-bottom: 1px solid #128;
  }
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
`

createRoot(document.getElementById('root')!).render(
  <CenteringContainer>
    <LoginForm>
      <FieldWrapper>
        <FieldLabel htmlFor="username">Email</FieldLabel>
        <FieldInput name="username" />
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
        <FieldInput name="password" type="password"/>
      </FieldWrapper>
      <LoginButton>
      Se connecter
      </LoginButton>
    </LoginForm>
  </CenteringContainer>,
)

