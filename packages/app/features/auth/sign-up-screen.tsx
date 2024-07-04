import {
  FormWrapper,
  H2,
  H3,
  OneTimeCodeInput,
  Paragraph,
  SubmitButton,
  Text,
  Theme,
  YStack,
  isWeb,
} from '@my/ui'
import { signInWithPhoneNumber } from 'app/provider/auth/firebase/init.native'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { Link } from 'solito/link'
import { z } from 'zod'

import { SocialLogin } from './components/SocialLogin'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
})

export const SignUpScreen = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    try {
      const result = await signInWithPhoneNumber(phoneNumber.phone_number)
      console.log('res', result.confirm)
      console.log('hey')
    } catch (error) {
      const errorMessage = error?.message.toLowerCase()
      form.setError('phoneNumber', { type: 'custom', message: errorMessage })
    }
  }

  return (
    <FormProvider {...form}>
      {form.formState.isSubmitSuccessful ? (
        <CheckYourEmail />
      ) : (
        <SchemaForm
          form={form}
          schema={SignUpSchema}
          onSubmit={signUpWithPhoneNumber}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton onPress={() => submit()} br="$10">
                  Continue
                </SubmitButton>
              </Theme>
              <SignInLink />
              {isWeb && <SocialLogin />}
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack gap="$3" mb="$4">
                <H2 $sm={{ size: '$8' }}>Let&apos;s get started</H2>
                <Paragraph theme="alt2">Enter your phone number to get started</Paragraph>
              </YStack>
              {Object.values(fields)}
              {!isWeb && (
                <YStack mt="$4">
                  <SocialLogin />
                </YStack>
              )}
            </>
          )}
        </SchemaForm>
      )}
    </FormProvider>
  )
}

const SignInLink = () => {
  return (
    <Link href="/sign-in">
      <Paragraph ta="center" theme="alt1" mt="$2">
        Already signed up? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}

const CheckYourEmail = () => {
  const phoneNumber = useWatch<z.infer<typeof SignUpSchema>>({
    name: 'phoneNumber.phone_number',
  })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H3>Verify Phone Number</H3>
          {/* <Paragraph theme="alt1">
            We&apos;ve sent you a confirmation code to ({phoneNumber}).
          </Paragraph> */}
          <OneTimeCodeInput />
        </YStack>
      </FormWrapper.Body>
    </FormWrapper>
  )
}
