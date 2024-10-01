import { randAvatar, randFullName, randUuid, randPhoneNumber } from '@ngneat/falso'
import { Stack } from 'expo-router'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as Contacts from 'expo-contacts'
import { Avatar, Circle, Separator, Text, View, YGroup } from 'ui'
import type { ColorTokens } from 'ui'

export default function AddContactsScreen() {
  const [personsList, setPersonsList] = useState<PersonList>([])

  useEffect(() => {
    setPersonsList(getPersonList())
  }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const { status } = await Contacts.requestPermissionsAsync()
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
  //       })

  //       if (data.length > 0) {
  //         const contact = data[0]
  //         console.log(contact)
  //       }
  //     }
  //   })()
  // }, [])

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Add contacts',
        }}
      />
      <YGroup width="100%" justifyContent="center" alignItems="center" padded>
        <View gap="$1.5" minWidth="100%">
          {personsList.map((person, i) => (
            <View key={person.id}>
              <Item person={person} />
              {i < personsList.length - 1 && <Separator />}
            </View>
          ))}
        </View>
      </YGroup>
    </SafeAreaView>
  )
}

// Define more descriptive status options
const statusOptions = [
  {
    status: 'Available',
    color: 'green',
  },
  {
    status: 'clixpesa',
    color: 'teal',
  },
  {
    status: 'In a Meeting',
    color: 'orange',
  },
  {
    status: 'On Vacation',
    color: 'pink',
  },
  {
    status: 'Do Not Disturb',
    color: 'red',
  },
  {
    status: 'Working Remotely',
    color: 'purple',
  },
  {
    status: 'Out for Lunch',
    color: 'blue',
  },
  {
    status: 'Away from Desk',
    color: 'gray',
  },
  {
    status: 'On a Call',
    color: 'blue',
  },
  {
    status: 'Taking a Break',
    color: 'yellow',
  },
]

// Function to generate a person with a random descriptive status
const getPersonList = () => {
  const personsList = Array.from({ length: 10 }, () => ({
    id: randUuid(),
    name: randFullName(),
    phoneNumber: randPhoneNumber(),
    //To check if the user is available on the clixpesa wallet
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    image: `${randAvatar()}?id=${randUuid()}`,
  }))
  return personsList
}

type PersonList = ReturnType<typeof getPersonList>

function Item({ person }: { person: PersonList[number] }) {
  return (
    <YGroup.Item>
      <View
        flexDirection="row"
        paddingVertical="$2"
        paddingHorizontal="$2"
        gap="$4"
        backgroundColor="$color1"
        alignItems="center"
      >
        <View>
          <Avatar circular size="$4">
            <Avatar.Image objectFit="cover" src={person.image} />
            <Avatar.Fallback backgroundColor="$background" />
          </Avatar>
          {person.status.status === 'clixpesa' && (
            <Circle
              borderWidth={1}
              borderColor="$borderColor"
              right="3%"
              bottom="3%"
              zIndex={1}
              size={12}
              position="absolute"
              backgroundColor={`$${person.status.color}10` as ColorTokens}
            />
          )}
        </View>
        <View gap="$1.5" flexDirection="column" flexShrink={1} justifyContent="center">
          <Text fow="700">{person.name}</Text>
          <Text fontSize="$2" lineHeight="$2" fontWeight="$2" theme="alt1">
            {person.phoneNumber}
          </Text>
        </View>
      </View>
    </YGroup.Item>
  )
}
