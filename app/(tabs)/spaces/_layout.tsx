import { AlertCircle } from '@tamagui/lucide-icons'
import { View } from 'tamagui'
import { Stack, Link } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <View px="$4">
                <AlertCircle size={22} />
              </View>
            </Link>
          ),
          headerTitle: 'Spaces',

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
    </Stack>
  )
}
