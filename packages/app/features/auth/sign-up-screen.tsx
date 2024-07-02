import {
  Button,
  FormWrapper,
  H2,
  Paragraph,
  SubmitButton,
  Text,
  Theme,
  YStack,
  isWeb,
} from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { Link } from 'solito/link'
import { z } from 'zod'

import { SocialLogin } from './components/SocialLogin'

const SignUpSchema = z.object({
  phone_number: formFields.phone_number,
})

export const SignUpScreen = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithPhoneNumber({ phone_number }: z.infer<typeof SignUpSchema>) {
    // const { error } = await supabase.auth.signUp({
    //   email,
    //   password,
    //   options: {
    //     // To take user's name other info
    //     data: {
    //       // first_name: firstName, // coming from state
    //       // last_name: lastName,
    //     },
    //   },
    // })
    // if (error) {
    //   const errorMessage = error?.message.toLowerCase()
    //   if (errorMessage.includes('email')) {
    //     form.setError('email', { type: 'custom', message: errorMessage })
    //   } else if (errorMessage.includes('password')) {
    //     form.setError('password', { type: 'custom', message: errorMessage })
    //   } else {
    //     form.setError('password', { type: 'custom', message: errorMessage })
    //   }
    // }
  }

  return (
    <SchemaForm
      form={form}
      schema={SignUpSchema}
      onSubmit={signUpWithPhoneNumber}
      renderAfter={({ submit }) => (
        <>
          <Button br="$10" bordered theme="green">
            I already have an account
          </Button>
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
  // const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H2>Check Your Email</H2>
          <Paragraph theme="alt1">
            {/* We&apos;ve sent you a confirmation link. Please check your email ({email}) and confirm
            it. */}
          </Paragraph>
        </YStack>
      </FormWrapper.Body>
      <FormWrapper.Footer>
        <Button themeInverse icon={ChevronLeft} br="$10" onPress={() => reset()}>
          Back
        </Button>
      </FormWrapper.Footer>
    </FormWrapper>
  )
}
