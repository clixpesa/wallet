import { ArrowRight, Smartphone, Receipt, Coins, ScrollText } from '@tamagui/lucide-icons'
import { Platform } from 'react-native'
import { Button, SizableText, NuggetCard, Theme, XStack, YStack, validToken } from 'ui'

import { ScrollAdapt } from './ScrollAdapt'

const halfMinusSpace = validToken(
  Platform.select({
    native: '53%',
  })
)

const quarterMinusSpace = validToken(
  Platform.select({
    native: '21%',
  })
)

export const NuggetsSection = () => {
  return (
    <YStack>
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <SizableText fow="400">Nuggets</SizableText>
        <Theme name="alt2">
          <Button size="$2" chromeless iconAfter={ArrowRight}>
            See all
          </Button>
        </Theme>
      </XStack>

      <ScrollAdapt>
        <XStack px="$4" fw="wrap" f={1} gap="$3" mb="$4">
          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Smartphone}
            title="Top up airtime"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Coins}
            title="Split the bill"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={ScrollText}
            title="Pay bills"
          />

          <NuggetCard
            w={120}
            $gtMd={{
              w: halfMinusSpace,
            }}
            $gtLg={{
              w: quarterMinusSpace,
            }}
            icon={Receipt}
            title="Manage subscriptions"
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}
