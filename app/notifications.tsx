import { View, SizableText, YStack, Text, H6 } from 'tamagui'
import { Bell } from '@tamagui/lucide-icons'

export default function Notifications() {
  return (
    <YStack flex={1} px="$4" justify="center">
      <YStack items="center" gap="$4">
        <View theme="teal" bg="$background" p="$4" rounded="$8">
          <Bell opacity={0.8} size={32} />
        </View>
        <YStack items="center" gap="$2">
          <H6 size="$1" fontWeight="700">
            No notifications yet
          </H6>
          <SizableText size="$2" text="center" theme="alt1">
            You're all caught up! We'll notify you when there's something new
          </SizableText>
        </YStack>
      </YStack>
    </YStack>
  )
}
