const APP_ID_PREFIX = 'com.clixpesa.app'
const EAS_UPDATE_URL = 'https://u.expo.dev/e3d38825-e3c6-4435-a9a3-2322cf8cb517'
const EAS_PROJECT_ID = 'e3d38825-e3c6-4435-a9a3-2322cf8cb517'
const EAS_APP_OWNER = 'clixpesa'

const IS_DEV = process.env.APP_ENV === 'development'

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

const googleServices = () => {
  if (IS_DEV) {
    return './google/google-services-test.json'
  }

  return './google/google-services-prod.json'
}

export default {
  expo: {
    name: getName(),
    slug: 'clixpesa-app',
    jsEngine: 'hermes',
    scheme: 'clixpesa',
    version: '1.0.10',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: EAS_UPDATE_URL,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getBundleId(),
    },
    android: {
      softwareKeyboardLayoutMode: 'pan',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: getBundleId(),
      permissions: ['android.permission.RECORD_AUDIO'],
      googleServicesFile: googleServices(),
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    plugins: [
      [
        'expo-notifications',
        {
          icon: './assets/icon.png',
          color: '#ffffff',
        },
      ],
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.',
        },
      ],
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          project: 'clixpesa-mobile-app',
          organization: 'sam-5w',
        },
      ],
      'expo-apple-authentication',
      'expo-router',
      'expo-build-properties',
      'expo-font',
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
    ],
    extra: {
      router: {
        origin: false,
      },
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
