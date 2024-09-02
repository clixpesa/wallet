import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'ui'

export default function WalletScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Text>Wallet Screen</Text>
    </SafeAreaView>
  )
}
