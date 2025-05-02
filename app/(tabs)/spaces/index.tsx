import { YStack, View, SizableText, H2 } from 'tamagui'
import { useRouter } from 'expo-router'

import { SpaceBalanceCard, Spaces as SpacesList } from 'components'

interface Space {
  id: number
  name: string
  amount: number
}

const spaces: Space[] = [
  { id: 1, name: 'Dream Vacation', amount: 12500.0 },
  { id: 2, name: 'Emergency Fund', amount: 25000.0 },
  { id: 3, name: 'New MacBook Pro', amount: 45000.0 },
  { id: 4, name: 'Home Savings', amount: 150000.0 },
]

export default function Spaces() {
  const router = useRouter()

  return (
    <YStack flex={1} bg="$background">
      <View mt="$4">
        <SpaceBalanceCard
          title="Total balance"
          value="KES 0.00"
          badgeText="Create space"
          onPress={() => router.navigate('/spaces/create')}
        />
      </View>

      {spaces.length === 0 ? (
        <View flex={1} items="center" justify="center">
          <SizableText theme="alt1" text="center">
            Your spaces will appear here.
          </SizableText>
        </View>
      ) : (
        <SpacesList mt="$4">
          <SpacesList.Title>Spaces</SpacesList.Title>
          <SpacesList.Items>
            <SpacesList.Group>
              {spaces.map((space) => (
                <SpacesList.Item
                  key={space.id}
                  rightLabel={`Kshs ${space.amount.toLocaleString()}`}
                >
                  {space.name}
                </SpacesList.Item>
              ))}
            </SpacesList.Group>
          </SpacesList.Items>
        </SpacesList>
      )}
    </YStack>
  )
}
