import { faker } from '@faker-js/faker'
import {
  Users,
  Copy,
  BellDot,
  Globe,
  HandCoins,
  ChevronRight,
  UserPen,
} from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XStack, YStack, SizableText, View, Settings, CAvatar, Theme, ScrollView } from 'ui'
import { SwitchCustomIcons } from 'ui/src/components/forms/switches/SwitchCustomIcons'

const data = [
  {
    name: 'Jack nick',
    phoneNumber: '+25470639600',
    min: '30m',
    id: '2m',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Alexa perry',
    phoneNumber: '+254712345678',
    min: '15m',
    role: 'admin',
    id: '3',
    avatar: '/avatars/300 (3).jpeg',
  },
  {
    name: 'Eva sam',
    phoneNumber: '+254787654321',
    min: '45m',
    id: '4',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
]

export default function ManageGroupScreen() {
  const address = faker.finance.ethereumAddress()
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ScrollView>
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
                  icon={UserPen}
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
                  onPress={() => router.push('/haraka/')}
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

          <YStack margin="$4" bg="red">
            <View flexDirection="column" gap="$4">
              <SizableText theme="alt2" fontWeight="700">
                Members
              </SizableText>
              <View flexDirection="column" gap="$4" bg="$background" br="$4">
                {data.map((member) => (
                  <Member member={member} key={member.id} />
                ))}
              </View>
            </View>
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}

function Member({ member }: { member: (typeof data)[0] }) {
  const { name, avatar, phoneNumber, role } = member
  return (
    <View flexDirection="row" alignItems="center" gap="$3">
      <View>
        <CAvatar>
          <CAvatar.Content>
            <CAvatar.Image accessibilityLabel="Cam" src={avatar} />
            <CAvatar.Fallback backgroundColor="$background" />
          </CAvatar.Content>
        </CAvatar>
      </View>
      <View flexDirection="column" gap="$1.5">
        <SizableText size="$4">{name}</SizableText>
        <SizableText color="$color9" size="$2">
          {phoneNumber}
        </SizableText>
      </View>
      <View
        backgroundColor="$color5"
        borderRadius={100}
        paddingHorizontal="$2"
        paddingVertical={6}
        paddingRight={10}
        flexDirection="row"
        marginLeft="auto"
        justifyContent="center"
        alignItems="center"
        gap="$1.5"
        theme={role === 'admin' ? 'teal' : null}
      >
        <Theme name="alt2">
          {role === 'admin' && <SizableText size="$1">Group Admin</SizableText>}
        </Theme>
      </View>
    </View>
  )
}
