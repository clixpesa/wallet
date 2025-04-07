import { Link, Tabs, useSegments, router } from 'expo-router'
import { useEffect } from 'react'
import { Button, useTheme, View } from 'tamagui'
import { LayoutGrid, Home, User, AlertCircle } from '@tamagui/lucide-icons'
import { Platform } from 'react-native'
import { useAuth } from '../../provider/auth'

export const HomeIcons = {
  Home,
  Spaces: LayoutGrid,
  User: User,
}

// Helper function to replace routes properly on iOS/Android
const replaceRoute = (href) => {
  if (Platform.OS === 'ios') {
    setTimeout(() => router.replace(href), 1)
  } else {
    setImmediate(() => router.replace(href))
  }
}

export default function TabLayout() {
  const theme = useTheme()

  const user = useAuth().user

  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      replaceRoute('/onboarding')
    } else if (user && inAuthGroup) {
      replaceRoute('/home')
    }
  }, [user, segments])

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
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcons.Home color={color as any} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$green8" color="$green12">
                Hello!
              </Button>
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
