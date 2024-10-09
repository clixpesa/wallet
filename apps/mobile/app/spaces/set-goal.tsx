import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, router } from 'expo-router'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack, SizableText, View, Button } from 'ui'
import { z } from 'zod'

export default function SetGoalScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const handleSubmit = (data) => {
    console.log('data', data)
    router.navigate('spaces/set-pocket')
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
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
            <View gap="$4">
              <Button onPress={showDatePicker}>Show Date Picker</Button>
              <DateTimePickerModal
                isDarkModeEnabled
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
