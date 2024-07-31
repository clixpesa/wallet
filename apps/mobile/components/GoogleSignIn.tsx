import { useRouter } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import { Button } from 'ui'

import { IconGoogle } from './IconGoogle'

export function GoogleSignIn() {
  const router = useRouter()

  async function signInWithGoogle() {
    let authSuccessful = false
    /**
     * Google One Tap
     * This is the method for Google One Tap. It is not available on iOS
     * and requires sponsoring the project. See more here: https://github.com/react-native-google-signin/google-signin/issues/1176#issuecomment-1674385846.
  if (Platform.OS === "android") {
    const { rawNonce, hashedNonce } = await initiateGoogleSignIn();
    const userInfo = await GoogleOneTapSignIn.signIn({
      webClientId:
        "YOUR_WEB_CLIENT_ID",
      nonce: hashedNonce,
    });
    const token = userInfo?.idToken;
    if (!token) throw new Error("No id token");
    const { error } = await auth.signInWithIdToken({
      provider: "google",
      token: token,
      nonce: rawNonce,
    });
    if (!error) router.replace("/");
    if (error) return Alert.alert("Error", error.message);
  } else {
    Platform.OS === "ios";
  */
    try {
      // whatever route you want to deeplink to; make sure to configure in dashboard
      const redirectUri = 'myapp://'
      const provider = 'google'
      const response = await WebBrowser.openAuthSessionAsync(
        `${process.env.EXPO_PUBLIC_FIREBASE_URL}/auth/v1/authorize?${new URLSearchParams({
          provider,
          redirect_to: redirectUri,
        })}`,
        redirectUri
      )

      if (response.type === 'success') {
        const url = response.url
        const params = url.split('#')[1]
        if (!params) return
        const paramsArray = params.split('&')
        const accessToken = paramsArray[0]?.split('=')[1]
        const refreshToken = paramsArray[2]?.split('=')[1]

        // if (accessToken && refreshToken) {
        //   // handle error
        //   const { error } = await auth.setSession({
        //     access_token: accessToken,
        //     refresh_token: refreshToken,
        //   })
        //   if (!error) authSuccessful = true
        //   if (error) {
        //     // handle error
        //   }
        // }
      }
    } catch (error) {
      // handle error
      console.error(error)
    } finally {
      WebBrowser.maybeCompleteAuthSession()
      if (authSuccessful) router.replace('/')
    }
  }

  return (
    <Button
      onPress={() => signInWithGoogle()}
      icon={IconGoogle}
      // styles to make it look like the native Apple button on AppleSignIn.native.tsx
      scaleIcon={0.75}
      gap="$1.5"
      bg="transparent"
      pressStyle={{ bg: 'transparent', o: 0.6, bw: '$0' }}
      animation="200ms"
      chromeless
    >
      Sign in with Google
    </Button>
  )
}
