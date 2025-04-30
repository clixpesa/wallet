import type { IconProps } from '@tamagui/helpers-icon'
import {
  SizableText,
  type ThemeName,
  YStack,
  YGroup,
  type YStackProps,
  XStack,
  styled,
} from 'tamagui'

export type TransactionItemProps = YStackProps & {
  icon: React.FC<IconProps>
  rightLabel?: string
  accentTheme?: ThemeName
  isActive?: boolean
  transactionId: string
}

export const TransactionItem = ({
  icon: Icon,
  children,
  rightLabel,
  isActive,
  accentTheme,
  transactionId,
  ...props
}: TransactionItemProps) => {
  return (
    <TransactionItemFrame isActive={!!isActive} {...props}>
      <YStack theme={accentTheme} bg="$color2" p="$2" rounded="$12">
        <Icon opacity={0.8} size={32} />
      </YStack>

      <YStack flex={1} gap="$1.5">
        <SizableText fontWeight="500">{children}</SizableText>
        <SizableText size="$2" theme="alt2">
          20 April 2025, 11:59
        </SizableText>
      </YStack>

      <YStack items="flex-end" gap="$1.5">
        <SizableText fontWeight="500" textTransform="capitalize" color="$teal9">
          +50000ks
        </SizableText>
        <SizableText size="$2" textTransform="capitalize" theme="alt2">
          50000 cKES
        </SizableText>
      </YStack>
    </TransactionItemFrame>
  )
}

const TransactionItemFrame = styled(XStack, {
  // bg: '$color8',
  items: 'center',
  justify: 'center',
  px: '$4',
  py: '$3',
  gap: '$3',

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
