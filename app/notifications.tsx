import { View, SizableText, YStack, Text } from 'tamagui'
import { Bell } from '@tamagui/lucide-icons'

export default function Notifications() {
  return (
    <YStack flex={1} px="$4" justify="center">
      <YStack items="center" gap="$4">
        <View theme="teal" bg="$background" p="$4" rounded="$8">
          <Bell opacity={0.8} size={32} />
        </View>
        <YStack items="center">
          <Text fontWeight="bold" fontSize={20}>
            No notifications yet
          </Text>
          <SizableText size="$3" text="center" theme="alt1">
            You're all caught up! We'll notify you when there's something new
          </SizableText>
        </YStack>
      </YStack>
    </YStack>
  )
}
