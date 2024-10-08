import { getFontSized } from '@tamagui/get-font-sized'
import { User2 } from '@tamagui/lucide-icons'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { SizeTokens } from 'ui'
import { ChipsWithIcon, Avatar, View, styled, Text, H3, ActionButton } from 'ui'
import { type CardProps, Card, H6, H2, Paragraph, Button, XStack, Theme } from 'ui'
import { router } from 'expo-router'

export default function WalletScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ChipsWithIcon />
      <OverviewCard title="hello" value="4000" />
    </SafeAreaView>
  )
}

export type OverviewCardTypes = {
  title: string
  value: string
} & CardProps

export const OverviewCard = ({ title, value, ...props }: OverviewCardTypes) => {
  return (
    <Card br="$0" backgroundColor="red" miw={180} $gtMd={{ miw: 220, f: 1, fb: 0 }} {...props}>
      <Card.Header>
        <H6 size="$4" fow="$1" theme="alt2">
          {title}
        </H6>
        <H2 mt="$2">{value}</H2>
        <Text>Heyy again SAm</Text>
      </Card.Header>
      <Card.Footer></Card.Footer>
    </Card>
  )
}
