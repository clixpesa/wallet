import { Link, Tabs } from 'expo-router'
import { useTheme, View } from 'tamagui'
import { LayoutGrid, Home, AlertCircle, Bell, User } from '@tamagui/lucide-icons'
import { useAuth } from 'provider/auth'
import { CAvatar } from 'components'
export const HomeIcons = {
  Home,
  Spaces: LayoutGrid,
}

export default function TabLayout() {
  const theme = useTheme()
  const { user } = useAuth()

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
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Welcome',
          tabBarIcon: ({ color }) => <HomeIcons.Home color={color as any} />,
          headerLeft: () => (
            <Link href="/profile" asChild>
              <View px="$4">
                <CAvatar size="$4" theme="teal">
                  <CAvatar.Content>
                    <CAvatar.Image src={user?.photoURL} />
                    <CAvatar.Fallback
                      backgroundColor="$background"
                      items="center"
                      justifyContent="center"
                    >
                      <User size={20} />
                    </CAvatar.Fallback>
                  </CAvatar.Content>
                </CAvatar>
              </View>
            </Link>
          ),
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
    </Tabs>
  )
}
