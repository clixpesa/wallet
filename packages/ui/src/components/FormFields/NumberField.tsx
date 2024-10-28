import { useNumberFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, InputProps, Label, Theme, Text, View, SizableText } from 'tamagui'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { Input } from '../forms/inputs/components/inputsParts'

export const NumberField = (props: Pick<InputProps, 'size' | 'autoFocus'>) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<number>()
  const { label, defaultValue, isOptional, placeholder, minValue, maxValue } = useNumberFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Theme name={error ? 'red' : null} forceClassName>
      <Fieldset>
        <View flexDirection="row" ai="center" jc="space-between">
          {!!label && (
            <Label theme="alt1" size={props.size || '$3'} htmlFor={id}>
              {label} {isOptional && `(Optional)`}
            </Label>
          )}
          <View
            backgroundColor="$color5"
            borderRadius={100}
            padding="$1.5"
            paddingHorizontal="$2"
            // paddingVertical="$2"
            // paddingRight={10}
            // flexDirection="row"
            // marginLeft="auto"
            justifyContent="center"
            alignItems="center"
            theme="alt1"
          >
            <Theme>
              <SizableText>Limit: 10 - 10,000 cKES </SizableText>
            </Theme>
          </View>
          {/* <Text>Limit: 10 - 10,000 cKES </Text> */}
        </View>

        <Shake shakeKey={error?.errorMessage}>
          <Input>
            <Input.Box>
              <Input.Info als="center" mx="$3" size="$7">
                cKES
              </Input.Info>
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
              />
            </Input.Box>
          </Input>
        </Shake>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
