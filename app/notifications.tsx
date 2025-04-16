import { Paragraph, View, XStack } from 'tamagui'

export default function Notifications() {
  return (
    <View flex={1} items="center" justify="center" px="$4">
      <XStack gap="$2">
        <Paragraph text="center">
          You're all caught up! We'll notify you when there's something new
        </Paragraph>
      </XStack>
    </View>
  )
}
