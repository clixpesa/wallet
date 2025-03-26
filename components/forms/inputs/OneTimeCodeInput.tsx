import { useEffect, useState, useRef, useCallback } from 'react'
import type { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import type { SizeTokens } from 'tamagui'
import {
  AnimatePresence,
  Form,
  Input,
  Paragraph,
  Spinner,
  View,
  XStack,
  YStack,
} from 'tamagui'

import { CheckCircle2, RefreshCcw } from '@tamagui/lucide-icons'

interface CodeConfirmationInputProps {
  id: number
  size?: SizeTokens
  codeSize: number
  secureTextEntry?: boolean
  control: Control<FormFields, any>
  register: UseFormRegister<FormFields>
  setValue: UseFormSetValue<FormFields>
  switchInputPlace: (currentField: number, value: string) => void
  onSubmit: () => void
}

function CodeConfirmationInput({
  id,
  size,
  codeSize,
  secureTextEntry,
  control,
  register,
  setValue,
  switchInputPlace,
  onSubmit,
}: CodeConfirmationInputProps) {
  return (
    <Controller
      name={`code${id}`}
      defaultValue=""
      control={control}
      rules={{ required: true, pattern: /^[0-9]*$/ }}
      render={({ fieldState: { invalid }, field: { value, onChange } }) => (
        <Input
          {...register(`code${id}`)}
          value={value}
          maxLength={codeSize}
          // uncomment this for autofocus
          autoFocus={id === 0}
          selectTextOnFocus
          onChangeText={(code: string) => {
            // Max length is disabled to enable multiple digit paste
            if (code.length === codeSize) {
              // Paste logic

              const digits = code.split('')
              digits.forEach((digit, index) => {
                // Set each digit to the corresponding input
                setValue(`code${index}`, digit)
              })

              onSubmit()
            } else {
              // Manual input logic

              // Only take the first digit (disables multiple digits in one input)
              onChange(code.split('')[0])
              // Focus next input
              switchInputPlace(id, code)

              // Submit on last input
              if (id === codeSize - 1) {
                onSubmit()
              }
            }
          }}
          onKeyPress={(e) => {
            const event = e.nativeEvent
            if (event.key === 'Backspace') {
              // Prevent the backspace key from navigating back
              e.preventDefault()

              if (value !== '') {
                // Reset input field
                onChange('')
              } else {
                // Set focus to the previous input
                switchInputPlace(id, value)
              }
            }
            if (event.key === 'Enter') {
              onSubmit()
            }
          }}
          inputMode="numeric"
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="one-time-code"
          secureTextEntry={secureTextEntry}
          enterKeyHint={id === codeSize - 1 ? 'done' : 'next'}
          text="center"
          fontSize="$4"
          rounded="$8"
          // theme="active"
          aspectRatio={1}
          width="100%"
          height="100%"
          flex={1}
          bg={invalid ? '$red7' : value ? '$color1' : '$color5'}
          hoverStyle={{ outlineWidth: 0 }}
          focusStyle={{
            bg: invalid ? '$red8' : '$color1',
            outlineWidth: 0,
          }}
        />
      )}
    />
  )
}

interface CodeConfirmationProps {
  size?: SizeTokens
  codeSize: number
  secureText?: boolean
  onEnter: (code: number) => void
}

interface FormFields {
  [key: string]: string
}

function CodeConfirmation({
  size,
  codeSize,
  secureText,
  onEnter,
}: CodeConfirmationProps) {
  const defaultValues = Array.from({ length: codeSize }, (_, i) => `code${i}`).reduce(
    (acc, key) => ({ ...acc, [key]: '' }),
    {}
  )

  const { control, setFocus, register, handleSubmit, setValue, formState } =
    useForm<FormFields>({
      defaultValues: defaultValues,
    })

  const switchInputPlace = (currentInput: number, value: string) => {
    if (value === '') {
      setFocus(`code${currentInput - 1}`)
    } else {
      setFocus(`code${currentInput + 1}`)
    }
  }

  const onSubmit = handleSubmit((data) => {
    const code = Number(Object.values(data).join(''))
    onEnter(code)
  })

  const [translateX, setTranslateX] = useState(0)
  const [isValid, setValid] = useState(true)

  useEffect(() => {
    if (Object.keys(formState.errors).length > 0) {
      setValid(false)
    }
  }, [formState.isValidating])

  // shake animation
  useEffect(() => {
    let interval: number | null = null

    interval = window.setInterval(() => {
      if (isValid) {
        setTranslateX(0)
      } else {
        setValid(false)
        setTranslateX((prevState) => {
          if (prevState === 0) return -16
          if (prevState < 0) return Math.abs(prevState) - 2
          setValid(true)
          return -(prevState - 2)
        })
      }
    }, 50)

    return () => {
      if (interval) window.clearInterval(interval)
    }
  }, [isValid])

  return (
    <Form
      gap="$2"
      items="center"
      minW="100%"
      justify="center"
      x={translateX}
      animation="bouncy"
      width="100%"
      mt="$2"
      flexDirection="row"
      onSubmit={onSubmit}
      mb="$0"
      pb="$0"
      bg="$teal10"
    >
      {Array(codeSize)
        .fill(null)
        .map((_, id) => {
          return (
            <CodeConfirmationInput
              key={`code${id}`}
              id={id}
              size={size}
              codeSize={codeSize}
              secureTextEntry={secureText}
              control={control}
              register={register}
              setValue={setValue}
              switchInputPlace={switchInputPlace}
              onSubmit={onSubmit}
            />
          )
        })}
    </Form>
  )
}

// ResendTimer component
const ResendTimer = ({
  onComplete,
  onResendClick,
}: {
  onComplete: () => void
  onResendClick: () => void
}) => {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const startTimeRef = useRef<number | null>(null)
  const rafIdRef = useRef<number>()

  const handleResendClick = () => {
    setIsTimerActive(true)
    onResendClick()
  }

  useEffect(() => {
    if (!isTimerActive || seconds === 0) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const newSeconds = 30 - Math.floor(elapsed / 1000)

      if (newSeconds <= 0) {
        setSeconds(0)
        setIsTimerActive(false)
        onComplete()
        return
      }

      if (newSeconds !== seconds) {
        setSeconds(newSeconds)
      }

      rafIdRef.current = requestAnimationFrame(animate)
    }

    rafIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      startTimeRef.current = null
    }
  }, [isTimerActive, seconds === 0, onComplete])

  if (!isTimerActive) {
    return (
      <XStack
        items="center"
        self="flex-end"
        justify="flex-end"
        gap="$2"
        className="flex"
        cursor="pointer"
        onPress={handleResendClick}
      >
        <RefreshCcw size={12} color="$teal10" />
        <Paragraph color="$teal10" text="right" fontSize="$1">
          Resend OTP
        </Paragraph>
      </XStack>
    )
  }

  return (
    <XStack
      items="center"
      self="flex-end"
      justify="flex-end"
      gap="$2"
      className="flex"
      cursor="default"
    >
      <RefreshCcw size={12} color="$color10" />
      <Paragraph color="$color10" text="right" fontSize="$1">
        Resend in {seconds} {seconds > 1 ? 'seconds' : 'second'}
      </Paragraph>
    </XStack>
  )
}

/** ------ EXAMPLE ------ */
export function OneTimeCodeInputExample({
  size = '$5',
  codeSize = 6,
  secureText = false,
}: {
  size?: SizeTokens
  codeSize?: number
  secureText?: boolean
}) {
  const [code, setCode] = useState<number>()
  const [codeEntered, setCodeEntered] = useState(false)
  const [verified, setVerified] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [activeInterface, setActiveInterface] = useState<'email' | 'code'>('code')
  const [isResendEnabled, setIsResendEnabled] = useState(false)

  const handleEnter = useCallback((code: number) => {
    setCode(code)
  }, [])

  const handleResendComplete = useCallback(() => {
    setIsResendEnabled(true)
  }, [])

  const handleResendClick = useCallback(() => {}, [])

  // const showCode = activeInterface === 'email' || codeEntered

  return (
    <View items="center" justify="center" gap="$4">
      <View
        bg="red"
        key="code"
        animation="200ms"
        width="100%"
        // opacity={showCode ? 0 : 1}
        // pointerEvents={showCode ? 'none' : 'auto'}
        // transform={[{ translateX: showCode ? -150 : 0 }]}
      >
        <YStack
          key="code"
          animation="200ms"
          // exitStyle={{ opacity: 0 }}
          justify="space-between"
          gap="$4"
          width="100%"
          // opacity={code ? 0 : 1}
          height="auto"
        >
          <View px="$4">
            <YStack gap="$4">
              <CodeConfirmation
                size={size}
                codeSize={codeSize}
                secureText={secureText}
                onEnter={handleEnter}
              />
            </YStack>
          </View>
        </YStack>
      </View>

      <View flexDirection="row" items="center" gap="$2">
        <ResendTimer
          onComplete={handleResendComplete}
          onResendClick={handleResendClick}
        />
      </View>

      {code && (
        <View items="center" justify="center">
          <Spinner color="$color10" />
        </View>
      )}
      <View t="$4" r="$4">
        {codeEntered && (
          <View animation="bouncy" key="success" flexDirection="row" gap="$2">
            <AnimatePresence>
              {verified && (
                <Paragraph
                  key="success"
                  color="$green10"
                  enterStyle={{ opacity: 0, x: 15 }}
                  exitStyle={{ opacity: 0, x: 15, scale: 0.5 }}
                  animation="200ms"
                >
                  Success
                </Paragraph>
              )}
            </AnimatePresence>
            <View enterStyle={{ opacity: 0.5, scale: 1.5 }} animation="bouncy">
              <CheckCircle2 color="$green10" />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
