import { YStack, Button, View, SizableText } from 'tamagui'
import { Link, useRouter } from 'expo-router'
import { SpaceBalanceCard } from 'components/SpaceBalanceCard'
import { Spaces as SpacesList } from 'components'
import { PiggyBank } from '@tamagui/lucide-icons'

export default function Spaces() {
  const router = useRouter()

  return (
    <YStack flex={1}>
      {/* <YStack mt="$4" gap="$8"> */}
      <SpaceBalanceCard
        title="Total balance"
        value="KES 0.00"
        badgeText="Create space"
        onPress={() => router.navigate('/spaces/create')}
      />
      {/* </YStack> */}

      {/* <SizableText size="$2" theme="alt1" text="center">
        Your spaces will appear here
      </SizableText> */}

      <SpacesList mt="$8">
        <SpacesList.Title>Spaces</SpacesList.Title>
        <SpacesList.Items>
          <SpacesList.Group>
            <SpacesList.Item rightLabel="Kshs 6899.00">New Dog</SpacesList.Item>
            <SpacesList.Item rightLabel="Kshs 00.00">Maldives Holiday</SpacesList.Item>
            <SpacesList.Item rightLabel="Kshs 5500.00">New MacBook Pro</SpacesList.Item>
            <SpacesList.Item rightLabel="Kshs 200.00">New Phone</SpacesList.Item>
          </SpacesList.Group>
        </SpacesList.Items>
      </SpacesList>
    </YStack>
  )
}
