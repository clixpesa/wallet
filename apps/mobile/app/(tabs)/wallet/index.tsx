import { faker } from '@faker-js/faker'
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ChevronDown, PiggyBank, HandCoins, ArrowRight } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { useState, useCallback, useRef } from 'react'
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
  ScrollView,
  ActionButton,
  Theme,
} from 'ui'
import { type CardProps } from 'ui'

import { ScrollAdapt } from '@/components/home/ScrollAdapt'

export default function WalletScreen() {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // state to track modal open/close status
  const [isModalOpen, setIsModalOpen] = useState(false)

  // snap points for the modal
  // const snapPoints = useMemo(() => ['25%', '50%'], [])

  // function to toggle modal visibility
  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      bottomSheetModalRef.current?.dismiss()
    } else {
      bottomSheetModalRef.current?.present()
    }
  }, [isModalOpen])

  // callback for modal changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
    setIsModalOpen(index !== -1) // update modal state based on index
  }, [])

  const groupAddress = faker.finance.ethereumAddress()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ScrollView>
        <ChipsWithIcon />
        <OverviewCard
          title="Actual Balance (KES)"
          value="Ksh 23,300"
          groupAddress={groupAddress}
          onPress={toggleModal}
        />

        <YStack m="$4">
          <XStack px="$4" ai="center" gap="$2" jc="space-between" mb="$4">
            <SizableText fow="400">Balances</SizableText>
          </XStack>

          <Card
            br="$6"
            flexDirection="row"
            alignItems="center"
            gap="$3"
            padded
            borderBottomLeftRadius="$0"
            borderBottomRightRadius="$0"
            pressStyle={{
              bg: '$color4',
            }}
          >
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
          </Card>
          <Separator />
          <Card
            br="$6"
            flexDirection="row"
            alignItems="center"
            gap="$3"
            padded
            borderTopLeftRadius="$0"
            borderTopRightRadius="$0"
            pressStyle={{
              bg: '$color4',
            }}
          >
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
          </Card>
        </YStack>

        <YStack m="$4">
          <XStack px="$4" ai="center" gap="$2" jc="space-between" mb="$4">
            <SizableText fow="400">Save and borrow together</SizableText>
          </XStack>
          <ScrollAdapt>
            <XStack mb="$4" gap="$2" fw="wrap">
              <Card br="$6" w={200} padded>
                <View gap="$4" flex={1} justifyContent="space-between">
                  <SizableText color="$color9" size="$2">
                    Save together in your group with merry go round.
                  </SizableText>
                  <ActionButton buttonText="Create Pot" action={() => console.log('Pot screen')} />
                </View>
              </Card>
              <Card br="$6" w={200} padded>
                <View gap="$4" flex={1} justifyContent="space-between">
                  <SizableText color="$color9" size="$2">
                    Get a quick loan from your group for as low as 8% / month with Haraka Finance.
                  </SizableText>
                  <ActionButton buttonText="Get Loan" action={() => console.log('Pot screen')} />
                </View>
              </Card>
            </XStack>
          </ScrollAdapt>
          <XStack px="$4" ai="center" gap="$2" jc="space-between" mb="$4">
            <SizableText fow="400">Activity</SizableText>
            <Theme name="alt2">
              <Button
                size="$2"
                chromeless
                iconAfter={ArrowRight}
                onPress={() => router.navigate('/notifications')}
              >
                See all
              </Button>
            </Theme>
          </XStack>
        </YStack>
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        enablePanDownToClose
        snapPoints={['50%']}
      >
        <BottomSheetView>
          <Text>Awesome Yay</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  )
}

export type OverviewCardTypes = {
  title: string
  value: string
  groupAddress: string
} & CardProps

export const OverviewCard = ({
  title,
  value,
  groupAddress,
  onPress,
  ...props
}: OverviewCardTypes) => {
  return (
    <View>
      <GroupCardHeader onPress={onPress}>
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
