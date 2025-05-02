import { XStack, YGroup, YStack, withStaticProperties, styled, SizableText } from 'tamagui'

import { SpaceItem } from './SpaceItem'

const SpacesFrame = styled(YStack, {
  gap: '$4',
})

const SpacesItems = styled(YStack, {
  gap: '$4',

  '$platform-web': {
    gap: '$4',
    m: '$4',
    mx: '$3',
  },
})

const SpacesGroup = styled(YGroup, {
  bg: 'transparent',

  '$platform-native': {
    separator: (
      <XStack>
        <YStack width={24} bg="$color8" />
      </XStack>
    ),
  },
})

const SpacesTitle = styled(SizableText, {
  fontWeight: '600',
  mx: '$4',
  theme: 'alt2',
})

export const Spaces = withStaticProperties(SpacesFrame, {
  Item: SpaceItem,
  Items: SpacesItems,
  Group: SpacesGroup,
  Title: SpacesTitle,
})
