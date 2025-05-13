import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'
import { SubmitButton } from 'components'
import { YStack } from 'tamagui'

import { z } from 'zod'

const AddMoneySchema = z.object({
  amount: formFields.number,
})

export const AddMoneyScreen = () => {
  const form = useForm<z.infer<typeof AddMoneySchema>>()

  const handleSubmit = async (data: z.infer<typeof AddMoneySchema>) => {
    console.log('handleSubmit', data)
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        schema={AddMoneySchema}
        props={{
          amount: {
            autoFocus: true,
          },
        }}
        onSubmit={handleSubmit}
        renderAfter={({ submit }) => (
          <SubmitButton rounded="$10" theme="teal" onPress={() => submit()} themeInverse>
            Add money
          </SubmitButton>
        )}
      >
        {(fields) => <YStack mt="30%">{Object.values(fields)}</YStack>}
      </SchemaForm>
    </FormProvider>
  )
}
