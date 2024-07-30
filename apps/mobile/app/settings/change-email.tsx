import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fieldset, Input, Label, SubmitButton, Theme, useToastController } from 'ui'
import { z } from 'zod'

const ChangeEmailSchema = z.object({
  email: formFields.text.email().describe('New Email // email@address.com'),
})

export default function ChangeEmailScreen() {
  const toast = useToastController()
  const router = useRouter()

  const handleChangeEmail = async ({ email }: z.infer<typeof ChangeEmailSchema>) => {
    console.log('change email', email)
    // const { data, error } = await auth.updateUser({ email })
    // if (error) {
    //   toast.show(error.message)
    // } else {
    //   toast.show('Check your inbox', {
    //     message: `We sent you a confirmation email to ${data.user.new_email}.`,
    //   })
    //   router.back()
    //   if (!isWeb) {
    //     await auth.refreshSession()
    //   }
    // }
  }
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Change Email',
        }}
      />
      <SchemaForm
        onSubmit={handleChangeEmail}
        schema={ChangeEmailSchema}
        defaultValues={{
          email: '',
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()}>Update Email</SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <>
            <Fieldset>
              <Label theme="alt1" size="$3" htmlFor="current-email">
                Current Email
              </Label>
              <Input
                disabled
                o={0.8}
                cur="not-allowed"
                id="current-email"
                autoComplete="email"
                // value={user?.email}
                inputMode="email"
                autoCapitalize="none"
              />
            </Fieldset>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
