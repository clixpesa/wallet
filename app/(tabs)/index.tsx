import { Plus, Send, Minus } from '@tamagui/lucide-icons'
import { Button, XStack, YStack, styled, View, Card, H6, H2, Paragraph, Theme } from 'tamagui'
import { ScrollAdapt } from 'features/home/components/scroll-adapt'

export default function HomeScreen() {
  return (
    <YStack flex={1} bg="$background">
      <Card rounded="$0" bg="transparent" minW={180} px="$4" mt="$4">
        <Card.Header justify="space-between" pl="$0" pt="$1" $platform-native={{ pb: '$0' }}>
          <H6 size="$4" fontWeight="$1" theme="alt2">
            Your Balance
          </H6>
          <H2 mt="$2" fontWeight="bold">
            Ksh 600.12
          </H2>
        </Card.Header>
      </Card>
      <XStack gap="$2" m="$4">
        <CustomButton>
          <Button.Icon>
            <Plus size={28} />
          </Button.Icon>
          <Button.Text fontSize="$5" fontWeight="bold">
            Deposit
          </Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Minus size={28} />
          </Button.Icon>
          <Button.Text fontSize="$5" fontWeight="bold">
            Withdraw
          </Button.Text>
        </CustomButton>

        <CustomButton>
          <Button.Icon>
            <Send size={28} />
          </Button.Icon>
          <Button.Text fontSize="$5" fontWeight="bold">
            Send
          </Button.Text>
        </CustomButton>
      </XStack>
    </YStack>
  )
}

const CustomButton = styled(Button, {
  flexDirection: 'column',
  items: 'flex-start',
  justify: 'center',
  width: 104,
  height: 90,
  px: '$3.5',
  rounded: '$8',
  bg: '$teal2',
  color: '$teal10',
  theme: 'teal',
  pressStyle: {
    bg: '$backgroundPress',
  },
})
