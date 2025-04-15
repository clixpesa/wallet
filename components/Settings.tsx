import {

  XStack,
  YGroup,
  YStack,
  withStaticProperties,
  styled,
  SizableText,
} from 'tamagui'

import { SettingItem } from './SettingItem'

const SettingsFrame = styled(YStack, {
  borderColor: '$color4',
  gap: '$5',
  flex: 1,
})

const SettingsItems = styled(YStack, {
  gap: '$4',
  mx: '$3',

  '$platform-web': {
    gap: '$4',
    m: '$4',
    mx: '$3',
  },
})

const SettingsGroup = styled(YGroup, {
  bg: 'transparent',

  '$platform-native': {
    separator: (
      <XStack>
        <YStack width={20} bg="$color2" />
        {/* <Separator borderColor="$color4" borderWidth="$0.25" /> */}
      </XStack>
    ),
  },
})

const SettingsTitle = styled(SizableText, {
  '$platform-web': {
    mx: '$6',
  },
  fontWeight: '700',
  mx: '$2',
  theme: 'alt2',
})

export const Settings = withStaticProperties(SettingsFrame, {
  Item: SettingItem,
  Items: SettingsItems,
  Group: SettingsGroup,
  Title: SettingsTitle,
})
