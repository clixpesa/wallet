import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'ui'

export default function Modal() {
  // const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{ flex: 1, minWidth: '100%', backgroundColor: '$red1' }}
      edges={['left', 'right', 'top']}
    >
      <Text>You found the Modal</Text>
    </SafeAreaView>
  )
}
