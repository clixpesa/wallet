import type { IconProps } from '@tamagui/helpers-icon'
import type { ColorTokens } from 'tamagui'

import {
  SizableText,
  type ThemeName,
  XStack,
  YGroup,
  YStack,
  type YStackProps,
  styled,
} from 'tamagui'

export type ActionItemProps = YStackProps & {
  icon?: React.FC<IconProps>
  description?: string
  accentTheme?: ThemeName
  isActive?: boolean
  textColor?: ColorTokens | string
}

export const ActionItem = ({
  icon: Icon,
  children,
  description,
  isActive,
  textColor,
  accentTheme,
  ...props
}: ActionItemProps) => {
  return (
    <YGroup.Item>
      <ActionItemFrame isActive={!!isActive} {...props}>
        {Icon && (
          <YStack theme="teal" bg="$teal2" p="$3" rounded="$12">
            <Icon size={24} color="$teal10" />
          </YStack>
        )}
        <YStack gap="$1.5" flex={1}>
          <SizableText fontWeight="500" color={textColor}>
            {children}
          </SizableText>
          {description && (
            <SizableText size="$2" theme="alt2">
              {description}
            </SizableText>
          )}
        </YStack>
      </ActionItemFrame>
    </YGroup.Item>
  )
}

const ActionItemFrame = styled(XStack, {
  bg: '$accent12',
  items: 'center',

  p: '$3',
  gap: '$4',

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
