import { Wallet2, Share, Cog } from '@tamagui/lucide-icons'
import * as Application from 'expo-application'
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

import { useAuth } from 'provider/auth'

export default function ProfileScreen() {
  const { user } = useAuth()
  const name = user?.displayName
  const phoneNumber = user?.phoneNumber
  const photoURL = user?.photoURL

  return (
    <YStack flex={1}>
      <ScrollView>
        <YStack mx="auto" width="100%" gap="$4" pb="$4">
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
                <SizableText size="$4" fontWeight="600">
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
              <Settings.Group>
                <Settings.Item icon={Wallet2} accentTheme="teal">
                  Wallet Address
                </Settings.Item>
                <Settings.Item icon={Share} accentTheme="teal">
                  Invite friends
                </Settings.Item>

                <Settings.Item
                  icon={Cog}
                  accentTheme="teal"
                  onPress={() => router.push('/settings')}
                >
                  Settings
                </Settings.Item>
              </Settings.Group>
            </Settings.Items>
          </Settings>
        </YStack>
      </ScrollView>
      <Paragraph py="$2" text="center" theme="alt2">
        v{Application.nativeApplicationVersion} ({Application.nativeBuildVersion})
      </Paragraph>
    </YStack>
  )
}
