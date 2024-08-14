import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'ui'
import { TabBarSwippable } from 'ui/src/components/SwippableTabBar'

import { LoansView } from '@/components/loans/LoansView'
import { OffersView } from '@/components/loans/OffersView'
import { RequestsView } from '@/components/loans/RequestsView'

export default function LoansScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ScrollView>
        <TabBarSwippable InitialView={LoansView} SecondView={OffersView} ThirdView={RequestsView} />
      </ScrollView>
    </SafeAreaView>
  )
}
