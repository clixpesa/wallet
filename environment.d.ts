declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string
      NODE_ENV: 'development' | 'production' | 'test'
      FIREBASE_JWT_SECRET: string

      EXPO_PUBLIC_URL: string
      NEXT_PUBLIC_URL: string

      EXPO_PUBLIC_FIREBASE_URL: string
      NEXT_PUBLIC_FIREBASE_URL: string

      EXPO_PUBLIC_FIREBASE_ANON_KEY: string
      NEXT_PUBLIC_FIREBASE_ANON_KEY: string
    }
  }
}

export {}
