import styled from "styled-components"

const CustomInput = ({ name, type = 'text', value, onChange }) => <FieldInput
  placeholder='à remplir...' id={name} type={type} value={value} onChange={onChange}
/>

export const Field = ({ name, label, type = 'text', value, onChange }) => (
  <FieldWrapper>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <CustomInput name={name} type={type} value={value} onChange={onChange} />
  </FieldWrapper>
)

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