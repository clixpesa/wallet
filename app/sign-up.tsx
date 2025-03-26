import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { H1, Paragraph, View, Theme, YStack, Button, SizableText } from 'tamagui'
import { SubmitButton } from 'components'
import { number, z } from 'zod'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
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
          props={{
            phoneNumber: {
              size: '$5',
            },
          }}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
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
                <H1
                  // size="$6"
                  // style={{ fontFamily: 'InterRegular', fontWeight: 900 }}
                  // fontWeight="900"
                  fontWeight="900"
                >
                  Let's get you started
                </H1>
                <Paragraph
                  color="$color10"
                  // fontFamily="$body"
                  // style={{
                  //   fontFamily: 'InterRegular',
                  //   // fontWeight: '800',
                  // }}
                  fontWeight="bold"
                  size="$2"
                >
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
        <SizableText size="$1" text="center" style={{ fontFamily: 'InterRegular' }}>
          By signing up, you accept Clixpesa’s Terms & Conditions and Privacy Policy.
        </SizableText>
        <View>
          <Button
            theme="teal"
            pressStyle={{
              bg: '$color6',
              borderColor: '$color6',
            }}
            chromeless
            bordered
            borderColor="$color"
            rounded="$10"
          >
            <Button.Text color="$color">I already have an account</Button.Text>
          </Button>
        </View>
      </YStack>
    </YStack>
  )
}
