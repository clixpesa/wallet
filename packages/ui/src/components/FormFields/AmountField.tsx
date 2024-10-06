import { ChevronDown } from '@tamagui/lucide-icons'
import { useNumberFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, InputProps, Theme, View, Label } from 'tamagui'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { Input } from '../forms/inputs/components/inputsParts'

export const AmountField = (props: Pick<InputProps, 'size' | 'autoFocus'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<number>()
  const { label, defaultValue, isOptional, placeholder, minValue, maxValue } = useNumberFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Theme forceClassName>
      <Fieldset>
        {!!label && (
          <Label theme="alt1" size={props.size || '$3'} htmlFor={id}>
            {label} {isOptional && `(Optional)`}
          </Label>
        )}
        <Shake shakeKey={error?.errorMessage}>
          <View flexDirection="column" justifyContent="center" alignItems="center" height={100}>
            <Input size="$5" minWidth="100%">
              <Input.Box>
                <Input.Section>
                  <Input.Button>
                    <Input.Icon>
                      <ChevronDown />
                    </Input.Icon>
                  </Input.Button>
                </Input.Section>
                <Input.Section>
                  <Input.Area
                    disabled={disabled}
                    placeholderTextColor="$color10"
                    inputMode="numeric"
                    value={field.value?.toString() || '0'}
                    onChangeText={(text) => {
                      const num = Number(text)
                      if (isNaN(num)) {
                        if (!field.value) {
                          field.onChange(defaultValue || 0)
                        }
                        return
                      }
                      if (typeof maxValue !== 'undefined' && num > maxValue) {
                        field.onChange(maxValue)
                        return
                      }
                      if (typeof minValue !== 'undefined' && num < minValue) {
                        field.onChange(minValue)
                        return
                      }
                      field.onChange(num)
                    }}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    placeholder={placeholder}
                    id={id}
                    {...props}
                    focusStyle={{
                      outlineOffset: 1,
                    }}
                  />
                </Input.Section>
              </Input.Box>
            </Input>
          </View>
        </Shake>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
