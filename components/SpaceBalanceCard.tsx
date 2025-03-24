import { PlusCircle } from '@tamagui/lucide-icons'
import { type CardProps, Card, H6, H4, Button, XStack, Theme } from 'tamagui'

export type SpaceBalanceCardTypes = {
  title: string
  value: string
  badgeText?: string
  onPress?: () => void
} & CardProps

export const SpaceBalanceCard = ({
  title,
  value,
  badgeText,
  onPress,
  ...props
}: SpaceBalanceCardTypes) => {
  return (
    <Card borderRadius="$8" bg="$color1" minW="100%" {...props}>
      <Card.Header>
        <H4 fontWeight="700">{value}</H4>
        <H6 size="$4" fontWeight="$2" theme="alt2">
          {title}
        </H6>
        <XStack mt="$4">
          {!!badgeText && (
            <Theme name="teal_alt1">
              <Button onPress={onPress} icon={PlusCircle} rounded="$8" scaleIcon={1.5}>
                {badgeText}
              </Button>
            </Theme>
          )}
        </XStack>
      </Card.Header>
    </Card>
  )
}
