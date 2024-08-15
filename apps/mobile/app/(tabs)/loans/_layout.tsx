import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Loans', headerShadowVisible: false }} />
      <Stack.Screen
        name="get-loan"
        options={{
          title: 'Get a loan',
          // headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="business"
        options={{
          title: 'Type of business',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="business-length"
        options={{
          title: 'Business length',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="daily-income"
        options={{
          title: 'Daily Income',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="business-rent"
        options={{
          title: 'Business rent',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="house-rent"
        options={{
          title: 'House rent',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="dependants"
        options={{
          title: 'Dependants',
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="upload-statement"
        options={{
          title: 'Upload statement',
          animation: 'slide_from_right',
        }}
      />
    </Stack>
  )
}
