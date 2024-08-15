import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function DependantsScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/upload-statement')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          type: formFields.select.describe('Number of dependants'),
        })}
        defaultValues={{
          type: '0',
        }}
        props={{
          type: {
            options: [
              {
                name: '0',
                value: '0',
              },
              {
                name: '1',
                value: '1',
              },
              {
                name: '2',
                value: '2',
              },
              {
                name: '3',
                value: '3',
              },
              {
                name: '4 and above',
                value: '4+',
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
              <Paragraph ta="center">Number of dependants</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
