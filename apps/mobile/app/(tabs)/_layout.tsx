import { Home, User, Coins, Wallet2, Bell } from '@tamagui/lucide-icons'
import { Tabs, router } from 'expo-router'
import { Button, useTheme } from 'ui'

import { TabBarButton } from '@/components/TabBarButton'

export default function TabLayout() {
  const { teal10, teal8 } = useTheme()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'ClixPesa',
          headerShown: true,
          headerRight: () => (
            <Button
              borderStyle="unset"
              borderWidth={0}
              backgroundColor="transparent"
              borderRadius={50}
              onPress={() => {
                router.navigate('notifications')
              }}
            >
              <Bell size={24} />
            </Button>
          ),
          tabBarLabel: 'Home',
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              tabBarLabel="Home"
              activeTintColor={teal10.val}
              inactiveTintColor={teal8.val}
              icon={({ color }) => <Home color={color} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              tabBarLabel="Wallet"
              activeTintColor={teal10.val}
              inactiveTintColor={teal8.val}
              icon={({ color }) => <Wallet2 color={color} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: 'Loans',
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              tabBarLabel="Loans"
              activeTintColor={teal10.val}
              inactiveTintColor={teal8.val}
              icon={({ color }) => <Coins color={color} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              tabBarLabel="Profile"
              activeTintColor={teal10.val}
              inactiveTintColor={teal8.val}
              icon={({ color }) => <User color={color} />}
            />
          ),
        }}
      />
    </Tabs>
  )
}
