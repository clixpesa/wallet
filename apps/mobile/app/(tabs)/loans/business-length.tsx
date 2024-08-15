import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function BusinessLengthScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/daily-income')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          type: formFields.select.describe('Business length'),
        })}
        defaultValues={{
          type: '0-2',
        }}
        props={{
          type: {
            options: [
              {
                name: '0 - 2 years',
                value: '0-2',
              },
              {
                name: '2 - 4',
                value: '2-4',
              },
              {
                name: '4 - 6',
                value: '4-6',
              },
              {
                name: '6 - 8',
                value: '6-8',
              },
              {
                name: '8 and above',
                value: '8+',
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
              <Paragraph ta="center">Business length</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
