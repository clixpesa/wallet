import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus, User, Coins, Wallet2, Bell } from '@tamagui/lucide-icons'
import { Tabs, router } from 'expo-router'
import {
  Circle,
  Theme,
  YStack,
  Button,
  Label,
  Popover,
  XStack,
  type PopoverProps,
  useTheme,
} from 'ui'

import { TabBarButton } from '@/components/TabBarButton'

export default function TabLayout() {
  const { teal10, teal8 } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: teal10.val,
        tabBarInactiveTintColor: teal8.val,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          padding: 6,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 14,
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
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, size }) => <Wallet2 color={color} size={size} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: 'Loans',
          tabBarIcon: ({ color, size }) => <Coins color={color} size={size} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} strokeWidth={2} />,
        }}
      />
    </Tabs>
  )
}

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

// TODO: To Be Added Later
const QuickActionButtonWithLogo = ({ size }: TabBarIconProps) => {
  return (
    <Theme inverse>
      <Circle
        pos="absolute"
        b={5}
        bg="$teal1"
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

export function PopoverMenu({
  Icon,
  Name,
  ...props
}: PopoverProps & { Icon?: any; Name?: string }) {
  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button icon={Icon} />
      </Popover.Trigger>

      <Popover.Sheet modal dismissOnSnapToBottom>
        <Popover.Sheet.Frame padding="$4">
          <Popover.Content />
        </Popover.Sheet.Frame>
        <Popover.Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      </Popover.Sheet>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack gap="$3">
          <XStack gap="$3">
            <Label size="$3">More actions coming soon</Label>
          </XStack>

          <Popover.Close asChild>
            <Button
              size="$6"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
            >
              Hello
            </Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>
    </Popover>
  )
}
