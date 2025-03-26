import styled from "styled-components"

const CustomInput = ({ type = 'text', ...rest }) => <FieldInput
  placeholder='à remplir...' type={type} {...rest}
/>

export const CustomField = ({ name, label, type = 'text', value, onChange, input, meta }) => {
  
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <CustomInput name={name} type={type} value={value} onChange={onChange} {...input} />
      {meta?.touched && <Error>{meta.error}</Error>}
    </FieldWrapper>
  )
}

const Error = styled.div`
  color: red;
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