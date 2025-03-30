import { H1, Theme, YStack, Paragraph, View, Portal } from 'tamagui'
import { useToastController } from '@tamagui/toast'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { useRouter } from 'expo-router'
import { z } from 'zod'

import { SubmitButton, FormWrapper, FullscreenSpinner } from 'components'

import { useState } from 'react'

const SetPasswordSchema = z
  .object({
    password: formFields.text.min(6).describe('Create Passcode // Atleast 6 characters'),
    passwordConfirm: formFields.text
      .min(6)
      .describe('Confirm Passcode // Repeat your passcode'),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        path: ['passwordConfirm'],
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

export default function SetPasswordScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToastController()
  const router = useRouter()

  const handleChangePassword = async ({
    password,
  }: z.infer<typeof SetPasswordSchema>) => {
    toast.show('Successfully updated!')
    router.back()
  }

  return (
    <FormWrapper bg="$color2">
      <SchemaForm
        onSubmit={handleChangePassword}
        schema={SetPasswordSchema}
        defaultValues={{
          password: '',
          passwordConfirm: '',
        }}
        props={{
          password: {
            secureTextEntry: true,
            // size: '$5',
          },
          passwordConfirm: {
            secureTextEntry: true,
            // size: '$5',
          },
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
              Confirm
            </SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$2" mb="$2">
              <H1 size="$6" fontWeight="700">
                Set wallet passcode
              </H1>
              <Paragraph fontSize="$4" py="$1" color="$color10">
                Set a password to manage your wallet. Note that we don't store your
                password and can't restore it for you. If you forget your password you can
                set a new one by resetting your wallet and re-importing it. Learn More
              </Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </FormWrapper>
  )
}
