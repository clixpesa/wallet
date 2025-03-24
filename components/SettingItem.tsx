import type { IconProps } from '@tamagui/helpers-icon'
import {
  SizableText,
  type ThemeName,
  XStack,
  YGroup,
  YStack,
  type YStackProps,
  styled,
} from 'tamagui'

export type SettingItemProps = YStackProps & {
  icon: React.FC<IconProps>
  rightLabel?: string
  accentTheme?: ThemeName
  isActive?: boolean
}

export const SettingItem = ({
  icon: Icon,
  children,
  rightLabel,
  isActive,
  accentTheme,
  ...props
}: SettingItemProps) => {
  return (
    <YGroup.Item {...props}>
      <SettingItemFrame isActive={!!isActive} {...props}>
        <YStack theme={accentTheme} bg="$background" p="$1.5" rounded="$3">
          <Icon opacity={0.6} size={16} />
        </YStack>

        <SizableText size="$3" flex={1}>
          {children}
        </SizableText>

        {!!rightLabel && (
          <XStack rounded="$10" bg="$backgroundPress" px="$3" py="$1.5">
            <SizableText size="$2" textTransform="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}
      </SettingItemFrame>
    </YGroup.Item>
  )
}

const SettingItemFrame = styled(XStack, {
  items: 'center',
  justify: 'center',
  px: '$3',
  py: '$4',
  cursor: 'pointer',
  gap: '$3',
  rounded: '$10',

  variants: {
    isActive: {
      true: {
        bg: '$backgroundFocus',

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
