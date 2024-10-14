import { IconProps } from '@tamagui/helpers-icon'
import { SizableText, ThemeName, XStack, YGroup, YStack, YStackProps, styled, View } from 'tamagui'

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
        <YStack theme={accentTheme} bg="$background" p="$1.5" br="$3">
          <Icon o={0.6} size={16} />
        </YStack>
        <SizableText f={1}>{children}</SizableText>
        {!!rightLabel && (
          <XStack br="$10" bg="$backgroundPress" px="$3" py="$1.5">
            <SizableText size="$1" tt="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}
        {!!RIcon && (
          <View theme="alt2">
            <RIcon o={0.8} size="$1" />
          </View>
        )}
        {!!rightComponent && <View>{rightComponent}</View>}
      </SettingItemFrame>
    </YGroup.Item>
  )
}

const SettingItemFrame = styled(XStack, {
  bg: '$color1',
  ai: 'center',
  jc: 'center',
  p: '$3',
  cur: 'pointer',
  gap: '$3',
  br: '$10',

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
