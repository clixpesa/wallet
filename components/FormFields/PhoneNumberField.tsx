import { useTsController } from '@ts-react/form'
import { parsePhoneNumber, getCountryCodeForRegionCode } from 'awesome-phonenumber'
import { useState, useEffect, useId } from 'react'
import type { SizeTokens } from 'tamagui'
import { Theme, Text } from 'tamagui'
import { z } from 'zod'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { Input } from '../forms/inputs/components/inputParts'

const isPhoneNumber = (ph: string) => parsePhoneNumber(ph)?.valid

export const PhoneNumberSchema = z.object({
  phone_number: z
    .string()
    .refine(isPhoneNumber, (val) => ({ message: `${val} is not a valid phone number` })),
})

export const PhoneNumberField = ({ size }: { size?: SizeTokens }) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<z.infer<typeof PhoneNumberSchema>>()

  const id = useId()
  const disabled = isSubmitting

  const [regionCode, setRegionCode] = useState('KE')
  const [phoneNumber, setPhoneNumber] = useState(field.value?.phone_number)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (regionCode) {
      setPhoneNumber('+' + getCountryCodeForRegionCode(regionCode) + ' ')
    }
  }, [regionCode])

  const handlePhoneNumberChange = (text: string) => {
    text = !phoneNumber && text !== '+' ? `+${text}` : text
    const parsed = parsePhoneNumber(text)
    // Note: parsed object has a lot of info about the number
    if (parsed.regionCode) {
      setRegionCode(parsed.regionCode)
    } else {
      setRegionCode('')
    }
    const newPhoneNumber = parsed.number?.international || text
    setPhoneNumber(newPhoneNumber)
    setIsValid(parsed.valid)

    field.onChange({ ...field.value, phone_number: newPhoneNumber })
  }
  return (
    <Theme name={error?.phone_number ? 'red' : null} forceClassName>
      <Shake shakeKey={error?.phone_number?.errorMessage}>
        <Input size={size} gapScale={0.5}>
          <Input.Box self="center" theme={isValid ? 'green' : undefined}>
            <Input.Section>
              <Text>{regionCode}</Text>
            </Input.Section>
            <Input.Section>
              <Input.Area
                id={id}
                disabled={disabled}
                keyboardType="number-pad"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
            </Input.Section>
          </Input.Box>
        </Input>
      </Shake>
      <FieldError message={error?.phone_number?.errorMessage} />
    </Theme>
  )
}
