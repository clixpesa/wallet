import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

import { UploadFile } from 'ui/src/components/elements/pickers/UploadFile'

export default function UploadStatementScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/loans/guarantors')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          statement: formFields.number,
        })}
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
              <Paragraph ta="center">Upload Statement</Paragraph>
              <UploadFile />
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
