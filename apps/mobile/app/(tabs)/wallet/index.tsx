import { SafeAreaView } from 'react-native-safe-area-context'
import { ChipsWithIcon } from 'ui'

export default function WalletScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ChipsWithIcon />
    </SafeAreaView>
  )
}
