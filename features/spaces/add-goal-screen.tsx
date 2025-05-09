import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'
import { SubmitButton, CAvatar } from 'components'
import { Button, SizableText, XStack, YStack } from 'tamagui'
import { Calendar } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { z } from 'zod'

const GoalSchema = z.object({
  name: formFields.text,
})

export const AddGoalScreen = () => {
  const form = useForm<z.infer<typeof GoalSchema>>()

  const handleSubmit = async (data: z.infer<typeof GoalSchema>) => {
    console.log('handleSubmit', data)
  }

  const [date, setDate] = useState(new Date(1598051730000))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    })
  }

  const showDatepicker = () => {
    showMode('date')
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        schema={GoalSchema}
        onSubmit={handleSubmit}
        renderAfter={({ submit }) => (
          <XStack justify="space-between" items="center" gap="$2">
            <Button
              // pressStyle={{
              //   bg: '$teal6',
              // }}
              size="$4"
              // bg="$teal10"
              theme="teal"
              themeInverse
              rounded="$10"
              onPress={showDatepicker}
            >
              <Button.Icon>
                <Calendar />
              </Button.Icon>
            </Button>

            <SubmitButton
              rounded="$10"
              flex={1}
              theme="teal"
              onPress={() => submit()}
              themeInverse
              disabled
            >
              Confirm
            </SubmitButton>
          </XStack>
        )}
      >
        {(fields) => (
          <YStack items="center" justify="center">
            {Object.values(fields)}
            <SizableText size="$4" theme="alt2">
              No deadline
            </SizableText>
          </YStack>
        )}
      </SchemaForm>
    </FormProvider>
  )
}
