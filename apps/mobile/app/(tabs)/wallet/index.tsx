import { getFontSized } from '@tamagui/get-font-sized'
import { User2 } from '@tamagui/lucide-icons'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { SizeTokens } from 'ui'
import { ChipsWithIcon, Avatar, View, styled, Text, H3, ActionButton } from 'ui'

import { NewGroupSvg } from '@/components/NewGroupSvg'

const data = [
  {
    title: 'Blessed Chama Masomo Group',
    date: '8:00 - 8:45 AM (UTC)',
    type: 'Chama (ROSCA)',
    department: 'Marketing',
    participants: '6/8',
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
  {
    title: 'Blessed Chamma',
    date: '7:00 - 8:00 PM (UTC)',
    type: 'Regular',
    participants: '8/10',
  },
]

function GroupEmpty() {
  return (
    <View gap="$4" alignItems="center" height="100%">
      <NewGroupSvg />
      <H3>Create a new group space</H3>
      <SizableText theme="alt1" textAlign="center">
        Make money moves with your family and friends, you can either create a new group or join a
        group and start saving with family and friends.
      </SizableText>
      <View flex={1} />
      <View w="100%" gap="$4">
        <ActionButton
          buttonText="Create New Group"
          action={() => console.log('create space screen')}
        />
        <ActionButton buttonText="Join a Group" action={() => console.log('join space screen')} />
      </View>
    </View>
  )
}

export default function WalletScreen() {
  const isEmpty = data.length === 0

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      {!isEmpty ? <ChipsWithIcon /> : null}
      <GroupList
        data={data}
        empty={isEmpty}
        ListEmptyComponent={GroupEmpty}
        renderItem={({ item }) => <GroupCard item={item} />}
      />
    </SafeAreaView>
  )
}

type Group = (typeof data)[0]

const GroupList = styled(FlatList<Group>, {
  contentContainerStyle: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  variants: {
    empty: {
      true: {
        contentContainerStyle: {
          flex: 1,
          paddingHorizontal: 18,
          paddingVertical: 18,
        },
      },
      false: {
        contentContainerStyle: {
          paddingHorizontal: 18,
          paddingVertical: 18,
        },
      },
    },
  } as const,
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
