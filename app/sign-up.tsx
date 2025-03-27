import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { H1, Paragraph, View, Theme, YStack, Button, SizableText } from 'tamagui'
import { SubmitButton } from 'components'
import { z } from 'zod'
import { router } from 'expo-router'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
})

export default function SignUpScreen() {
  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    router.push('/verify-code')
  }

  async function signInWithGoogle() {
    try {
      GoogleSignin.configure({
        // Add clixpesa web client id
        iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
        webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
      })

      await GoogleSignin.hasPlayServices()

      const response = await GoogleSignin.signIn()
      const token = response?.data?.idToken

      if (token) {
        console.log('token', token)
        // if (error) {
        //   throw new Error('error', error)
        // }

        router.replace('/')
      } else {
        throw new Error('no ID token present!')
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <YStack flex={1} bg="$color2">
      <FormProvider {...form}>
        <SchemaForm
          form={form}
          schema={SignUpSchema}
          onSubmit={signUpWithPhoneNumber}
          props={{
            phoneNumber: {
              size: '$5',
            },
          }}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
                  Continue with phone
                </SubmitButton>
              </Theme>
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack gap="$2" mb="$2">
                <H1 size="$6" fontWeight="700">
                  Let's get you started
                </H1>
                <Paragraph fontSize="$4" py="$1" color="$color10">
                  Enter your phone number to get started, we may store and send a
                  verification code to this number
                </Paragraph>
              </YStack>
              {Object.values(fields)}
              <Button
                onPress={() => signInWithGoogle()}
                scaleIcon={1}
                borderWidth={1}
                borderColor="$color10"
                gap="$1.5"
                bg="transparent"
                pressStyle={{ bg: 'transparent', o: 0.6, bw: '$0' }}
                animation="200ms"
                size="$5"
              >
                Sign in with Google
              </Button>
            </>
          )}
        </SchemaForm>
      </FormProvider>

      {/* <YStack my="$8" mx="$4" gap="$4" justify="space-between">
        <SizableText size="$2" text="center">
          By signing up, you accept Clixpesa’s Terms & Conditions and Privacy Policy. Your
          data will be securely encrypted with TLS.🔒
        </SizableText>
        <View>
          <Button variant="outlined" rounded="$10" size="$5">
            I already have an account
          </Button>
        </View>
      </YStack> */}
    </YStack>
  )
}
