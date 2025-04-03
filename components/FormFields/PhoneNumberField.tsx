import { useTsController } from '@ts-react/form'
import {
  getSupportedRegionCodes,
  parsePhoneNumber,
  getCountryCodeForRegionCode,
} from 'awesome-phonenumber'
import { useState, useEffect, useId } from 'react'
import { View, Theme, type SizeTokens, Text, Separator } from 'tamagui'
import { ChevronDown } from '@tamagui/lucide-icons'

import { z } from 'zod'

import { FieldError } from '../FieldError'
import { Shake } from '../Shake'
import { Input } from 'components/forms/inputs/components/inputParts'

const isPhoneNumber = (ph: string) => parsePhoneNumber(ph)?.valid

export const PhoneNumberSchema = z.object({
  phone_number: z
    .string()
    .refine(isPhoneNumber, (val) => ({ message: `${val} is not a valid phone number` })),
})

interface PhoneCode {
  regionCode: string
  countryCode: number
}

const phoneCodes: PhoneCode[] = getSupportedRegionCodes().map((code) => {
  const countryCode = getCountryCodeForRegionCode(code)

  return {
    regionCode: code,
    countryCode,
  }
})

type RegionFilterInputProps = {
  setRegionCode: (regionCode: string) => void
  setOpen: (open: boolean) => void
  open: boolean
}

export const PhoneNumberField = ({
  size,
  onValidChange,
}: { size?: SizeTokens; onValidChange?: (valid: boolean) => void }) => {
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

  const countryCode = getCountryCodeForRegionCode(regionCode)

  useEffect(() => {
    if (regionCode) {
      setPhoneNumber('+' + countryCode + ' ')
    }
  }, [regionCode])

  useEffect(() => {
    if (onValidChange) {
      onValidChange(isValid)
    }
  }, [isValid, onValidChange])

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
      <View flexDirection="column">
        <Shake shakeKey={error?.phone_number?.errorMessage}>
          <Input size={size} gapScale={0.5}>
            <Input.Box self="center" theme={isValid ? 'green' : undefined}>
              <Input.Section>
                <Input.Button px="$2" iconAfter={ChevronDown}>
                  <Text>{countryCode}</Text>
                </Input.Button>
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
      </View>
    </Theme>
  )
}
