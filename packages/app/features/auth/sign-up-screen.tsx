import { signInWithPhoneNumber } from 'app/provider/auth/firebase/init.native'
import { Firebase } from 'app/provider/auth/firebase/types'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'solito/router'
import { FormWrapper, H2, H3, Paragraph, View, SubmitButton, Theme, YStack, isWeb } from 'ui'
import { CodeConfirmation } from 'ui/src/components/forms/inputs/OneTimeCodeInput'
// import { Link } from 'solito/link'
import { z } from 'zod'

import { SocialLogin } from './components/SocialLogin'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
})

export const SignUpScreen = () => {
  const [confirm, setConfirm] = useState<Firebase['ConfirmationResult'] | null>(null)

  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    try {
      const confirmation = await signInWithPhoneNumber(phoneNumber.phone_number)
      setConfirm(confirmation)
    } catch (error) {
      const errorMessage = error?.message.toLowerCase()
      form.setError('phoneNumber', { type: 'custom', message: errorMessage })
    }
  }

  return (
    <FormProvider {...form}>
      {form.formState.isSubmitSuccessful && confirm ? (
        <VerifyPhoneNumber confirm={confirm} />
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
              {/* <SignInLink /> */}
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

// const SignInLink = () => {
//   return (
//     <Link href="/sign-in">
//       <Paragraph ta="center" theme="alt1" mt="$2">
//         Already signed up? <Text textDecorationLine="underline">Sign in</Text>
//       </Paragraph>
//     </Link>
//   )
// }

const VerifyPhoneNumber = ({ confirm }: { confirm: Firebase['ConfirmationResult'] }) => {
  const router = useRouter()
  const phoneNumber = useWatch<z.infer<typeof SignUpSchema>>({
    name: 'phoneNumber.phone_number',
  })

  const [code, setCode] = useState<number>()
  const [codeEntered, setCodeEntered] = useState(false)
  const [verified, setVerified] = useState(false)
  const [verifying, setVerifying] = useState(false)

  console.log('code', code?.toString())

  const handleEnter = (code: number) => {
    setCode(code)
    confirmCode(code.toString())
  }

  async function confirmCode(code: string) {
    console.log('from component', code)
    setVerifying(true)
    try {
      await confirm.confirm(code)
      setCodeEntered(true)
      setVerified(true)
      router.push('/home')
    } catch (error) {
      console.log(error, 'Invalid code.')
      setCodeEntered(true)
      setVerified(false)
    } finally {
      setVerifying(false)
    }
  }
  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H3>Enter Code</H3>
          <Paragraph theme="alt1">A code has been sent to {phoneNumber}.</Paragraph>
          <View
            minWidth={300}
            $platform-native={{ minWidth: '100%' }}
            alignItems="center"
            justifyContent="center"
            width="auto"
            paddingHorizontal="$3"
            backgroundColor="$color3"
            borderRadius="$6"
            animation="200ms"
          >
            <View animation="200ms" enterStyle={{ opacity: 0, y: 10 }} paddingVertical="$4">
              <CodeConfirmation codeSize={6} onEnter={handleEnter} />
            </View>
          </View>
        </YStack>
      </FormWrapper.Body>
    </FormWrapper>

    // <View alignItems="center" justifyContent="center" gap="$4">
    //   <View
    //     minWidth={300}
    //     $platform-native={{ minWidth: '100%' }}
    //     height={codeEntered ? 175 : 240}
    //     alignItems="center"
    //     justifyContent="center"
    //     width="auto"
    //     paddingHorizontal="$3"
    //     backgroundColor="$color3"
    //     borderRadius="$6"
    //     animation="200ms"
    //   >
    //     <View position="absolute" t="$4" r="$4">
    //       {codeEntered ? (
    //         <View flexDirection="row" gap="$2">
    //           <AnimatePresence>
    //             {verified && (
    //               <Paragraph
    //                 key="success"
    //                 color="$green10"
    //                 enterStyle={{ opacity: 0, x: 15 }}
    //                 exitStyle={{ opacity: 0, x: 15 }}
    //               >
    //                 Success!
    //               </Paragraph>
    //             )}
    //           </AnimatePresence>
    //           <View enterStyle={{ opacity: 0.5, scale: 1.5 }} animation="bouncy">
    //             <CheckCircle2 color="$green10" />
    //           </View>
    //         </View>
    //       ) : code ? (
    //         <Spinner />
    //       ) : (
    //         <View enterStyle={{ opacity: 0.5, scale: 1.5 }} animation="100ms">
    //           <KeySquare size={16} opacity={0.25} />
    //         </View>
    //       )}
    //     </View>

    //     {code ? (
    //       <View
    //         key="code"
    //         gap="$3"
    //         alignItems="center"
    //         justifyContent="center"
    //         animation="200ms"
    //         enterStyle={{ opacity: 0, y: 10 }}
    //         minWidth="100%"
    //         height="100%"
    //       >
    //         {codeEntered ? (
    //           <View
    //             y={0}
    //             enterStyle={{ opacity: 0, y: 10 }}
    //             animation="200ms"
    //             height="100%"
    //             minWidth="100%"
    //             justifyContent="space-between"
    //             alignItems="center"
    //             paddingVertical="$3"
    //             paddingTop="$0"
    //           >
    //             <View flexGrow={1} justifyContent="center" alignItems="center" minWidth="100%">
    //               <Paragraph size="$4">Code verified</Paragraph>
    //             </View>
    //           </View>
    //         ) : (
    //           <Paragraph size="$4">Verifying</Paragraph>
    //         )}
    //       </View>
    //     ) : (
    //       <View
    //         key="codeEntered"
    //         animation="200ms"
    //         enterStyle={{ opacity: 0, y: 10 }}
    //         justifyContent="space-between"
    //         height="100%"
    //         paddingVertical="$4"
    //       >
    //         <View alignItems="center" gap="$1.5">
    //           <Paragraph size="$4">Enter the code sent to</Paragraph>
    //           <View
    //             flexDirection="row"
    //             alignItems="center"
    //             justifyContent="center"
    //             gap="$2"
    //             w="100%"
    //           >
    //             <Smartphone size="$1" />
    //             <Paragraph size="$4" fontWeight="bold">
    //               {phoneNumber}
    //             </Paragraph>
    //           </View>
    //         </View>

    //         <CodeConfirmation codeSize={6} onEnter={confirmCode} />

    //         <Button
    //           icon={MessageSquareCode}
    //           color="$color11"
    //           backgroundColor="transparent"
    //           borderBottomWidth="$0.5"
    //         >
    //           <Paragraph color="$color11">Resend code</Paragraph>
    //         </Button>
    //       </View>
    //     )}
    //   </View>

    //   <View flexDirection="row" alignItems="center" gap="$2">
    //     <LockKeyhole size={12} color="$color10" />
    //     <Paragraph size="$2" color="$color10">
    //       Encrypted
    //     </Paragraph>
    //   </View>
    // </View>
  )
}
