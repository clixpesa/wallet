import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function BusinessRentScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/house-rent')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          type: formFields.select.describe('Business rent'),
        })}
        defaultValues={{
          type: '0 - 1,000',
        }}
        props={{
          type: {
            options: [
              {
                name: '0 - 1,000 cKES',
                value: '0 - 1,000',
              },
              {
                name: '1,000 - 5,000',
                value: '1,000 - 5,000',
              },
              {
                name: '5,000 - 10,000',
                value: '5,000 - 10,000',
              },
              {
                name: '10,000 - 15,000',
                value: '6-8',
              },
              {
                name: '15,000 and above',
                value: '15000+',
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
              <Paragraph ta="center">Business rent</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
