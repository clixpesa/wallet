import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, type InputProps, Label, Theme, XStack } from 'tamagui'
import { z } from 'zod'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { DatePickerExample } from '../elements/datepicker/DatePicker'

export const DateSchema = z.object({
  dateValue: z.coerce.date(),
})

export const DateField = (props: Pick<InputProps, 'size'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<z.infer<typeof DateSchema>>()

  const { label } = useFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Fieldset gap="$2">
      <Label theme="alt1" size="$3">
        {label}
      </Label>

      <XStack $sm={{ fd: 'column' }} $gtSm={{ fw: 'wrap' }} gap="$4">
        <Theme name={error?.dateValue ? 'red' : null} forceClassName>
          <Fieldset $gtSm={{ fb: 0 }} f={1}>
            <Shake shakeKey={error?.dateValue?.errorMessage}>
              <DatePickerExample
                disabled={disabled}
                placeholderTextColor="$color10"
                value={field.value?.dateValue}
                onChangeText={(dateValue) => field.onChange({ ...field.value, dateValue })}
                onBlur={field.onBlur}
                ref={field.ref}
                placeholder=""
                id={`${id}-date-value`}
                {...props}
              />
            </Shake>
            <FieldError message={error?.dateValue?.errorMessage} />
          </Fieldset>
        </Theme>
      </XStack>
    </Fieldset>
  )
}
