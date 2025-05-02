import { PlusCircle } from '@tamagui/lucide-icons'
import { type CardProps, Card, H2, SizableText, Button, XStack, Theme } from 'tamagui'

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
    <Card bg="$color1" minW="100%" {...props}>
      <Card.Header>
        <H2 size="$1" fontWeight="700">
          {value}
        </H2>
        <SizableText mt="$2" size="$3" theme="alt2">
          Total Balance
        </SizableText>
        <XStack mt="$4">
          {!!badgeText && (
            <Theme name="teal_alt1">
              <Button onPress={onPress} icon={PlusCircle} rounded="$12" scaleIcon={1.2}>
                <Button.Text size="$3" fontWeight="500">
                  {badgeText}
                </Button.Text>
              </Button>
            </Theme>
          )}
        </XStack>
      </Card.Header>
    </Card>
  )
}
