import { SchemaForm, formFields } from 'utils/SchemaForm'
import { Stack, useRouter, Link } from 'expo-router'
import { useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H1, Paragraph, View, Theme, YStack, Button, SizableText } from 'tamagui'
import { SubmitButton } from 'components'
import { z } from 'zod'

const SignUpSchema = z.object({
  phoneNumber: formFields.number,
})

export default function SignUpScreen() {
  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    alert('Submit')
  }

  return (
    <YStack flex={1} bg="$color2">
      <FormProvider {...form}>
        <SchemaForm
          form={form}
          schema={SignUpSchema}
          onSubmit={signUpWithPhoneNumber}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
                  Continue
                </SubmitButton>
                <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
                  Continue
                </SubmitButton>
                <SubmitButton onPress={() => submit()} rounded="$10" theme="teal">
                  Continue
                </SubmitButton>
              </Theme>
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack gap="$2" mb="$2">
                <H1 size="$6" fontWeight="bold">
                  Let's get you started
                </H1>
                <Paragraph fontSize="$5" py="$1" color="$color10">
                  Enter your phone number to get started, we may store and send a
                  verification code to this number
                </Paragraph>
              </YStack>
              {Object.values(fields)}
            </>
          )}
        </SchemaForm>
      </FormProvider>

      <YStack my="$8" mx="$4" gap="$4" justify="space-between">
        <SizableText size="$2" text="center">
          By signing up, you accept Clixpesa’s Terms & Conditions and Privacy Policy. Your
          data will be securely encrypted with TLS. 🔒
        </SizableText>
        <View>
          <Button variant="outlined" rounded="$10" size="$5">
            I already have an account
          </Button>
        </View>
      </YStack>
    </YStack>
  )
}
