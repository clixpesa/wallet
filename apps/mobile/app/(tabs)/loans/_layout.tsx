import { Stack } from 'expo-router'
import { View, Text } from 'ui'

import { HarakaLogo } from '@/components/haraka/HarakaLogo'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="index" options={{ title: 'Loans' }} />
      <Stack.Screen
        name="get-loan"
        options={{
          headerBackground: () => (
            <View bg="$orange6" h="100%">
              <HarakaLogo />
            </View>
          ),
          // header: () => (
          //   <View style={{ height: 100 }} bg="$orange6" borderTopLeftRadius="$4">
          //     <Text>Hello</Text>
          //   </View>
          // ),
          // header
          headerTitle: '',
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

      <Stack.Screen
        name="loan-terms"
        options={{
          title: 'Accept loan terms',
        }}
      />
    </Stack>
  )
}
