import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H3, SubmitButton, YStack, XStack, Button, Text } from 'ui'
import { z } from 'zod'

export default function GetLoanScreen() {
  const handleSubmit = () => {
    router.push('/loans/business')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          number: formFields.number.max(10000).describe('Loan amount'),
          text: formFields.text.describe('Duration // 1 month (7.5% interest)'),
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
            <YStack mb="$2" bg="red">
              <Text>Steppwr</Text>
              <H3 ta="left">Get a loan</H3>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
