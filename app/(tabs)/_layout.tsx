import { Link, Tabs } from 'expo-router'
import { Button, useTheme, View } from 'tamagui'
import { LayoutGrid, Home, User, AlertCircle, Bell } from '@tamagui/lucide-icons'

export const HomeIcons = {
  Home,
  Spaces: LayoutGrid,
  User: User,
}

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.teal10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcons.Home color={color as any} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <View px="$4">
                <Bell size={22} />
              </View>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="spaces"
        options={{
          title: 'Spaces',
          tabBarIcon: ({ color }) => <HomeIcons.Spaces color={color as any} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <View px="$4">
                <AlertCircle size={22} />
              </View>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: '',
          tabBarIcon: ({ color }) => <HomeIcons.User color={color as any} />,
        }}
      />
    </Tabs>
  )
}
