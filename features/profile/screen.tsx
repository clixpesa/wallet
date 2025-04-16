import {
  LogOut,
  Banknote,
  KeyRound,
  SquareAsterisk,
  Fingerprint,
  BookKey,
  MessageSquareHeart,
  MessageCircleQuestion,
  LockKeyhole,
  BookOpen,
  Wallet2,
  Share,
  SunMoon,
} from '@tamagui/lucide-icons'
import { useAuth } from 'provider/auth'
import { Link, router } from 'expo-router'
import {
  Avatar,
  Button,
  H2,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
  getTokens,
  Image,
  SizableText,
} from 'tamagui'
import { Settings } from 'components'

export default function ProfileScreen() {
  const { user } = useAuth()
  const name = user?.displayName
  const phoneNumber = user?.phoneNumber
  const photoURL = user?.photoURL

  return (
    <ScrollView>
      <YStack maxW={600} mx="auto" width="100%" flex={1} gap="$4" pb="$4">
        <YStack gap="$2" p="$4" items="center">
          <XStack gap="$2" justify="center" $sm={{ mt: '$8' }}>
            <Avatar circular size="$8" bg="$accentColor">
              <Image
                src={photoURL || ''}
                alt="your avatar"
                width={getTokens().size['8'].val}
                height={getTokens().size['8'].val}
              />
            </Avatar>
          </XStack>
          <YStack items="center">
            {name ? (
              <SizableText size="$4" fontWeight="bold">
                {name}
              </SizableText>
            ) : (
              <Link href="/profile/edit?edit_name=1">
                <H2 text="center">No Name</H2>
              </Link>
            )}

            {/* {!!phoneNumber && ( */}
            <Paragraph theme="alt2" text="center" size="$4">
              +254 706 394 600
              {phoneNumber}
            </Paragraph>
            {/* )} */}
          </YStack>
          <Button
            rounded="$10"
            mx="$4"
            onPress={() => router.push('/profile/edit')}
            theme="teal"
            themeInverse
          >
            Edit Profile
          </Button>
        </YStack>

        <Settings>
          <Settings.Items>
            <Settings.Title>General</Settings.Title>
            <Settings.Group>
              <Settings.Item icon={Wallet2} accentTheme="teal">
                Wallet Address
              </Settings.Item>
              <Settings.Item
                onPress={() => router.push('/settings')}
                icon={Share}
                accentTheme="teal"
              >
                Invite
              </Settings.Item>
            </Settings.Group>
            <Settings.Title>Preferences</Settings.Title>
            <Settings.Group>
              <Settings.Item
                onPress={() => router.push('/settings')}
                icon={SunMoon}
                accentTheme="teal"
              >
                Theme
              </Settings.Item>

              <Settings.Item icon={Banknote} accentTheme="teal">
                Local currency
              </Settings.Item>
            </Settings.Group>

            <Settings.Title>Security</Settings.Title>
            <Settings.Group>
              <Settings.Item icon={Fingerprint} accentTheme="teal">
                Biometrics
              </Settings.Item>
              <Settings.Item
                onPress={() => router.push('/settings')}
                icon={SquareAsterisk}
                accentTheme="teal"
              >
                Change Passcode
              </Settings.Item>

              <Settings.Item icon={KeyRound} accentTheme="teal">
                Recovery phrase
              </Settings.Item>

              <Settings.Item icon={BookKey} accentTheme="teal">
                Google Drive backup
              </Settings.Item>
            </Settings.Group>

            <Settings.Title>Support</Settings.Title>

            <Settings.Group>
              <Settings.Item icon={MessageSquareHeart} accentTheme="teal">
                Share feedback
              </Settings.Item>
              <Settings.Item
                onPress={() => router.push('/settings')}
                icon={MessageCircleQuestion}
                accentTheme="teal"
              >
                Help and Support
              </Settings.Item>
            </Settings.Group>

            <Settings.Title>About</Settings.Title>

            <Settings.Group>
              <Settings.Item icon={LockKeyhole} accentTheme="teal">
                Privacy Policy
              </Settings.Item>
              <Settings.Item
                onPress={() => router.push('/settings')}
                icon={BookOpen}
                accentTheme="teal"
              >
                Terms of Service
              </Settings.Item>
            </Settings.Group>
            <Settings.Group>
              <SettingsItemLogoutAction />
            </Settings.Group>
          </Settings.Items>
        </Settings>
      </YStack>
    </ScrollView>
  )
}

const SettingsItemLogoutAction = () => {
  const { signOut } = useAuth()

  return (
    <Settings.Item icon={LogOut} accentTheme="red" onPress={() => signOut()}>
      Log Out
    </Settings.Item>
  )
}
