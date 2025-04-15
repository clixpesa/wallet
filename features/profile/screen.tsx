import {
  Avatar,
  Paragraph,
  XStack,
  YStack,
  getTokens,
  Image,
  useWindowDimensions,
} from 'tamagui'
import { Box, Cog, Milestone, ShoppingCart, User, Users } from '@tamagui/lucide-icons'
import { useSafeAreaInsets } from 'utils/useSafeAreaInsets'
// import { useUser } from 'app/utils/useUser'
import { Settings } from 'components'
import { Link } from 'expo-router'

export function ProfileScreen() {
  // const { profile, avatarUrl } = useUser()
  const name = 'sam'
  const insets = useSafeAreaInsets()
  const height = useWindowDimensions().height

  return (
    <YStack
      maxW={600}
      mx="auto"
      width="100%"
      flex={1}
      height={height - insets.bottom - insets.top}
      py="$4"
      pb="$2"
    >
      <XStack gap="$4" mb="$7" mt="auto" items="center" px="$4">
        <Avatar circular size="$3">
          <Image
            // src={avatarUrl}
            alt="your avatar"
            width={getTokens().size['3'].val}
            height={getTokens().size['3'].val}
          />
        </Avatar>
        <Paragraph text="center" ml="$-1.5">
          {name ?? 'No Name'}
        </Paragraph>
      </XStack>
      <Settings>
        <Settings.Items>
          <Settings.Group>
            <Link href="/profile/edit" asChild>
              <Settings.Item icon={User} accentTheme="teal">
                Edit profile
              </Settings.Item>
            </Link>
            <Settings.Item icon={Box} accentTheme="green">
              Wallet Address
            </Settings.Item>
            <Settings.Item icon={Users} accentTheme="orange">
              Invite
            </Settings.Item>
            <Settings.Item icon={Milestone} accentTheme="gray">
              Theme
            </Settings.Item>
            <Settings.Item icon={ShoppingCart} accentTheme="yellow">
              Local Currency
            </Settings.Item>
            <Link href="/settings">
              <Settings.Item icon={Cog}>Settings</Settings.Item>
            </Link>
          </Settings.Group>
        </Settings.Items>
      </Settings>
    </YStack>
  )
}
