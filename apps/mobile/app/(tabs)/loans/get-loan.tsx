import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Paragraph, SubmitButton, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function GetLoanScreen() {
  const handleSubmit = () => {
    router.push('/loans/business')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          number: formFields.number.min(10).describe('Loan amount // Name your space'),
          text: formFields.text.describe('Duration // 1 month (7.5% interest)'),
        })}
        // defaultValues={spaceInfo}
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
            <YStack gap="$2" py="$4" pb="$8" bg="red">
              <Paragraph ta="center">Get a loan</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
