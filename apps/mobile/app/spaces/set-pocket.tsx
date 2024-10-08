import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack, SizableText, DatePickerG, View } from 'ui'
import { z } from 'zod'

export default function SetPocketScreen() {
  const router = useRouter()

  const handleSubmit = (data) => {
    console.log('data', data)
    router.navigate('spaces/space-home')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: 'Add a pocket',
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
              <SizableText>
                Set an amount, for your saving pockect and deadline for your goal
              </SizableText>
            </YStack>
            {Object.values(fields)}
            <View gap="$4">
              <DatePickerG placeholder="Deadline" />
            </View>
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
