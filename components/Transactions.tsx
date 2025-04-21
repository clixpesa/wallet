import { YStack, styled, YGroup, withStaticProperties, Separator, H2, XStack } from 'tamagui'

import { TransactionItem } from './TransactionItem'

const TransactionsWrapper = styled(YStack, {
  borderColor: '$color4',
  gap: '$2',
})

const TransactionsItems = styled(YStack, {
  // gap: '$6',
  bg: '$color1',
})

const TransactionsGroup = styled(YGroup, {
  bg: 'transparent',
})

const TransactionsTitle = styled(H2, {
  mx: '$4',
  fontWeight: '700',
  fontSize: 16,
})

export const Transactions = withStaticProperties(TransactionsWrapper, {
  Item: TransactionItem,
  Items: TransactionsItems,
  Group: TransactionsGroup,
  Title: TransactionsTitle,
})
