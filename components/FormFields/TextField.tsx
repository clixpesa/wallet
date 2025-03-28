import { useStringFieldInfo, useTsController } from '@ts-react/form'
import { useId } from 'react'
import { Fieldset, type InputProps, Theme } from 'tamagui'
import { Input } from 'components/forms/inputs/components/inputParts'
import { FieldError } from '../FieldError'
import { Shake } from '../Shake'

export const TextField = (
  props: Pick<InputProps, 'size' | 'autoFocus' | 'secureTextEntry'>
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>()
  const { label, placeholder, isOptional, maxLength, isEmail } = useStringFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Theme name={error ? 'red' : null} forceClassName>
      <Fieldset>
        <Shake shakeKey={error?.errorMessage}>
          <Input>
            {!!label && (
              <Input.Label theme="alt1" htmlFor={id}>
                {label} {isOptional && `(Optional)`}
              </Input.Label>
            )}
            <Input.Box>
              <Input.Section>
                <Input.Area
                  disabled={disabled}
                  maxLength={maxLength}
                  placeholderTextColor="$color10"
                  spellCheck={isEmail ? false : undefined}
                  autoCapitalize={isEmail ? 'none' : undefined}
                  inputMode={isEmail ? 'email' : undefined}
                  value={field.value}
                  onChangeText={(text) => field.onChange(text)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  placeholder={placeholder}
                  id={id}
                  width="100%"
                  {...props}
                />
              </Input.Section>
            </Input.Box>
          </Input>
        </Shake>
        <FieldError message={error?.errorMessage} />
      </Fieldset>
    </Theme>
  )
}
