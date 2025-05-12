import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import {
  // type Control,
  // type UseFormRegister,
  // type UseFormSetValue,
  FormProvider,
  Controller,
  useForm,
} from 'react-hook-form'
import { SubmitButton, CAvatar } from 'components'
import { Button, SizableText, XStack, YStack, Input } from 'tamagui'
import type { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Calendar } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { z } from 'zod'

import type { SizeTokens } from 'tamagui'

const GoalSchema = z.object({
  amount: formFields.number,
})

export const AddGoalScreen = () => {
  const form = useForm<z.infer<typeof GoalSchema>>()

  const handleSubmit = async (data: z.infer<typeof GoalSchema>) => {
    console.log('handleSubmit', data)
  }

  const [date, setDate] = useState<Date | null>(null) // Initialize as null

  const formatDate = (date: Date | null) => {
    if (!date) return null
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    })
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
  }
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date || new Date(), // Fallback to current date if null
      onChange,
      mode: currentMode,
      is24Hour: true,
      minimumDate: new Date(),
    })
  }

  const showDatepicker = () => {
    showMode('date')
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        schema={GoalSchema}
        props={{
          amount: {
            autoFocus: true,
          },
        }}
        onSubmit={handleSubmit}
        renderAfter={({ submit }) => (
          <XStack justify="space-between" items="center" gap="$2">
            <Button size="$4" theme="teal" themeInverse rounded="$10" onPress={showDatepicker}>
              <Button.Icon>
                <Calendar />
              </Button.Icon>
            </Button>

            <SubmitButton rounded="$10" flex={1} theme="teal" onPress={() => submit()} themeInverse>
              Confirm
            </SubmitButton>
          </XStack>
        )}
      >
        {(fields) => (
          <YStack mt="30%">
            {Object.values(fields)}
            <SizableText size="$4" theme="alt2" text="center" fontWeight="400">
              {date ? `Deadline ${formatDate(date)}` : 'No Deadline'}
            </SizableText>
          </YStack>
        )}
      </SchemaForm>
    </FormProvider>
  )
}
