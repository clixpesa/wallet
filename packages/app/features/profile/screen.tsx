import {
  Avatar,
  Button,
  H1,
  H2,
  Paragraph,
  ScrollView,
  Settings,
  XStack,
  YStack,
  getTokens,
} from 'ui'
import { Cog, HelpCircle, Users } from '@tamagui/lucide-icons'
import { getCurrentUser } from 'app/provider/auth/firebase/init.native'
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'

export function ProfileScreen() {
  // const { profile, avatarUrl } = useUser()
  // const name = profile?.name
  // const about = profile?.about
  const user = getCurrentUser()
  const name = user?.displayName
  const phoneNumber = user?.phoneNumber

  const insets = useSafeAreaInsets()
  return (
    <ScrollView>
      <YStack
        maw={600}
        mx="auto"
        w="100%"
        f={1}
        gap="$4"
        pb={insets.bottom + 20}
        pt={insets.top + 10}
      >
        <YStack gap="$8" jc="flex-start">
          <XStack gap="$2" jc="center" $sm={{ mt: '$8' }}>
            <Avatar circular size="$14" bg="$accentColor">
              <SolitoImage
                // placeholder={Cog}
                // src={avatarUrl}
                alt="your avatar"
                width={getTokens().size['14'].val}
                height={getTokens().size['14'].val}
              />
            </Avatar>
          </XStack>
          <YStack gap="$2">
            {name ? (
              <H2 ta="center">{name}</H2>
            ) : (
              <Link href="/profile/edit?edit_name=1">
                <H2 ta="center">No Name</H2>
              </Link>
            )}

            {!!phoneNumber && (
              <Paragraph theme="alt1" ta="center" size="$6">
                {phoneNumber}
              </Paragraph>
            )}
          </YStack>
        </YStack>
        <Button mx="$4" {...useLink({ href: '/profile/edit' })} themeInverse>
          Edit Profile
        </Button>

        <Settings>
          <Settings.Items>
            <Settings.Group>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Users} accentTheme="orange">
                Refer Your Friends
              </Settings.Item>
              <Settings.Item {...useLink({ href: '/settings' })} icon={Cog} accentTheme="green">
                Settings
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={HelpCircle} accentTheme="blue">
                Help
              </Settings.Item>
            </Settings.Group>
          </Settings.Items>
        </Settings>
      </YStack>
    </ScrollView>
  )
}
