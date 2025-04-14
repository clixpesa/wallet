import { Anchor, H2, Paragraph, XStack, YStack, Button } from 'tamagui'

export default function Profile() {
  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
      <Button onPress={() => console.log('Sign Out')}>Sign Out</Button>
    </YStack>
  )
}
