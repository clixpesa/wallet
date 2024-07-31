import { IconProps } from '@tamagui/helpers-icon'
import { SizableText, ThemeName, YStack, YGroup, YStackProps, XStack, styled } from 'tamagui'

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
  const handlePress = () => {
    console.log('Navigate to transaction details screen')
  }
  return (
    <YGroup.Item>
      <TransactionItemFrame isActive={!!isActive} {...props} onPress={handlePress}>
        <YStack theme={accentTheme} bg="$background" p="$1.5" br="$6">
          <Icon o={0.6} size={32} />
        </YStack>

        <YStack f={1} gap="$1">
          <SizableText fow="700">{children}</SizableText>
          <SizableText size="$1" theme="alt2">
            23 Jul 2024, 11:59
          </SizableText>
        </YStack>

        <YStack ai="flex-end" gap="$1">
          <SizableText size="$1" tt="capitalize" fow="bold">
            +50000ks
          </SizableText>
          <SizableText size="$1" tt="capitalize" theme="alt2">
            50000 cKES
          </SizableText>
        </YStack>
      </TransactionItemFrame>
    </YGroup.Item>
  )
}

const TransactionItemFrame = styled(XStack, {
  bg: '$color1',
  ai: 'center',
  jc: 'center',
  p: '$3',
  cur: 'pointer',
  gap: '$2',
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
