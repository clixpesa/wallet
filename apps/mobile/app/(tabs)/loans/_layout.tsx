import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="index" options={{ title: 'Loans', headerShadowVisible: false }} />
      <Stack.Screen
        name="get-loan"
        options={{
          title: 'Get a loan',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="business"
        options={{
          title: 'Type of business',
        }}
      />

      <Stack.Screen
        name="business-length"
        options={{
          title: 'Business length',
        }}
      />

      <Stack.Screen
        name="daily-income"
        options={{
          title: 'Daily Income',
        }}
      />

      <Stack.Screen
        name="business-rent"
        options={{
          title: 'Business rent',
        }}
      />

      <Stack.Screen
        name="house-rent"
        options={{
          title: 'House rent',
        }}
      />

      <Stack.Screen
        name="dependants"
        options={{
          title: 'Dependants',
        }}
      />

      <Stack.Screen
        name="upload-statement"
        options={{
          title: 'Upload statement',
        }}
      />

      <Stack.Screen
        name="guarantors"
        options={{
          title: 'Choose guarantors',
        }}
      />

      <Stack.Screen
        name="frequency"
        options={{
          title: 'Repayment frequency',
        }}
      />

      <Stack.Screen
        name="review"
        options={{
          title: 'Review application',
        }}
      />
    </Stack>
  )
}
