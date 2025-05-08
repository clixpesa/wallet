import { XStack, YGroup, YStack, withStaticProperties, styled, SizableText } from 'tamagui'

import { ActionItem } from './ActionItem'

const ActionsFrame = styled(YStack, {
  borderColor: '$color4',
  flex: 1,
})

const ActionsItems = styled(YStack, {
  gap: '$4',
  mx: '$4',

  '$platform-web': {
    gap: '$4',
    m: '$4',
    mx: '$3',
  },
})

const ActionsGroup = styled(YGroup, {
  bg: 'transparent',
  // rounded: '$6',

  '$platform-native': {
    separator: (
      <XStack>
        <YStack width={20} bg="$color2" />
        {/* <Separator borderColor="$color4" borderWidth="$0.25" /> */}
      </XStack>
    ),
  },
})

const ActionsTitle = styled(SizableText, {
  '$platform-web': {
    mx: '$6',
  },
  fontWeight: '600',
  mx: '$-1',
})

export const Actions = withStaticProperties(ActionsFrame, {
  Item: ActionItem,
  Items: ActionsItems,
  Group: ActionsGroup,
  Title: ActionsTitle,
})
