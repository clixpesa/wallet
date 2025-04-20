import { Plus, Send, Minus } from '@tamagui/lucide-icons'
import { Button, XStack, YStack, styled, Card, H2, SizableText } from 'tamagui'

export default function HomeScreen() {
  return (
    <YStack flex={1} bg="$background">
      <Card rounded="$0" bg="transparent" minW={180} px="$4" mt="$4">
        <Card.Header justify="space-between" pl="$0" pt="$1" $platform-native={{ pb: '$0' }}>
          <SizableText size="$3" theme="alt2">
            Your Balance
          </SizableText>
          <H2 mt="$2" size="$2" fontWeight="700">
            KES 500.12
          </H2>
        </Card.Header>
      </Card>
      <XStack gap="$2" m="$4">
        <CustomButton>
          <Button.Icon>
            <Plus size={24} />
          </Button.Icon>
          <Button.Text fontWeight="700">Deposit</Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Minus size={24} />
          </Button.Icon>
          <Button.Text fontWeight="700">Withdraw</Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Send size={24} />
          </Button.Icon>
          <Button.Text fontWeight="700">Send</Button.Text>
        </CustomButton>
      </XStack>
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
