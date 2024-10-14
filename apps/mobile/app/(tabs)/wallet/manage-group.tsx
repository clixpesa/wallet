import { faker } from '@faker-js/faker'
import { Users, Copy, BellDot, Globe, HandCoins, ChevronRight } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XStack, YStack, SizableText, View, Settings, Text } from 'ui'
import { SwitchCustomIcons } from 'ui/src/components/forms/switches/SwitchCustomIcons'

export default function ManageGroupScreen() {
  const address = faker.finance.ethereumAddress()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <YStack f={1}>
        <XStack ai="center" jc="space-between" p="$4">
          <XStack ai="center" gap="$3">
            <View bg="$teal10" p="$4" br="$10" theme="teal">
              <Users o={0.8} />
            </View>
            <YStack gap="$2">
              <SizableText>Maldives Contributions</SizableText>
              <SizableText size="$4" theme="alt2" numberOfLines={1}>{`${address.slice(
                0,
                6
              )}...${address.slice(-4)}`}</SizableText>
            </YStack>
          </XStack>
          <View theme="alt2">
            <Copy o={0.8} />
          </View>
        </XStack>

        <Settings mt="$4">
          <Settings.Items>
            <Settings.Title>Group preferences</Settings.Title>
            <Settings.Group $gtSm={{ space: '$2' }}>
              <Settings.Item
                icon={BellDot}
                onPress={() => console.log('add switch component')}
                accentTheme="teal"
                rightComponent={<SwitchCustomIcons size="$3" />}
              >
                Notifications
              </Settings.Item>

              <Settings.Item
                icon={HandCoins}
                // isActive={pathname === 'settings/general'}
                onPress={() => router.push('/settings/recovery-phrase')}
                accentTheme="teal"
                rightIcon={ChevronRight}
              >
                Change Next Pot Receiver
              </Settings.Item>
            </Settings.Group>

            <Settings.Title>Connections</Settings.Title>
            <Settings.Group $gtSm={{ space: '$2' }}>
              <Settings.Item
                icon={HandCoins}
                onPress={() => router.push('/settings/general')}
                accentTheme="orange"
                rightIcon={ChevronRight}
              >
                Add to Haraka Pool
              </Settings.Item>
              <Settings.Item
                icon={Globe}
                onPress={() => router.push('/settings/recovery-phrase')}
                accentTheme="teal"
                rightIcon={ChevronRight}
              >
                Manage connections
              </Settings.Item>
            </Settings.Group>
          </Settings.Items>
        </Settings>

        <YStack>
          <Text>Members</Text>
        </YStack>
      </YStack>
    </SafeAreaView>
  )
}
