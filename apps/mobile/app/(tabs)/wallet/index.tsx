import { faker } from '@faker-js/faker'
import { ChevronDown, PiggyBank, HandCoins } from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ChipsWithIcon,
  Card,
  H6,
  H2,
  Text,
  SizableText,
  View,
  Button,
  XStack,
  YStack,
  styled,
  Separator,
} from 'ui'
import { type CardProps } from 'ui'

export default function WalletScreen() {
  const groupAddress = faker.finance.ethereumAddress()
  console.log('groupAddress', groupAddress)
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ChipsWithIcon />
      <OverviewCard title="Actual Balance (KES)" value="Ksh 23,300" groupAddress={groupAddress} />

      <YStack mt="$4">
        <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
          <SizableText fow="400">Balances</SizableText>
        </XStack>

        {/* todo: Use Card */}
        <View flexDirection="row" alignItems="center" gap="$3" padding="$4">
          <View>
            <YStack bg="$green7" p="$3" br="$10" theme="green">
              <PiggyBank o={0.8} />
            </YStack>
          </View>
          <View gap="$2">
            <SizableText size="$4">Savings</SizableText>
            <SizableText color="$color9" size="$2">
              Pot and Pockets
            </SizableText>
          </View>
          <View marginLeft="auto" alignItems="flex-end" justifyContent="center" gap="$2">
            <SizableText size="$4" letterSpacing={0.5}>
              10,000.00
            </SizableText>
            <SizableText color="$color9" size="$2" letterSpacing={0.5}>
              1000.00 KES
            </SizableText>
          </View>
        </View>
        <Separator />
        <View flexDirection="row" alignItems="center" gap="$3" padding="$4">
          <View>
            <YStack bg="$orange7" p="$3" br="$10" theme="orange">
              <HandCoins o={0.8} />
            </YStack>
          </View>
          <View gap="$2">
            <SizableText size="$4">Loans</SizableText>
            <SizableText color="$color9" size="$2">
              Money owed
            </SizableText>
          </View>
          <View marginLeft="auto" alignItems="flex-end" justifyContent="center" gap="$2">
            <SizableText size="$4" letterSpacing={0.5}>
              10,000.00
            </SizableText>
            <SizableText color="$color9" size="$2" letterSpacing={0.5}>
              1000.00 KES
            </SizableText>
          </View>
        </View>
      </YStack>
    </SafeAreaView>
  )
}

export type OverviewCardTypes = {
  title: string
  value: string
  groupAddress: string
} & CardProps

export const OverviewCard = ({ title, value, groupAddress, ...props }: OverviewCardTypes) => {
  return (
    <View>
      <GroupCardHeader>
        <View flexDirection="row" alignItems="center" flex={1} gap="$2">
          <SizableText numberOfLines={1} ellipsizeMode="tail" flexShrink={1}>
            Maldives Contributions
          </SizableText>
          <Button circular size="$1">
            <Button.Icon>
              <ChevronDown />
            </Button.Icon>
          </Button>
        </View>
        <SizableText size="$2" theme="alt2" numberOfLines={1}>{`${groupAddress.slice(
          0,
          6
        )}...${groupAddress.slice(-4)}`}</SizableText>
      </GroupCardHeader>
      <Separator marginHorizontal="$4" />
      <Card
        borderBottomLeftRadius="$6"
        borderBottomRightRadius="$6"
        borderTopLeftRadius="$0"
        borderTopRightRadius="$0"
        marginHorizontal="$4"
        padded
        {...props}
      >
        <H6 size="$4" fow="$1" theme="alt2">
          {title}
        </H6>
        <H2 mt="$2">{value}</H2>
        <Text>~200.70 USD</Text>
      </Card>
    </View>
  )
}

const GroupCardHeader = styled(XStack, {
  borderBottomLeftRadius: '$0',
  borderBottomRightRadius: '$0',
  borderTopLeftRadius: '$6',
  borderTopRightRadius: '$6',
  // borderBottomWidth: '$1',
  // borderColor: '$color4',
  marginHorizontal: '$4',
  backgroundColor: '$color2',
  padding: '$4',
  justifyContent: 'space-between',
  alignItems: 'center',

  pressStyle: {
    bg: '$color4',
  },
})
