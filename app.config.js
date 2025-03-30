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
      googleServicesFile: googleServices(),
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-build-properties',
        {
          android: {
            minSdkVersion: 26,
          },
        },
      ],
      '@react-native-firebase/app',
      'expo-secure-store',
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
