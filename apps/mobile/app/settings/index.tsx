import { Book, Cog, Info, Lock, LogOut, Mail, Moon, Twitter, BookKey } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme'
import { redirect } from 'app/utils/redirect'
import { usePathname } from 'app/utils/usePathname'
import * as Application from 'expo-application'
import { Stack, useRouter } from 'expo-router'
import { openBrowserAsync } from 'expo-web-browser'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, ScrollView, Settings, YStack } from 'ui'

export default function SettingsScreen() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Settings',
        }}
      />
      <YStack f={1} gap="$2" jc="space-between">
        <ScrollView>
          <Settings mt="$6">
            <Settings.Items>
              <Settings.Group $gtSm={{ space: '$2' }}>
                <Settings.Item
                  icon={Cog}
                  isActive={pathname === 'settings/general'}
                  onPress={() => router.push('/settings/general')}
                  accentTheme="green"
                >
                  General
                </Settings.Item>
                <Settings.Item
                  icon={BookKey}
                  isActive={pathname === 'settings/general'}
                  onPress={() => router.push('/settings/recovery-phrase')}
                  accentTheme="green"
                >
                  Recovery Phrase
                </Settings.Item>

                <Settings.Item
                  icon={Lock}
                  isActive={pathname === '/settings/change-password'}
                  onPress={() => router.push('/settings/change-password')}
                  accentTheme="green"
                >
                  Change PIN
                </Settings.Item>
                <Settings.Item
                  icon={Mail}
                  isActive={pathname === '/settings/change-email'}
                  onPress={() => router.push('/settings/change-email')}
                  accentTheme="green"
                >
                  Change Email
                </Settings.Item>
              </Settings.Group>
              <Settings.Group>
                <Settings.Item
                  icon={Book}
                  isActive={pathname === '/privacy-policy'}
                  onPress={() => openBrowserAsync('https://clixpesa.com/privacy-policy/')}
                  accentTheme="purple"
                >
                  Privacy Policy
                </Settings.Item>
                <Settings.Item
                  icon={Book}
                  isActive={pathname === '/terms-of-service'}
                  onPress={() => openBrowserAsync('https://clixpesa.com/terms-conditions/')}
                  accentTheme="purple"
                >
                  Terms Of Service
                </Settings.Item>
                <Settings.Item
                  icon={Info}
                  onPress={() => openBrowserAsync('https://clixpesa.com')}
                  accentTheme="blue"
                >
                  About
                </Settings.Item>
              </Settings.Group>
              <Settings.Group>
                <Settings.Item
                  icon={Twitter}
                  onPress={() => redirect('https://x.com/clixpesa')}
                  accentTheme="blue"
                >
                  Our Twitter
                </Settings.Item>
              </Settings.Group>
              <Settings.Group>
                <SettingsThemeAction />
                <SettingsItemLogoutAction />
              </Settings.Group>
            </Settings.Items>
          </Settings>
        </ScrollView>

        <Paragraph py="$2" ta="center" theme="alt2">
          Clixpesa v{Application.nativeApplicationVersion} ({Application.nativeBuildVersion})
        </Paragraph>
      </YStack>
    </SafeAreaView>
  )
}

const SettingsThemeAction = () => {
  const { toggle, current } = useThemeSetting()

  return (
    <Settings.Item icon={Moon} accentTheme="blue" onPress={toggle} rightLabel={current}>
      Theme
    </Settings.Item>
  )
}

const SettingsItemLogoutAction = () => {
  // onPress={() => auth.signOut()
  return (
    <Settings.Item icon={LogOut} accentTheme="red">
      Log Out
    </Settings.Item>
  )
}
