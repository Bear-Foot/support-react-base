import { createRoot } from 'react-dom/client'
import styled from 'styled-components'


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
const CustomInput = ({ name, type = 'text' }) => <FieldInput placeholder='à remplir...' id={name} type={type} />

const Field = ({ name, label, type = 'text' }) => (
  <FieldWrapper>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <CustomInput name={name} type={type}/>
  </FieldWrapper>
)

createRoot(document.getElementById('root')!).render(
  <CenteringContainer>
    <LoginForm>
      <Field name="email" label="Email" />
      <Field name="password" label="Mot de passe" type="password"/>
      <LoginButton>
    Se connecter
      </LoginButton>
    </LoginForm>
  </CenteringContainer>,
)

