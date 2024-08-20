import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { H3, SubmitButton, YStack, XStack, Button, StepControl, type stepControlRef } from 'ui'
import { z } from 'zod'

export default function GetLoanScreen() {
  const stepControlRef = useRef<stepControlRef>(null)
  const [visitedIndices, setVisitedIndices] = useState<number[]>([0])

  const handleSubmit = () => {
    // Trigger StepControl to move to next step
    if (stepControlRef.current) {
      stepControlRef.current.nextStep()
    }
    setVisitedIndices((prev) => [...new Set([...prev, 1])])
    router.push({
      pathname: '/loans/business',
      params: { initialIndex: 1, visitedIndices },
    })
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={['bottom', 'left', 'right']}
    >
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          number: formFields.number.min(10).max(10000).describe('Loan amount'),
          duration: formFields.select.describe('Duration'),
        })}
        defaultValues={{
          duration: '1 month',
        }}
        props={{
          duration: {
            options: [
              {
                name: '1 month (7.5% interest)',
                value: '1 month',
              },
              {
                name: '2 months (15% interest)',
                value: '2 months,',
              },
              {
                name: '3 months (22.5% interest)',
                value: '3 months',
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
              <StepControl ref={stepControlRef} visitedIndices={visitedIndices} />
              <H3 ta="left">Get a loan</H3>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
