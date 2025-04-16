import { ExternalLink } from '@tamagui/lucide-icons'
import { Anchor, H2, Paragraph, XStack, YStack, Button } from 'tamagui'

export default function HomeScreen() {
  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5">
      <XStack
        items="center"
        justify="center"
        flexWrap="wrap"
        gap="$1.5"
        position="absolute"
        b="$8"
      ></XStack>
    </YStack>
  )
}
