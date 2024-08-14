import { ArrowRight, Bell, Plus, MoreHorizontal, Bitcoin } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import {
  Button,
  SizableText,
  ScrollView,
  Theme,
  XStack,
  YStack,
  H2,
  H6,
  ActionButton,
  Card,
  Transactions,
  EventCard,
} from 'ui'

const eventDummyData = [
  {
    id: 1,
    name: 'Event 1',
    description: 'Lorem ipsum dolor sit, amet.',
    start_time: new Date('2023-05-01T00:00:00.000Z'),
    end_time: new Date('2023-05-01T00:00:00.000Z'),
    status: 'Upcoming',
  },
  {
    id: 2,
    name: 'Event 2',
    description: 'Lorem ipsum dolor sit, amet.',
    start_time: new Date('2023-05-01T00:00:00.000Z'),
    end_time: new Date('2023-05-01T00:00:00.000Z'),
    status: 'Upcoming',
  },
]

export const transactionDummyData = [
  {
    id: '0',
    title: 'Loan hase been funded',
    credited: false,
    amount: '100.00',
    token: 'KES',
    date: '20 Mar 2020, 11:59',
  },
  {
    id: '1',
    title: 'Money added via M-Pesa',
    type: 'deposit',
    credited: true,
    token: 'KES',
    amount: '130.0',
    date: '20 Mar 2020, 11:59',
  },
]

export function LoansView() {
  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={3} fb={0}>
        <YStack>
          <AccountBalanceSection />
          <LoanOverviewSection />
          <LoanTransactionsSection />
        </YStack>
      </ScrollView>
    </XStack>
  )
}

const AccountBalanceSection = () => {
  return (
    <Card br="$0" bg="transparent" miw={200} $gtMd={{ miw: 220, f: 1, fb: 0 }}>
      <Card.Header f={1}>
        <H6 size="$4" fow="$1" theme="alt2">
          Total Balance (KES)
        </H6>
        <H2 mt="$2">Ksh 23,300.89</H2>
        <SizableText mt="$2">≈ 200.70 cUSD</SizableText>
      </Card.Header>
      <Card.Footer padded jc="space-between">
        <ActionButton
          buttonText="Borrow"
          icon={Plus}
          action={() => console.log('Navigate to add screen')}
        />
        <ActionButton
          buttonText="Repay"
          icon={ArrowRight}
          action={() => console.log('Navigate to withdraw screen')}
        />
        <ActionButton icon={MoreHorizontal} action={() => console.log('Navigate to Sendscreen')} />
      </Card.Footer>
    </Card>
  )
}

const LoanOverviewSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between">
        <SizableText fow="400">Loans</SizableText>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>

      <EventCard
        key={eventDummyData[0].id}
        title={eventDummyData[0].name}
        description={eventDummyData[0].description}
        action={{
          text: 'Show Event',
          props: {
            // href: `/event/${eventDummyData[0].id}`,
            // accessibilityRole: 'link',
            // onPress: () => undefined,
          },
        }}
        tags={[
          { text: eventDummyData[0].status, theme: 'green_alt2' },
          {
            text: `${new Date(eventDummyData[0].end_time).toLocaleDateString()} Remaining`,
            theme: 'orange',
          },
        ]}
      />
    </YStack>
  )
}

const LoanTransactionsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between">
        <SizableText fow="400">Loans</SizableText>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>

      <Transactions>
        <Transactions.Items>
          <Transactions.Group $gtSm={{ space: '$2' }}>
            <Transactions.Item icon={Bitcoin} accentTheme="teal" transactionId="1">
              Loan has been Funded
            </Transactions.Item>
          </Transactions.Group>
        </Transactions.Items>
      </Transactions>
    </YStack>
  )
}
