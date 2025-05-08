import { YGroup, YStack, withStaticProperties, styled, SizableText } from 'tamagui'

import { SpaceSettingItem } from './SpaceSettingItem'

const SpaceSettingsFrame = styled(YStack, {
  borderColor: '$color4',
  gap: '$5',
  flex: 1,
})

const SpaceSettingsItems = styled(YStack, {
  gap: '$4',
  mx: '$4',

  '$platform-web': {
    gap: '$4',
    m: '$4',
    mx: '$3',
  },
})

const SpaceSettingsGroup = styled(YGroup, {
  bg: 'transparent',
})

const SpaceSettingsTitle = styled(SizableText, {
  '$platform-web': {
    mx: '$6',
  },
  fontWeight: '600',
  mx: '$-1',
})

export const SpaceSettings = withStaticProperties(SpaceSettingsFrame, {
  Item: SpaceSettingItem,
  Items: SpaceSettingsItems,
  Group: SpaceSettingsGroup,
  Title: SpaceSettingsTitle,
})
