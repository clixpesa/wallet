import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H3, SubmitButton, YStack, XStack, Button, StepControl } from 'ui'
import { z } from 'zod'

type Params = {
  initialIndex?: number
  visitedIndices?: number[]
}

export default function BusinessScreen() {
  const router = useRouter()
  const params = useLocalSearchParams<Params>()

  const obj = JSON.parse(params.visitedIndices)

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
            <YStack gap="$8">
              <StepControl
                initialIndex={Number(initialIndex)}
                visitedIndices={visitedIndices.map(Number)}
              />
              <H3 ta="left">Get a loan</H3>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
