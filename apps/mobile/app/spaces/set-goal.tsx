import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack, SizableText, DatePickerExample } from 'ui'
import { z } from 'zod'

export default function SetGoalScreen() {
  const router = useRouter()

  const handleSubmit = (data) => {
    console.log('data', data)
    router.navigate('spaces/set-pocket')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: 'Add goal',
        }}
      />
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          amount: formFields.amount,
        })}
        renderAfter={({ submit }) => <SubmitButton onPress={() => submit()}>Continue</SubmitButton>}
      >
        {(fields) => (
          <>
            <YStack ai="center">
              <SizableText>Set an amount, contribution and disbursment schedule</SizableText>
            </YStack>
            {Object.values(fields)}
            <DatePickerExample placeholder="Select Date" />
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
