import { SafeAreaView } from 'react-native-safe-area-context'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { useToastController } from '@tamagui/toast'
import { Stack, useRouter } from 'expo-router'
import { Theme } from 'tamagui'
import { z } from 'zod'

import { SubmitButton } from 'components'

const ChangePasswordSchema = z
  .object({
    password: formFields.text.min(6).describe('New Password // Enter your new password'),
    passwordConfirm: formFields.text
      .min(6)
      .describe('Confirm Password // Repeat your password'),
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

export default function ChangePasswordScreen() {
  const toast = useToastController()
  const router = useRouter()

  const handleChangePassword = async ({
    password,
  }: z.infer<typeof ChangePasswordSchema>) => {
    // const { error } = await auth.updateUser({ password })
    // if (error) {
    //   toast.show(error.message)
    // } else {
    //   toast.show('Successfully updated!')
    //   router.back()
    // }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Change Password',
        }}
      />
      <SchemaForm
        onSubmit={handleChangePassword}
        schema={ChangePasswordSchema}
        defaultValues={{
          password: '',
          passwordConfirm: '',
        }}
        props={{
          password: {
            secureTextEntry: true,
          },
          passwordConfirm: {
            secureTextEntry: true,
          },
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton rounded="$10" theme="teal" onPress={() => submit()}>
              Update Password
            </SubmitButton>
          </Theme>
        )}
      />
    </SafeAreaView>
  )
}
