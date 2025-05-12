import { YStack } from 'tamagui'
import { z } from 'zod'

import { SubmitButton } from 'components'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'

const SpaceSchema = z.object({
  name: formFields.text.describe('Name // Vacation'),
})

export const EditSpaceScreen = () => {
  const form = useForm<z.infer<typeof SpaceSchema>>()

  const handleSubmit = async (data: z.infer<typeof SpaceSchema>) => {
    console.log('data', data)
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        schema={SpaceSchema}
        onSubmit={handleSubmit}
        renderAfter={({ submit }) => (
          <SubmitButton rounded="$10" theme="teal" onPress={() => submit()} themeInverse>
            Save
          </SubmitButton>
        )}
      >
        {(fields) => (
          <>
            <YStack mb="$4" items="center"></YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </FormProvider>
  )
}
