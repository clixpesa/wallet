import { EditProfileScreen } from 'features/profile/edit-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (


      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'left', 'right']}>
        <EditProfileScreen />
      </SafeAreaView>
  
  )
}
