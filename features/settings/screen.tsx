// import * as Application from 'expo-application'
import { Link } from 'expo-router'
import { Paragraph, ScrollView, Separator, YStack, isWeb, useMedia } from 'tamagui'
import { Book, Cog, Info, Lock, LogOut, Mail, Moon, Twitter } from '@tamagui/lucide-icons'

import { useAuth } from 'provider/auth'

import { redirect } from 'utils/redirect'
import { usePathname } from 'utils/usePathname'
import { Settings } from 'components'

export const SettingsScreen = () => {
  const media = useMedia()
  const pathname = usePathname()

  return (
    <YStack flex={1}>
      <ScrollView>
        <Settings>
          <Settings.Items>
            <Settings.Group>
              <Link href={media.sm ? '/settings/general' : '/settings'} asChild>
                <Settings.Item
                  icon={Cog}
                  isActive={pathname === 'settings/general'}
                  accentTheme="green"
                >
                  General
                </Settings.Item>
              </Link>
              <Link href="/settings/change-password" asChild>
                <Settings.Item
                  icon={Lock}
                  isActive={pathname === '/settings/change-password'}
                  accentTheme="green"
                >
                  Change Password
                </Settings.Item>
              </Link>
            </Settings.Group>

            <Settings.Group>
              <Settings.Item icon={Book} accentTheme="teal">
                Privacy Policy
              </Settings.Item>
              <Settings.Item icon={Book} accentTheme="alt2">
                Terms Of Service
              </Settings.Item>

              <Settings.Item icon={Info} accentTheme="alt1">
                About
              </Settings.Item>
            </Settings.Group>

            <Settings.Group>
              <Settings.Item
                icon={Twitter}
                onPress={() => redirect('https://twitter.com/tamagui_js')}
                accentTheme="alt2"
              >
                Our Twitter
              </Settings.Item>
            </Settings.Group>
            <Settings.Group>
              {/* <SettingsThemeAction /> */}
              <SettingsItemLogoutAction />
            </Settings.Group>
          </Settings.Items>
        </Settings>
      </ScrollView>

      {/* <Paragraph py="$2" text="center" theme="alt2">
        v{Application.nativeApplicationVersion} ({Application.nativeBuildVersion})
      </Paragraph> */}
    </YStack>
  )
}

// const SettingsThemeAction = () => {
//   const { toggle, current } = useThemeSetting()

//   return (
//     <Settings.Item icon={Moon} accentTheme="teal" onPress={toggle} rightLabel={current}>
//       Theme
//     </Settings.Item>
//   )
// }

const SettingsItemLogoutAction = () => {
  const { signOut } = useAuth()

  return (
    <Settings.Item icon={LogOut} accentTheme="red" onPress={() => signOut()}>
      Log Out
    </Settings.Item>
  )
}
