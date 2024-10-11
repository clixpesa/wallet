import { faker } from '@faker-js/faker'
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { ChevronDown, PiggyBank, HandCoins, ArrowRight, Users, Plus } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { useCallback, useRef } from 'react'
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
  useTheme,
} from 'ui'
import { type CardProps } from 'ui'

import { ScrollAdapt } from '@/components/home/ScrollAdapt'

export default function WalletScreen() {
  const theme = useTheme()
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const secondaryModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handlePresentSecondaryModalPress = useCallback(() => {
    console.log('helo')
    secondaryModalRef.current?.present()
  }, [])

  // callback for modal changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  // render backdrop
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} opacity={0.5} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  )

  const renderSecondaryBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} opacity={0.8} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  )

  const groupAddress = faker.finance.ethereumAddress()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ScrollView>
        <ChipsWithIcon />
        <OverviewCard
          title="Actual Balance (KES)"
          value="Ksh 23,300"
          groupAddress={groupAddress}
          onPress={handlePresentModalPress}
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
        snapPoints={['40%']}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: theme.color2.val,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.color4.val,
        }}
      >
        <BottomSheetView style={{ padding: 20, gap: 20 }}>
          <YStack gap="$2">
            <View ai="center" gap="$2">
              <YStack bg="$teal10" p="$3" br="$10" theme="teal">
                <Users o={0.8} />
              </YStack>
              <SizableText>Maldives Contributions</SizableText>
              <SizableText size="$4" theme="alt2" numberOfLines={1}>{`${groupAddress.slice(
                0,
                6
              )}...${groupAddress.slice(-4)}`}</SizableText>
            </View>
            <ActionButton
              theme="alt1"
              buttonText="Manage group"
              action={() => console.log('Navigate to Manage Space screen')}
            />
          </YStack>
          <YStack>
            <XStack ai="center" gap="$2" onPress={handlePresentSecondaryModalPress}>
              <YStack theme="alt1" p="$2" br="$10" bw="$0.5" boc="$color8">
                <Plus o={0.9} />
              </YStack>
              <SizableText theme="alt1" fow="bold">
                Add group
              </SizableText>
            </XStack>
          </YStack>
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        ref={secondaryModalRef}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        snapPoints={['30%']}
        backdropComponent={renderSecondaryBackdrop}
      >
        <BottomSheetView style={{ padding: 20 }}>
          <YStack gap="$4">
            <View>
              <View
                // bg="red"
                bg="$color2"
                padding="$4"
                ai="center"
                borderTopLeftRadius="$6"
                borderTopRightRadius="$6"
              >
                <SizableText fow="bold" theme="alt1">
                  Create a new group
                </SizableText>
              </View>
              <Separator />
              <View
                bg="$color2"
                padding="$4"
                ai="center"
                borderBottomLeftRadius="$6"
                borderBottomRightRadius="$6"
              >
                <SizableText theme="alt1" fow="bold">
                  Join a group
                </SizableText>
              </View>
            </View>
            <View padding="$4" ai="center" br="$6" bg="$color2">
              <SizableText fow="bold" theme="alt1">
                Close
              </SizableText>
            </View>
          </YStack>
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
