import { Plus, Send, Minus, ArrowLeftRight } from '@tamagui/lucide-icons'
import { CardProps, Card, H6, H2 } from 'tamagui'

export type OverviewCardTypes = {
  title: string
  balance: string
} & CardProps

export const OverviewCard = ({ title, balance, ...props }: OverviewCardTypes) => {
  return (
    <Card br="$0" bg="transparent" miw={200} $gtMd={{ miw: 220, f: 1, fb: 0 }} {...props}>
      <Card.Header f={1} jc="space-between">
        <H6 size="$4" fow="$1" theme="alt2">
          {title}
        </H6>
        <H2 mt="$2">{balance}</H2>
      </Card.Header>
      <Card.Footer padded gap="$6"></Card.Footer>
    </Card>
  )
}
