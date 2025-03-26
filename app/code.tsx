import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { H1, Paragraph, View, Theme, YStack, Button, SizableText } from 'tamagui'
import { OneTimeCodeInputExample } from 'components'
import { z } from 'zod'
import { router } from 'expo-router'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
})

export default function DigitCodeScreen() {
  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function verifyCode({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    // alert('Submit')
    // router.push('/set-password')
  }

  return (
    <YStack flex={1} p="$4" bg="$color2">
      <YStack gap="$2" mb="$2">
        <H1 size="$6" fontWeight="700">
          Enter the 6-digit code
        </H1>
        <Paragraph fontSize="$4" py="$1" color="$color10">
          We've sent it to +254 706 394 600
        </Paragraph>

        <OneTimeCodeInputExample />
      </YStack>
    </YStack>
  )
}
