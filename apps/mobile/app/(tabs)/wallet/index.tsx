import { getFontSized } from '@tamagui/get-font-sized'
import { User2 } from '@tamagui/lucide-icons'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { SizeTokens, ThemeName } from 'ui'
import { ChipsWithIcon, Avatar, View, styled, Text } from 'ui'

const data = [
  {
    title: 'Blessed Chama Masomo Group',
    date: '8:00 - 8:45 AM (UTC)',
    type: 'Chama (ROSCA)',
    department: 'Marketing',
    participants: '6/8',
    theme: 'teal' as ThemeName,
  },
  {
    title: 'Ondisore Chamma',
    date: '7:00 - 8:00 PM (UTC)',
    type: 'Contribution',
    participants: '12/15',
  },
  {
    title: 'Blessed Chamma',
    date: '7:00 - 8:00 PM (UTC)',
    type: 'Regular',
    participants: '8/10',
  },
]

export default function WalletScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ChipsWithIcon />
      <GroupList
        data={data}
        ListEmptyComponent={<Text>Add or Join Group</Text>}
        renderItem={({ item }) => <GroupCard item={item} />}
      />
    </SafeAreaView>
  )
}

type Group = (typeof data)[0]

const GroupList = styled(FlatList<Group>, {
  flex: 1,

  contentContainerStyle: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
})

const SizableText = styled(Text, {
  name: 'SizableText',
  fontFamily: '$body',

  variants: {
    size: {
      '...fontSize': getFontSized,
    },
  } as const,

  defaultVariants: {
    size: '$true',
  },
})

const CardFrame = styled(View, {
  width: '100%',
  borderRadius: '$6',
  padding: '$3',
  backgroundColor: '$background',
  // borderColor: '$borderColor',
  borderWidth: 1,
  focusStyle: {
    backgroundColor: '$backgroundFocus',
    borderColor: '$borderColorFocus',
  },
  hoverStyle: {
    backgroundColor: '$backgroundHover',
    borderColor: '$borderColorHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
    // borderColor: '$borderColorPress',
    elevationAndroid: 0,
  },
  elevationAndroid: 3,
})

function GroupCard({ item }: { item: (typeof data)[0] }) {
  return (
    <CardFrame flexDirection="column" flexShrink={1} theme="teal" gap="$3" marginBottom="$3">
      <View flexDirection="column" gap="$2">
        <View flexDirection="row" justifyContent="space-between">
          <SizableText>{item.title}</SizableText>
        </View>
        <SizableText color="$color11" size="$3">
          {item.date}
        </SizableText>
      </View>
      <Members />
      <View flexDirection="row" justifyContent="space-between" alignItems="center">
        <SizableText color="$color11" size="$1">
          {item.type}
        </SizableText>
        {item.participants ? (
          <View flexDirection="row" gap="$1" ai="center">
            <User2 size={14} />
            <SizableText color="$color11" size="$2">
              {item.participants}
            </SizableText>
          </View>
        ) : (
          <SizableText
            paddingHorizontal="$2"
            borderRadius={1000}
            borderWidth={1}
            borderColor="$color10"
            size="$1"
            color="$color11"
          >
            Marketing
          </SizableText>
        )}
      </View>
    </CardFrame>
  )
}

const members = [1, 2, 3]

export function Members() {
  return (
    <View
      flexDirection="row"
      borderRadius={1000}
      borderColor="$color1"
      flexShrink={1}
      alignSelf="center"
      marginRight="auto"
      justifyContent="center"
      alignItems="center"
    >
      {members.map((item, index) => (
        <View zIndex={index} marginLeft={index !== 0 ? '$-2' : undefined} key={item}>
          <Member size="$2" imageUrl="https://t.ly/NYy3J" />
        </View>
      ))}
      <SizableText size="$2" fontWeight="200" marginHorizontal="$1" marginRight="$2.5">
        +2
      </SizableText>
    </View>
  )
}

function Member({ size, imageUrl }: { size: SizeTokens; imageUrl?: string }) {
  return (
    <Avatar borderWidth="$1" borderColor="$color1" circular size={size}>
      <Avatar.Image accessibilityLabel="Cam" src={imageUrl} />
      <Avatar.Fallback backgroundColor="$background" />
    </Avatar>
  )
}
