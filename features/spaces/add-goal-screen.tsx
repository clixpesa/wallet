import { View, Theme, SizableText } from 'tamagui'

import { z } from 'zod'

import { SubmitButton, FormWrapper } from 'components'
import { SchemaForm, formFields } from 'utils/SchemaForm'

const SpaceSchema = z.object({
  space: formFields.text.min(1).max(30),
})

export default function AddGoalScreen() {
  const handleSubmit = () => {
    console.log('Hello')
  }

  return (
    <FormWrapper>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={SpaceSchema}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
              Create my space
            </SubmitButton>
          </Theme>
        )}
      >
        {(fields) => <>{Object.values(fields)}</>}
      </SchemaForm>
    </FormWrapper>
  )
}
