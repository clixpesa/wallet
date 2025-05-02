import { YGroup, YStack, withStaticProperties, styled, SizableText } from 'tamagui'

import { SpaceItem } from './SpaceItem'

const SpacesFrame = styled(YStack, {
  gap: '$4',
})

const SpacesItems = styled(YStack, {
  gap: '$4',
})

const SpacesGroup = styled(YGroup, {
  bg: 'transparent',
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
