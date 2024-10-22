import { faker } from '@faker-js/faker'
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import {
  Users,
  Copy,
  BellDot,
  Globe,
  HandCoins,
  ChevronRight,
  UserPen,
  LogOut,
} from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  XStack,
  YStack,
  SizableText,
  View,
  Text,
  Settings,
  CAvatar,
  Theme,
  ScrollView,
  ActionButton,
  useTheme,
} from 'ui'
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
    // avatar: '/avatars/300 (3).jpeg',
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
  const theme = useTheme()
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  // render backdrop
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} opacity={0.5} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  )

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

          <YStack margin="$4">
            <View flexDirection="column" gap="$4">
              <SizableText theme="alt2" fontWeight="700">
                Members
              </SizableText>
              <View flexDirection="column" gap="$4" bg="$background" br="$4" p="$4">
                {data.map((member) => (
                  <Member member={member} key={member.id} />
                ))}
              </View>
            </View>
          </YStack>
          <ActionButton
            theme="red"
            buttonText="Exit Group"
            action={handlePresentModalPress}
            m="$4"
          />

          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            enablePanDownToClose
            snapPoints={['40%']}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
              backgroundColor: theme.color2.val,
            }}
            handleIndicatorStyle={{
              backgroundColor: theme.color4.val,
            }}
          >
            <BottomSheetView style={{ padding: 20, gap: 20 }}>
              <YStack ai="center" gap="$6">
                <View bg="$red4" p="$4" br="$10" theme="teal">
                  <LogOut o={0.8} col="$red10" strokeWidth={2} />
                </View>
                <View gap="$4">
                  <SizableText textAlign="center">
                    You are leaving <Text color="$red10">Maldives Contributions</Text>
                  </SizableText>
                  <SizableText size="$2" theme="alt1" textAlign="center">
                    Remove your account from this group. You will need an invite to join again.
                  </SizableText>
                </View>
                <XStack gap="$4">
                  <ActionButton
                    variant="outlined"
                    w="50%"
                    buttonText="Cancel"
                    theme="alt2"
                    action={() => bottomSheetModalRef.current?.close()}
                  />
                  <ActionButton
                    theme="red"
                    w="50%"
                    buttonText="Exit"
                    action={() => console.log('Left Group')}
                  />
                </XStack>
              </YStack>
            </BottomSheetView>
          </BottomSheetModal>
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
            {avatar ? (
              <CAvatar.Image objectFit="cover" src={avatar} />
            ) : (
              // Fallback to initials if image is not available
              <Text fontSize="$4" fontWeight="bold" color="$color12">
                {/* {contact.initials} */}
                AA
              </Text>
            )}
          </CAvatar.Content>
        </CAvatar>
      </View>
      <View flexDirection="column" gap="$1.5" f={1}>
        <SizableText size="$4">{name}</SizableText>
        <SizableText color="$color9" size="$2">
          {phoneNumber}
        </SizableText>
      </View>
      {role === 'admin' && (
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
          theme="teal"
        >
          <Theme name="alt2">
            <SizableText size="$1">Group Admin</SizableText>
          </Theme>
        </View>
      )}
    </View>
  )
}
