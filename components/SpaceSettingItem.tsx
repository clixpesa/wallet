import type { IconProps } from '@tamagui/helpers-icon'
import { SizableText, XStack, YGroup, YStack, type YStackProps, styled, View, Theme } from 'tamagui'

export type SpaceSettingItemProps = YStackProps & {
  icon: React.FC<IconProps>
  rightLabel?: string
  isActive?: boolean
  rightIcon?: React.FC<IconProps>
}

export const SpaceSettingItem = ({
  icon: Icon,
  children,
  rightLabel,
  isActive,
  rightIcon: RIcon,
  ...props
}: SpaceSettingItemProps) => {
  return (
    <YGroup.Item>
      <SpaceSettingItemFrame isActive={!!isActive} {...props}>
        <SizableText flex={1} fontWeight="500">
          {children}
        </SizableText>
        {!!rightLabel && (
          <Theme name="teal_alt2">
            <XStack px="$3" py="$1.5" items="center" gap="$3">
              <Icon size={20} />
              <SizableText fontWeight="500">{rightLabel}</SizableText>
            </XStack>
          </Theme>
        )}
      </SpaceSettingItemFrame>
    </YGroup.Item>
  )
}

const SpaceSettingItemFrame = styled(XStack, {
  bg: '$accent12',
  items: 'center',
  justify: 'center',
  p: '$3',
  gap: '$6',

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
