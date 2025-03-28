import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'
import { openBrowserAsync } from 'expo-web-browser'
import {
  H1,
  Paragraph,
  View,
  Theme,
  YStack,
  Button,
  SizableText,
  Separator,
  XStack,
} from 'tamagui'

import { SubmitButton, IconGoogle } from 'components'
import { z } from 'zod'
import { router } from 'expo-router'
import { useState } from 'react'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
  email: formFields.text.email(),
})

export default function SignUpScreen() {
  const [useEmail, setUseEmail] = useState(false)
  const form = useForm<z.infer<typeof SignUpSchema>>()

  const activeFieldValue = form.watch(useEmail ? 'email' : 'phoneNumber')
  const isDisabled = !activeFieldValue?.toString()

  const handleSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    if (useEmail) {
      if (!data.email) {
        form.setError('email', { message: 'Email is required' })
        return
      }
      // Handle email submission
      router.push('/verify-code')
    } else {
      if (!data.phoneNumber) {
        form.setError('phoneNumber', { message: 'Phone number is required' })
        return
      }
      // Handle phone submission
      router.push('/verify-code')
    }
    router.push('/verify-code')
  }

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
        // console.log('token', token)
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
          onSubmit={handleSubmit}
          props={{
            phoneNumber: {
              size: '$5',
            },
            email: {
              size: '$5',
            },
          }}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton
                  onPress={submit}
                  rounded="$10"
                  theme="teal"
                  disabled={isDisabled}
                >
                  Continue
                </SubmitButton>
              </Theme>
              <SizableText size="$1" color="$color10">
                By signing up, I accept Clixpesa's{' '}
                <SizableText
                  size="$1"
                  color="$teal11"
                  textDecorationLine="underline"
                  onPress={() =>
                    openBrowserAsync('https://clixpesa.com/terms-conditions/')
                  }
                >
                  Terms
                </SizableText>{' '}
                &{' '}
                <SizableText
                  size="$1"
                  color="$teal11"
                  textDecorationLine="underline"
                  onPress={() => openBrowserAsync('https://clixpesa.com/privacy-policy/')}
                >
                  Privacy Policy
                </SizableText>
                .
              </SizableText>
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack gap="$2" mb="$4">
                <H1 size="$5" fontWeight="700">
                  Let's get started
                </H1>
              </YStack>

              {useEmail ? fields.email : fields.phoneNumber}

              <XStack justify="space-between" mt="$2">
                <Paragraph color="$color10" text="right">
                  {useEmail ? 'Prefer phone number sign up?' : 'Prefer email sign up?'}
                </Paragraph>
                <SizableText
                  onPress={() => setUseEmail(!useEmail)}
                  color="$teal10"
                  textDecorationLine="underline"
                >
                  {useEmail ? 'Use phone' : 'Use email'}
                </SizableText>
              </XStack>
            </>
          )}
        </SchemaForm>
      </FormProvider>

      <YStack mb="$4" mx="$4">
        <Theme name="teal">
          <View flexDirection="column" gap="$4" width="100%" self="center">
            <View flexDirection="row" width="100%" items="center" gap="$4">
              <Separator />
              <Paragraph>OR</Paragraph>
              <Separator />
            </View>
            <Button
              onPress={() => signInWithGoogle()}
              icon={IconGoogle}
              scaleIcon={1.2}
              gap="$1.5"
              rounded="$10"
              bg="$color1"
              pressStyle={{ bg: '$teal1', opacity: 0.6 }}
              animation="200ms"
              size="$5"
            >
              Sign in with Google
            </Button>
          </View>
        </Theme>
      </YStack>
    </YStack>
  )
}
