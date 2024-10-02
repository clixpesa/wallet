import { randAvatar, randFullName, randUuid, randPhoneNumber } from '@ngneat/falso'
import { FlashList } from '@shopify/flash-list'
import { X } from '@tamagui/lucide-icons'
import { Stack } from 'expo-router'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as Contacts from 'expo-contacts'
import { CAvatar, Circle, Separator, Text, View, styled, ScrollView } from 'ui'
import type { ColorTokens } from 'ui'

export default function AddContactsScreen() {
  const [contactList, setContactList] = useState<ContactList>([])

  useEffect(() => {
    setContactList(getContactList())
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
      <View>
        <SelectedContact />
      </View>
      <View flex={1} padding="$4">
        <FlashList
          data={contactList}
          renderItem={({ item, index }) => (
            <View gap="$1.5">
              <Item contact={item} />
              {index < contactList.length - 1 && <Separator />}
            </View>
          )}
          estimatedItemSize={200}
        />
      </View>
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
const getContactList = () => {
  const contactList = Array.from({ length: 180 }, () => ({
    id: randUuid(),
    name: randFullName(),
    phoneNumber: randPhoneNumber(),
    //To check if the user is available on the clixpesa wallet
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    image: `${randAvatar()}?id=${randUuid()}`,
  }))
  return contactList
}

type ContactList = ReturnType<typeof getContactList>

function Item({ contact }: { contact: ContactList[number] }) {
  return (
    <ContactItemFrame>
      <View>
        <CAvatar.Content>
          <CAvatar.Image objectFit="cover" src={contact.image} />
          <CAvatar.Fallback backgroundColor="$background" />
        </CAvatar.Content>

        {contact.status.status === 'clixpesa' && (
          <Circle
            borderWidth={1}
            borderColor="$borderColor"
            right="3%"
            bottom="3%"
            zIndex={1}
            size={12}
            position="absolute"
            backgroundColor={`$${contact.status.color}10` as ColorTokens}
          />
        )}
      </View>
      <View gap="$1.5" flexDirection="column" flexShrink={1} justifyContent="center">
        <Text fow="700">{contact.name}</Text>
        <Text fontSize="$2" lineHeight="$2" fontWeight="$2" theme="alt1">
          {contact.phoneNumber}
        </Text>
      </View>
    </ContactItemFrame>
  )
}
const ContactItemFrame = styled(View, {
  flexDirection: 'row',
  paddingVertical: '$2',
  paddingHorizontal: '$2',
  gap: '$4',
  borderRadius: '$4',
  backgroundColor: '$color1',
  alignItems: 'center',
  pressStyle: {
    bg: '$backgroundPress',
  },
})

export function SelectedContact() {
  return (
    <ScrollView horizontal>
      <View flexDirection="row" gap="$4" paddingHorizontal="$4" paddingVertical="$2">
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Icon placement="bottom-right">
            <X color="$color11" />
          </CAvatar.Icon>
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" numberOfLines={1} maxWidth="$6">
            Joseph
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph Nam
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph London
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph London
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph London
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph London
          </Text>
        </CAvatar>
        <CAvatar size="$6" alignItems="center" justifyContent="center">
          <CAvatar.Content id="avatar-joseph">
            <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
            <CAvatar.Fallback backgroundColor="$gray6" />
          </CAvatar.Content>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph London
          </Text>
        </CAvatar>
      </View>
    </ScrollView>
  )
}
