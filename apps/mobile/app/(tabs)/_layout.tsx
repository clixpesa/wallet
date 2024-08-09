import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus, User } from '@tamagui/lucide-icons'
import { Stack, Tabs, useRouter } from 'expo-router'
import { Circle, Theme, YStack } from 'ui'

export default function Layout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color, focused }) => (
              <Home color={focused ? '$teal10' : '$teal8'} size={size} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="_create"
          listeners={({ navigation }: any) => ({
            tabPress: (event: any) => {
              event.preventDefault()
              navigation.navigate('create')
            },
          })}
          options={{
            title: 'New',
            tabBarIcon: PlusButton,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ size, color, focused }) => (
              <User color={focused ? '$teal10' : '$teal8'} size={size} strokeWidth={2} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

const PlusButton = ({ size }: TabBarIconProps) => {
  const router = useRouter()

  return (
    <Theme inverse>
      <Circle
        pos="absolute"
        b={5}
        bg="$color1"
        shac="$shadowColor"
        shar={10}
        shof={{
          height: -5,
          width: 0,
        }}
        w={size + 34}
        h={size + 34}
      />
      <LinearGradient
        onPress={() => router.push('/create')}
        colors={['$teal7', '$teal8']}
        start={[1, 1]}
        end={[0.8, 0]}
        w={size + 34}
        h={size + 34}
        br="$10"
        pos="absolute"
        b={5}
        pressStyle={{
          rotate: '20deg',
        }}
      />
      <YStack
        pos="absolute"
        b={5}
        jc="center"
        ai="center"
        animation="quick"
        pe="none"
        h={size + 34}
      >
        <Plus col="$teal12" size={size + 20} />
      </YStack>
    </Theme>
  )
}
