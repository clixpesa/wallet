import { randAvatar, randUuid } from '@ngneat/falso'
import { FlashList } from '@shopify/flash-list'
import { X, Check } from '@tamagui/lucide-icons'
import * as Contacts from 'expo-contacts'
import { Contact as ExpoContact } from 'expo-contacts'
import { Stack } from 'expo-router'
import { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CAvatar, Separator, Text, View, styled, ScrollView, XStack } from 'ui'

type Contact = {
  id: string
  name: string
  phoneNumber: string
  image: string
}

async function fetchContacts() {
  const { status } = await Contacts.requestPermissionsAsync()

  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    })

    console.log('data', JSON.stringify(data, null, 4))

    // Map the data to the format you want
    const contactList = data.map((contact) => ({
      id: contact.id || randUuid(),
      name: contact.name || 'Unknown Name', // Fall back if name is missing
      phoneNumber: contact.phoneNumbers?.[0]?.number || 'No Number', // First available phone number
      image: contact.image || `${randAvatar()}?id=${contact.id || randUuid()}`, // Using a random avatar for each contact if not available
    }))

    return contactList
  }
  return []
}

export default function AddContactsScreen() {
  const [contactList, setContactList] = useState<Contact[]>([])
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([])

  // useEffect(() => {
  //   setContactList(getContactList())
  // }, [])

  useEffect(() => {
    // Call the fetchContacts function and set the contactList
    const loadContacts = async () => {
      const contacts = await fetchContacts()
      setContactList(contacts)
    }

    loadContacts()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Add contacts',
        }}
      />
      <View>
        <ScrollView horizontal>
          <SelectedContact selectedContacts={selectedContacts} />
        </ScrollView>
      </View>
      <View flex={1} paddingHorizontal="$4" paddingVertical="$2">
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

// Function to generate a person with a random descriptive status
// const getContactList = () => {
//   const contactList = Array.from({ length: 180 }, () => ({
//     id: randUuid(),
//     name: randFullName(),
//     phoneNumber: randPhoneNumber(),
//     //To check if the user is available on the clixpesa wallet
//     // status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
//     image: `${randAvatar()}?id=${randUuid()}`,
//   }))
//   return contactList
// }

// type ContactList = ReturnType<typeof getContactList>

function Item({ contact, isSelected }: { contact: Contact; isSelected: boolean }) {
  return (
    <ContactItemFrame>
      <View>
        <CAvatar>
          <CAvatar.Content>
            <CAvatar.Image objectFit="cover" src={contact.image} />
            <CAvatar.Fallback backgroundColor="$background" />
          </CAvatar.Content>
          {isSelected && (
            <CAvatar.Icon placement="bottom-right" backgroundColor="$green10">
              <Check color="$color12" />
            </CAvatar.Icon>
          )}
        </CAvatar>
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

export function SelectedContact({ selectedContacts }: { selectedContacts: ContactList }) {
  return (
    <XStack gap="$4" paddingHorizontal="$4" paddingVertical="$2">
      {selectedContacts.map((contact) => (
        <View alignItems="center">
          <CAvatar size="$6">
            <CAvatar.Icon placement="bottom-right">
              <X color="$color11" />
            </CAvatar.Icon>
            <CAvatar.Content id="avatar-joseph">
              <CAvatar.Image src="https://images.unsplash.com/photo-1548142813-c348350df52b?&width=150&height=150&dpr=2&q=80" />
              <CAvatar.Fallback backgroundColor="$gray6" />
            </CAvatar.Content>
          </CAvatar>
          <Text theme="alt1" maxWidth="$6" numberOfLines={1}>
            Joseph bu Same
          </Text>
        </View>
      ))}
    </XStack>
  )
}
