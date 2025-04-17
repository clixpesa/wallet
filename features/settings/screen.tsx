import {
  LogOut,
  Twitter,
  SunMoon,
  BookKey,
  Banknote,
  BookOpen,
  KeyRound,
  LockKeyhole,
  Fingerprint,
  SquareAsterisk,
  MessageSquareHeart,
  MessageCircleQuestion,
} from '@tamagui/lucide-icons'

import { ScrollView, YStack, Paragraph } from 'tamagui'
import { openBrowserAsync } from 'expo-web-browser'
import * as Application from 'expo-application'
import { Link, router } from 'expo-router'

import { usePathname } from 'utils/usePathname'
import { redirect } from 'utils/redirect'

import { useThemeSetting } from 'provider/theme'
import { useAuth } from 'provider/auth'
import { Settings } from 'components'

export const SettingsScreen = () => {
  const pathname = usePathname()

  return (
    <YStack flex={1}>
      <ScrollView>
        <Settings my="$4">
          <Settings.Items>
            <Settings.Title>Preferences</Settings.Title>
            <Settings.Group>
              <SettingsThemeAction />
              <Settings.Item icon={Banknote} accentTheme="teal">
                Local currency
              </Settings.Item>
            </Settings.Group>

            <Settings.Title>Security</Settings.Title>
            <Settings.Group>
              <Settings.Item icon={Fingerprint} accentTheme="teal">
                Biometrics
              </Settings.Item>

              <Link href="/settings/change-password" asChild>
                <Settings.Item
                  icon={SquareAsterisk}
                  accentTheme="teal"
                  isActive={pathname === '/settings/change-password'}
                >
                  Change Passcode
                </Settings.Item>
              </Link>

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
              <Settings.Item
                icon={LockKeyhole}
                accentTheme="teal"
                onPress={() => openBrowserAsync('https://clixpesa.com/privacy-policy/')}
              >
                Privacy Policy
              </Settings.Item>
              <Settings.Item
                icon={BookOpen}
                accentTheme="teal"
                onPress={() => openBrowserAsync('https://clixpesa.com/terms-conditions/')}
              >
                Terms of Service
              </Settings.Item>
            </Settings.Group>
            <Settings.Group>
              <Settings.Item
                icon={Twitter}
                onPress={() => redirect('https://x.com/clixpesa')}
                accentTheme="alt2"
              >
                Our Twitter
              </Settings.Item>
            </Settings.Group>
            <Settings.Group>
              <SettingsItemLogoutAction />
            </Settings.Group>
          </Settings.Items>
        </Settings>
        <Paragraph py="$2" text="center" theme="alt2">
          v{Application.nativeApplicationVersion} ({Application.nativeBuildVersion})
        </Paragraph>
      </ScrollView>
    </YStack>
  )
}

const SettingsThemeAction = () => {
  const { toggle, current } = useThemeSetting()

  return (
    <Settings.Item
      icon={SunMoon}
      accentTheme="teal"
      onPress={toggle}
      rightLabel={current}
    >
      Theme
    </Settings.Item>
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
