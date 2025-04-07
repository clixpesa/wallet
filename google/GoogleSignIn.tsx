import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

// import {
//   GoogleOneTapSignIn,
//   statusCodes,
//   isErrorWithCode,
//   isSuccessResponse,
//   isNoSavedCredentialFoundResponse,
// } from '@react-native-google-signin/google-signin';

import { router } from 'expo-router'
import { Button } from 'tamagui'
import React from 'react'
import { IconGoogle } from 'components'

export const GoogleSignIn = React.memo(() => {
  const signInWithGoogle = async () => {
    try {
      GoogleSignin.configure()
      await GoogleSignin.hasPlayServices()

      const response = await GoogleSignin.signIn()
      const token = response?.data?.idToken

      console.log('response', response)
      console.log('token', token)

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

  return (
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
  )
})
