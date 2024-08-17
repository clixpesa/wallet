import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function BusinessScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/business-length')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          type: formFields.select.describe('Type of business'),
        })}
        defaultValues={{
          type: 'trader',
        }}
        props={{
          type: {
            options: [
              {
                name: 'Trader',
                value: 'trader',
              },
              {
                name: 'Automobile',
                value: 'automobile',
              },
              {
                name: 'Technology',
                value: 'technology',
              },
              {
                name: 'Finance',
                value: 'finance',
              },
              {
                name: 'Others',
                value: 'others',
              },
            ],
          },
        }}
        renderAfter={({ submit }) => (
          <XStack jc="space-between" gap="$4">
            <Button
              boc="$color12"
              pressStyle={{
                bg: '$color6',
              }}
              br="$10"
              onPress={() => console.log('Save')}
            >
              <Button.Text col="$color">Save</Button.Text>
            </Button>
            <SubmitButton f={1} onPress={() => submit()} theme="orange">
              Continue
            </SubmitButton>
          </XStack>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$2" py="$4" pb="$8">
              <Paragraph ta="center">Type of Business</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
