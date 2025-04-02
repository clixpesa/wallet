import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { FormProvider, useForm } from 'react-hook-form'
import { openBrowserAsync } from 'expo-web-browser'
import { StyleSheet } from 'react-native'
import { Text } from 'tamagui'
import {
  H1,
  Paragraph,
  View,
  Theme,
  YStack,
  Button,
  SizableText,
  Separator,
  XStack,
} from 'tamagui'

import { SubmitButton, IconGoogle } from 'components'
import { z } from 'zod'
import { router } from 'expo-router'
import { useState, useMemo, useEffect, useId, useRef, useCallback } from 'react'

const SignUpSchema = z.object({
  phoneNumber: formFields.phone_number,
  email: formFields.text.email(),
})

export default function SignUpScreen() {
  const [useEmail, setUseEmail] = useState(false)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const form = useForm<z.infer<typeof SignUpSchema>>()

  // const activeFieldValue = form.watch(useEmail ? 'email' : 'phoneNumber')
  // const isDisabled = !activeFieldValue?.toString()

  const handleSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    router.push('/verify-code')
  }

  async function signUpWithPhoneNumber({ phoneNumber }: z.infer<typeof SignUpSchema>) {
    router.push('/verify-code')
  }

  async function signInWithGoogle() {
    try {
      GoogleSignin.configure({
        // Add clixpesa web client id
        iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
        webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
      })

      await GoogleSignin.hasPlayServices()

      const response = await GoogleSignin.signIn()
      const token = response?.data?.idToken

      if (token) {
        // console.log('token', token)
        // if (error) {
        //   throw new Error('error', error)
        // }
        router.replace('/')
      } else {
        throw new Error('no ID token present!')
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  // hooks
  const sheetRef = useRef<BottomSheet>(null)

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  )
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], [])

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index)
  }, [])
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const openSheet = useCallback(() => {
    // sheetRef.current?.snapToIndex(-1.5) // Open to full screen (index 2 = '100%')
    setIsBottomSheetOpen(true)
  }, [])

  const closeSheet = useCallback(() => {
    sheetRef.current?.close()
    setIsBottomSheetOpen(false)
  }, [])

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  )

  return (
    <YStack flex={1} bg="$color2">
      <FormProvider {...form}>
        <SchemaForm
          form={form}
          schema={SignUpSchema}
          onSubmit={handleSubmit}
          props={{
            phoneNumber: {
              size: '$5',
            },
            email: {
              size: '$5',
            },
          }}
          renderAfter={({ submit }) => (
            <>
              <Theme inverse>
                <SubmitButton
                  onPress={() => submit()}
                  rounded="$10"
                  theme="teal"
                  // disabled={isDisabled}
                >
                  Continue
                </SubmitButton>
              </Theme>
              <SizableText size="$1" color="$color10">
                By signing up, I accept Clixpesa's{' '}
                <SizableText
                  size="$1"
                  color="$teal11"
                  textDecorationLine="underline"
                  onPress={() =>
                    openBrowserAsync('https://clixpesa.com/terms-conditions/')
                  }
                >
                  Terms
                </SizableText>{' '}
                &{' '}
                <SizableText
                  size="$1"
                  color="$teal11"
                  textDecorationLine="underline"
                  onPress={() => openBrowserAsync('https://clixpesa.com/privacy-policy/')}
                >
                  Privacy Policy
                </SizableText>
                .
              </SizableText>
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack gap="$2" mb="$4">
                <H1 size="$5" fontWeight="700">
                  Let's get started
                </H1>
              </YStack>

              {useEmail ? fields.email : fields.phoneNumber}

              <XStack justify="space-between" mt="$2">
                <Paragraph color="$color10" text="right">
                  {useEmail ? 'Prefer phone number sign up?' : 'Prefer email sign up?'}
                </Paragraph>
                <SizableText
                  onPress={() => setUseEmail(!useEmail)}
                  color="$teal10"
                  textDecorationLine="underline"
                >
                  {useEmail ? 'Use phone' : 'Use email'}
                </SizableText>
              </XStack>
            </>
          )}
        </SchemaForm>
      </FormProvider>

      <YStack mb="$4" mx="$4">
        <Theme name="teal">
          <View flexDirection="column" gap="$4" width="100%" self="center">
            <View flexDirection="row" width="100%" items="center" gap="$4">
              <Separator />
              <Paragraph>OR</Paragraph>
              <Separator />
            </View>
            <Button
              onPress={() => signInWithGoogle()}
              icon={IconGoogle}
              scaleIcon={1.2}
              gap="$1.5"
              rounded="$10"
              bg="$color1"
              pressStyle={{ bg: '$teal1', opacity: 0.6 }}
              animation="200ms"
              size="$5"
            >
              Sign in with Google
            </Button>
          </View>
        </Theme>
      </YStack>
      <Button onPress={() => handleSnapPress(2)}>Snap To 90%</Button>
      <BottomSheet
        ref={sheetRef}
        index={0}
        enablePanDownToClose
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 8,
    marginHorizontal: 16,
    backgroundColor: '#eee',
  },
})
