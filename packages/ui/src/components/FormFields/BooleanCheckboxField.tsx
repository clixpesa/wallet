import { Check } from '@tamagui/lucide-icons'
import { useFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Checkbox, CheckboxProps, CheckedState, Fieldset, Label, Theme, XStack } from 'tamagui'

import { FieldError } from '../FieldError'

export const BooleanCheckboxField = (props: Pick<CheckboxProps, 'size' | 'native'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<CheckedState>()
  const { label, isOptional } = useFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Theme name={error ? 'red' : null} forceClassName>
      <Fieldset>
        <XStack gap="$2" ai="flex-start">
          <Checkbox
            disabled={disabled}
            native
            checked={field.value}
            onCheckedChange={(checked) => field.onChange(checked)}
            ref={field.ref}
            id={id}
            theme="orange"
            {...props}
          >
            <Checkbox.Indicator>
              <Check />
            </Checkbox.Indicator>
          </Checkbox>

          {!!label && (
            <Label lh="$6" htmlFor={id} size={props.size} f={1}>
              {label} {isOptional && `(Optional)`}
            </Label>
          )}
        </XStack>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
