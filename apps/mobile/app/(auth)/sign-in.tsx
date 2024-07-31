import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter, Link } from 'expo-router'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H2, LoadingOverlay, Paragraph, SubmitButton, Text, Theme, YStack, isWeb } from 'ui'
import { z } from 'zod'

import { SocialLogin } from '@/components/SocialLogin'

const SignInSchema = z.object({
  email: formFields.text.email().describe('Email // Enter your email'),
  password: formFields.text.min(6).describe('Password // Enter your password'),
})

export default function SignInScreen() {
  const router = useRouter()
  useRedirectAfterSignIn()
  // const { isLoadingSession } = useUser()

  const form = useForm<z.infer<typeof SignInSchema>>()

  async function signInWithEmail({ email, password }: z.infer<typeof SignInSchema>) {
    // const { error } = await auth.signInWithPassword({
    //   email,
    //   password,
    // })

    //   if (error) {
    //     const errorMessage = error?.message.toLowerCase()
    //     if (errorMessage.includes('email')) {
    //       form.setError('email', { type: 'custom', message: errorMessage })
    //     } else if (errorMessage.includes('password')) {
    //       form.setError('password', { type: 'custom', message: errorMessage })
    //     } else {
    //       form.setError('password', { type: 'custom', message: errorMessage })
    //     }
    //   } else {
    //     router.replace('/')
    //   }
    // }

    return (
      <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
        <Stack.Screen
          options={{
            title: 'Sign In',
          }}
        />
        <FormProvider {...form}>
          <SchemaForm
            form={form}
            schema={SignInSchema}
            defaultValues={{
              email: '',
              password: '',
            }}
            onSubmit={signInWithEmail}
            props={{
              password: {
                afterElement: <ForgotPasswordLink />,
                secureTextEntry: true,
              },
            }}
            renderAfter={({ submit }) => {
              return (
                <>
                  <Theme inverse>
                    <SubmitButton onPress={() => submit()} br="$10">
                      Sign In
                    </SubmitButton>
                  </Theme>
                  <SignUpLink />
                  {isWeb && <SocialLogin />}
                </>
              )
            }}
          >
            {(fields) => (
              <>
                <YStack gap="$3" mb="$4">
                  <H2 $sm={{ size: '$8' }}>Welcome Back</H2>
                  <Paragraph theme="alt1">Sign in to your account</Paragraph>
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
          {/* this is displayed when the session is being updated - usually when the user is redirected back from an auth provider */}
          {/* {isLoadingSession && <LoadingOverlay />} */}
        </FormProvider>
      </SafeAreaView>
    )
  }
}

const SignUpLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })
  return (
    <Link href={`/sign-up?${new URLSearchParams(email ? { email } : undefined).toString()}`}>
      <Paragraph ta="center" theme="alt1">
        Don&apos;t have an account? <Text textDecorationLine="underline">Sign up</Text>
      </Paragraph>
    </Link>
  )
}

const ForgotPasswordLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })

  return (
    <Link href={`/reset-password?${new URLSearchParams(email ? { email } : undefined)}`}>
      <Paragraph mt="$1" theme="alt2" textDecorationLine="underline">
        Forgot your password?
      </Paragraph>
    </Link>
  )
}

// we use this hook here because this is the page we redirect unauthenticated users to
// if they authenticate on this page, this will redirect them to the home page
function useRedirectAfterSignIn() {
  // const router = useRouter()
  // useEffect(() => {
  //   const signOutListener = auth.onAuthStateChange((event) => {
  //     if (event === 'SIGNED_IN') {
  //       router.replace('/')
  //     }
  //   })
  //   return () => {
  //     signOutListener.data.subscription.unsubscribe()
  //   }
  // }, [router])
}
