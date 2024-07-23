import { YStack, styled, YGroup, withStaticProperties, Separator, H2, XStack } from 'tamagui'

import { TransactionItem } from './TransactionItem'

const TransactionsWrapper = styled(YStack, {
  boc: '$color4',
  gap: '$5',
  f: 1,
})

const TransactionsItems = styled(YStack, {
  '$platform-web': {
    gap: '$4',
    m: '$4',
  },
  gap: '$4',
  m: '$4',
})

const TransactionsGroup = styled(YGroup, {
  '$platform-native': {
    separator: (
      <XStack>
        <Separator boc="$color4" bw="$0.25" />
      </XStack>
    ),
  },
  bg: 'transparent',
})

const TransactionsTitle = styled(H2, {
  '$platform-web': {
    mx: '$6',
  },
  mx: '$4',
  py: '$4',
})

export const Transactions = withStaticProperties(TransactionsWrapper, {
  Item: TransactionItem,
  Items: TransactionsItems,
  Group: TransactionsGroup,
  Title: TransactionsTitle,
})
