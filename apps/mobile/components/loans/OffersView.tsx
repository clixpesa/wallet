import { Star } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import {
  SizableText,
  Theme,
  ScrollView,
  XStack,
  YStack,
  ActionButton,
  View,
  Avatar,
  Text,
  Card,
} from 'ui'

import { HarakaLogo } from '@/components/haraka/HarakaLogo'

export function OffersView() {
  return (
    <XStack maw={1480} als="center" f={1}>
      <ScrollView f={3} fb={0}>
        <YStack gap="$4" pt="$8">
          <LoanOverviewSection />
        </YStack>
      </ScrollView>
    </XStack>
  )
}

const LoanOverviewSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <SizableText fow="400">Recommended</SizableText>
      </XStack>

      <Card bordered>
        <Card.Header fd="row" jc="space-between">
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

          <YStack gap="$2" ai="center">
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
              theme="teal"
            >
              <Theme name="alt2">
                <Star size={14} />
                {/* SizableText does not pick the theme inside Tamagui Card compnent */}
                <Text fontSize="$2">Quick approval</Text>
              </Theme>
            </View>
            <Text fontSize="$5" fontWeight="700">
              10,000 cKES
            </Text>
          </YStack>
        </Card.Header>
        <Card.Footer ai="flex-end" padded>
          <XStack flex={1} theme="alt1">
            <View gap="$2">
              <Text>15% interest</Text>
              <Text>Duration: 2 - 6 weeks</Text>
              <Text>Limit: 10,000 - 30,300 cKES</Text>
            </View>
          </XStack>
          <ActionButton buttonText="Borrow" action={() => router.push('/loans/get-loan')} />
        </Card.Footer>
      </Card>
    </YStack>
  )
}
