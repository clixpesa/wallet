import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'
import { openBrowserAsync } from 'expo-web-browser'
import { H1, Paragraph, View, Theme, YStack, SizableText, Separator, XStack } from 'tamagui'
import { SubmitButton } from 'components'

import { GoogleSignIn } from 'features/auth/components/GoogleSignIn'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { z } from 'zod'
import { useAuth } from 'provider/auth'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number.optional(),
  email: formFields.text.email().optional(),
})

export default function SignUpScreen() {
  const auth = useAuth()
  const [useEmail, setUseEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState(false)

  const form = useForm<z.infer<typeof SignUpSchema>>()

  const handleSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    if (useEmail) {
      // Handle email submission
      console.log('Sending Email OTP')
      console.log('data', data)
      router.push('/verify-code')
    } else {
      // Handle phone submission
      console.log('data', data)
      console.log('Sending Phone OTP')
      //await auth.sendPhoneOtp(phoneNumber.phone_number)
      router.push('/verify-code')
    }
  }

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    router.push('/verify-code')
  }

  const activeFieldValue = form.watch(useEmail ? 'email' : 'phoneNumber')

  const isDisabled = useEmail
    ? !activeFieldValue?.toString()
    : !activeFieldValue?.toString() || !isPhoneValid

  const handlePhoneValidityChange = (valid: boolean) => {
    setIsPhoneValid(valid)
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
              onValidChange: handlePhoneValidityChange,
            },
          }}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton
                  onPress={() => submit()}
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
                  onPress={() => openBrowserAsync('https://clixpesa.com/terms-conditions/')}
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
                <H1 size="$2">Let's get started</H1>
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
      <SocialSignInSection />
    </YStack>
  )
}

const SocialSignInSection = React.memo(() => (
  <YStack mb="$4" mx="$4">
    <Theme name="teal">
      <View flexDirection="column" gap="$4" width="100%" self="center">
        <View flexDirection="row" width="100%" items="center" gap="$4">
          <Separator />
          <Paragraph>OR</Paragraph>
          <Separator />
        </View>
        <GoogleSignIn />
      </View>
    </Theme>
  </YStack>
))
