import { Anchor, Paragraph, View, XStack } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ModalScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <View flex={1} items="center" justify="center" bg="red" px="$4">
        <XStack gap="$2">
          <Paragraph text="center">
            You're all caught up! We'll notify you when there's something new
          </Paragraph>
          <Anchor color="$teal10" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman,
          </Anchor>
          <Anchor
            color="$accent10"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </XStack>
      </View>
    </SafeAreaView>
  )
}
