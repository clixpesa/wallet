import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'ui'

export default function ManageGroupScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Text>Manage Group Screen</Text>
    </SafeAreaView>
  )
}
