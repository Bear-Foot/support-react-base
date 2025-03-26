import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { CustomField } from "./Field"

test('Custom field', () => {
  const { getByPlaceholder } = render(<CustomField />)

  expect(getByPlaceholder('à remplir...')).toBeTruthy()
})

test('Doit afficher son label', () => {
  const { getByLabelText } = render(<CustomField label="Je suis Labelle"/>)

  expect(getByLabelText("Je suis Labelle")).toBeTruthy()
})