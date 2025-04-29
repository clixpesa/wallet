import type { IconProps } from '@tamagui/helpers-icon'
import { UserRound, UsersRound, ChevronRight } from '@tamagui/lucide-icons'
import { Avatar, Label, Text, YStack, YGroup, View, styled, H2, SizableText } from 'tamagui'
import { useRouter } from 'expo-router'

export default function CreateSpace() {
  return (
    <YStack bg="$background" minH="100%" gap="$2" flex={1}>
      <View mb="$6" mx="$4">
        <Title>Spaces</Title>
        <SizableText fontFamily="$subHeading" theme="alt1" size="$1">
          Get started with spaces, save personally or as a group and reach your goals
        </SizableText>
      </View>
      <GroupedSpaces />
    </YStack>
  )
}

const Title = styled(H2, {
  size: '$2',
  my: '$4',
  fontWeight: '500',
})

export const Card = styled(View, {
  cursor: 'pointer',
  width: '100%',
  rounded: '$4',
  p: '$3',
  bg: '$background',
  focusStyle: {
    bg: '$backgroundFocus',
    borderColor: '$borderColorFocus',
  },
  hoverStyle: {
    bg: '$backgroundHover',
    borderColor: '$borderColorHover',
  },

  pressStyle: {
    bg: '$backgroundPress',
    borderColor: '$borderColorPress',
  },
})

const items = [
  {
    title: 'Create a Personal Space',
    description: 'Put money aside with available currency',
    id: 'gr-personal',
    icon: UserRound,
  },
  {
    title: 'Create a Group Space',
    description: 'Invite your contacts and achieve your goals together',
    id: 'gr-group',
    icon: UsersRound,
  },
]

type Item = (typeof items)[number]

export function GroupedSpaces() {
  return (
    <View flexDirection="column" justify="center" items="center" minW="100%">
      <YGroup rounded="$6">
        {items.map((item) => (
          <Item item={item} key={item.id} icon={item.icon} />
        ))}
      </YGroup>
    </View>
  )
}

function Item({
  item,
  icon: Icon,
}: {
  icon: React.FC<IconProps>
  item: Item
}) {
  const { description, id, title } = item
  const router = useRouter()

  // Find a waut to use the LINK component from one
  const navigateToCustomize = () => {
    // router.push('/spaces/customize')
  }

  return (
    <YGroup.Item>
      <Card flexDirection="row" items="center" gap="$4" mb={-1} onPress={navigateToCustomize}>
        <Avatar circular size="$5" theme="teal_alt1">
          <Avatar.Fallback backgroundColor="$color2" />
          <Icon size={20} />
        </Avatar>
        <View flex={1} gap="$1">
          <View flexDirection="row" gap="$2">
            <View flexDirection="row" items="center" gap="$2">
              <Label fontWeight="700" lineHeight="$4" htmlFor={id}>
                {title}
              </Label>
            </View>
          </View>
          <View theme="alt1">
            <Text wordWrap="break-word">{description}</Text>
          </View>
        </View>
        <View>
          <ChevronRight color="$color8" size={20} />
        </View>
      </Card>
    </YGroup.Item>
  )
}
