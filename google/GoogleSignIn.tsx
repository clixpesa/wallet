import {
  GoogleOneTapSignIn,
  isErrorWithCode,
  isNoSavedCredentialFoundResponse,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin'

import { router } from 'expo-router'
import { Button } from 'tamagui'

import { getUrlSafeNonce } from 'utils/auth/getNonce'
import { IconGoogle } from 'components'

export const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    try {
      GoogleOneTapSignIn.configure({
        webClientId: 'autoDetect',
      })
      await GoogleOneTapSignIn.checkPlayServices()
      const response = await GoogleOneTapSignIn.signIn()

      if (isSuccessResponse(response)) {
        // read user's info
      } else if (isNoSavedCredentialFoundResponse(response)) {
        // Android and Apple only.
        // No saved credential found (user has not signed in yet, or they revoked access)
        // call `createAccount()`
        const createResponse = await GoogleOneTapSignIn.createAccount({
          nonce: getUrlSafeNonce(),
        })
        console.log('createResponse', createResponse)
      } else if (isNoSavedCredentialFoundResponse(response)) {
        // Android and Apple only.
        // No saved credential found (user has not signed in yet, or they revoked access)
        // call `createAccount()`
        const explicitResponse = await GoogleOneTapSignIn.presentExplicitSignIn({
          nonce: getUrlSafeNonce(),
        })
        console.log('explicitResponse', explicitResponse)
      }
    } catch (error) {
      console.error(error)
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.ONE_TAP_START_FAILED:
            // Android-only, you probably have hit rate limiting.
            // You can still call `presentExplicitSignIn` in this case.
            break
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android: play services not available or outdated.
            // Get more details from `error.userInfo`.
            // Web: when calling an unimplemented api (requestAuthorization)
            // or when the Google Client Library is not loaded yet.
            break
          default:
          // something else happened
        }
      } else {
        // an error that's not related to google sign in occurred
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
}
