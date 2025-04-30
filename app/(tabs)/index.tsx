import { Plus, Send, Minus, User2 } from '@tamagui/lucide-icons'
import { Button, XStack, YStack, styled, Card, H2, H4, Paragraph, SizableText, View } from 'tamagui'

import { Transactions } from 'components/Transactions'
import { Banner } from 'components/Banner'

export default function HomeScreen() {
  return (
    <YStack flex={1} bg="$background">
      <Card rounded="$0" bg="transparent" minW={180} px="$4" mt="$4">
        <Card.Header justify="space-between" pl="$0" pt="$1" $platform-native={{ pb: '$0' }}>
          <SizableText size="$3" theme="alt2">
            Total Balance
          </SizableText>
          <H2 mt="$2" size="$2" fontWeight="700">
            KES 6000
          </H2>
        </Card.Header>
      </Card>
      <XStack gap="$2" m="$4">
        <CustomButton>
          <Button.Icon>
            <Plus size={24} />
          </Button.Icon>
          <Button.Text fontWeight="600">Deposit</Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Minus size={24} />
          </Button.Icon>
          <Button.Text fontWeight="600">Withdraw</Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Send size={24} />
          </Button.Icon>
          <Button.Text fontWeight="600">Send</Button.Text>
        </CustomButton>
      </XStack>

      <View m="$4">
        <Banner>
          <H4 fontWeight="600" fontSize={16}>
            Invite friends and earn $$$
          </H4>
          <Paragraph size="$2" mt="$2" theme="alt1">
            Refer Clixpesa to your friends and earn 500cKES as a reward on their first sign up.
          </Paragraph>
        </Banner>
      </View>

      <Transactions>
        <Transactions.Title>Activity</Transactions.Title>
        <Transactions.Items>
          <Transactions.Group>
            <Transactions.Item icon={User2} accentTheme="teal" transactionId="1">
              Bought BTC with cKES
            </Transactions.Item>
            <Transactions.Item icon={User2} accentTheme="teal" transactionId="1">
              Received cKES
            </Transactions.Item>
            <Transactions.Item icon={User2} accentTheme="teal" transactionId="1">
              Sent cKES
            </Transactions.Item>
          </Transactions.Group>
        </Transactions.Items>
      </Transactions>
    </YStack>
  )
}

const CustomButton = styled(Button, {
  flexDirection: 'column',
  items: 'flex-start',
  justify: 'center',
  width: 100,
  height: 80,
  px: '$3',
  rounded: '$6',
  bg: '$teal2',
  color: '$teal10',
  theme: 'teal',

  pressStyle: {
    bg: '$backgroundPress',
  },
})
