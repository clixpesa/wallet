import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus, User, Coins } from '@tamagui/lucide-icons'
import { Stack, Tabs, useRouter } from 'expo-router'
import { Circle, Theme, YStack, Button, Input, Label, Popover, XStack, type PopoverProps } from 'ui'

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
              // navigation.navigate('create')
            },
          })}
          options={{
            title: 'New',
            tabBarIcon: () => <PopoverMenu placement="top" Name="top-popover" />,
          }}
        />
        <Tabs.Screen
          name="loans"
          options={{
            title: 'Loans',
            tabBarIcon: ({ size, color, focused }) => (
              <Coins color={focused ? '$teal10' : '$teal8'} size={size} strokeWidth={2} />
            ),
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
