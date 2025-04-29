import { YStack, Button, View } from 'tamagui'
import { Link, useRouter } from 'expo-router'
import { SpaceBalanceCard } from 'components/SpaceBalanceCard'

export default function Spaces() {
  const router = useRouter()

  return (
    <YStack items="center" flex={1}>
      <SpaceBalanceCard
        title="Total balance"
        value="KES 0.00"
        badgeText="Create space"
        onPress={() => router.navigate('/spaces/create')}
      />
    </YStack>
  )
}
