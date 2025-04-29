const APP_ID_PREFIX = 'com.clixpesa.app'
const EAS_UPDATE_URL = 'https://u.expo.dev/e3d38825-e3c6-4435-a9a3-2322cf8cb517'
const EAS_PROJECT_ID = 'e3d38825-e3c6-4435-a9a3-2322cf8cb517'
const EAS_APP_OWNER = 'clixpesa'

const IS_DEV = process.env.APP_VARIANT === 'development'

const getName = () => {
  if (IS_DEV) {
    return 'Clixpesa (Dev)'
  }
  return 'Clixpesa'
}

const getBundleId = () => {
  if (IS_DEV) {
    return `${APP_ID_PREFIX}.test`
  }
  return APP_ID_PREFIX
}

const getGoogleServicesFile = () => {
  // Use environment variable if set, otherwise fall back to local files
  return (
    process.env.GOOGLE_SERVICES_JSON ||
    (IS_DEV ? './google-services.test.json' : './google-services.prod.json')
  )
}

export default {
  expo: {
    name: getName(),
    slug: 'clixpesa-app',
    version: '1.0.25',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'clixpesa',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: getBundleId(),
      googleServicesFile: getGoogleServicesFile(),
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/Inter-Medium.ttf',
            './assets/fonts/Inter-Regular.ttf',
            './assets/fonts/Inter-SemiBold.ttf',
            './assets/fonts/Inter-Bold.ttf',
          ],
        },
      ],
      'expo-secure-store',
      '@react-native-google-signin/google-signin',
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
    ],
    experiments: {
      typedRoutes: true,
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: EAS_UPDATE_URL,
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    owner: EAS_APP_OWNER,
  },
}
