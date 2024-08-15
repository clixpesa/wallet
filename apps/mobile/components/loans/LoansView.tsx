import { ArrowRight, Plus, MoreHorizontal, Bitcoin, Clock4 } from '@tamagui/lucide-icons'
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
  View,
  Avatar,
  Text,
} from 'ui'

import { HarakaLogo } from '@/components/haraka/HarakaLogo'

const isPendingApproval = true
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
        <YStack gap="$4" pb="$10">
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

      <XStack padding="$4" alignItems="center" justifyContent="space-between">
        <XStack gap="$3">
          <Avatar circular size="$4">
            <HarakaLogo />
          </Avatar>
          <YStack gap="$2.5">
            <SizableText size="$4" y={2}>
              Haraka
            </SizableText>
            <SizableText color="$color9" size="$2" y={-2}>
              Institution
            </SizableText>
          </YStack>
        </XStack>

        <YStack gap="$2" alignItems="center">
          <Text color="$color12" fontSize="$5" fontWeight="700">
            10,000 cKES
          </Text>
          <View
            backgroundColor="$color2"
            borderRadius={100}
            paddingHorizontal="$2"
            paddingVertical={6}
            paddingRight={10}
            flexDirection="row"
            marginLeft="auto"
            justifyContent="center"
            alignItems="center"
            gap="$1.5"
            theme={isPendingApproval ? 'orange' : 'teal'}
          >
            <Theme name="alt2">
              <Clock4 size={14} />
              <SizableText size="$2">
                {isPendingApproval ? 'Pending approval' : 'Due in 30 days'}
              </SizableText>
            </Theme>
          </View>
        </YStack>
      </XStack>
      <View px="$4" flexDirection="row" theme="alt1" gap="$2">
        {isPendingApproval ? (
          <>
            <SizableText>7.5% interest</SizableText>
            <SizableText>1 month</SizableText>
          </>
        ) : (
          <ActionButton
            w="100%"
            buttonText="Repay"
            action={() => console.log('Navigate to withdraw screen')}
          />
        )}
      </View>
    </YStack>
  )
}

const LoanTransactionsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between">
        <SizableText fow="400">Transactions</SizableText>
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
