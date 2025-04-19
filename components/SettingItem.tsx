import type { IconProps } from '@tamagui/helpers-icon'
import { ChevronRight } from '@tamagui/lucide-icons'
import {
  SizableText,
  type ThemeName,
  XStack,
  YGroup,
  YStack,
  type YStackProps,
  styled,
  View,
} from 'tamagui'

export type SettingItemProps = YStackProps & {
  icon: React.FC<IconProps>
  rightLabel?: string
  accentTheme?: ThemeName
  isActive?: boolean
  rightIcon?: React.FC<IconProps>
  rightComponent?: React.ReactNode
}

export const SettingItem = ({
  icon: Icon,
  children,
  rightLabel,
  isActive,
  rightIcon: RIcon,
  rightComponent,
  accentTheme,
  ...props
}: SettingItemProps) => {
  return (
    <YGroup.Item>
      <SettingItemFrame isActive={!!isActive} {...props}>
        <YStack theme={accentTheme}>
          <Icon opacity={0.8} size={24} />
        </YStack>
        <SizableText size="$4" flex={1}>
          {children}
        </SizableText>
        {!!rightLabel && (
          <XStack rounded="$10" bg="$backgroundPress" px="$3" py="$1.5">
            <SizableText size="$1" textTransform="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}

        <View theme="alt2">
          <ChevronRight opacity={0.8} size="$1" />
          {/* <RIcon opacity={0.8} size="$1" /> */}
        </View>

        {!!rightComponent && <View>{rightComponent}</View>}
      </SettingItemFrame>
    </YGroup.Item>
  )
}

const SettingItemFrame = styled(XStack, {
  bg: '$color1',
  items: 'center',
  justify: 'center',
  p: '$3',
  gap: '$6',
  rounded: '$10',

  variants: {
    isActive: {
      true: {
        bg: '$backgroundFocus',
      },
      false: {
        hoverStyle: {
          bg: '$backgroundHover',
        },
        pressStyle: {
          bg: '$backgroundPress',
        },
      },
    },
  } as const,
})
