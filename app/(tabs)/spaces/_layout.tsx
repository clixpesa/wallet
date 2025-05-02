import { AlertCircle } from '@tamagui/lucide-icons'
import { View, Text, useTheme } from 'tamagui'
import { Stack, Link } from 'expo-router'

export default function Layout() {
  const theme = useTheme()

  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="index"
        options={{
          // headerTitle: () => (
          //   <Text fontSize={20} fontWeight="600">
          //     Spaces
          //   </Text>
          // ),
          headerTitle: '',

          headerRight: () => (
            <Link href="/modal" asChild>
              <View px="$4">
                <AlertCircle size={22} />
              </View>
            </Link>
          ),

          // headerSearchBarOptions: {
          //   headerIconColor: tabBarTintColor,
          //   tintColor: tabBarTintColor,
          //   textColor: tabBarTintColor,
          //   hintTextColor: tabBarTintColor,
          //   onChangeText: (event) => {
          //     router.setParams({
          //       q: event.nativeEvent.text,
          //     });
          //   },
          // },
        }}
      />

      <Stack.Screen
        name="create"
        options={{
          headerTitle: '',
        }}
      />
    </Stack>
  )
}
