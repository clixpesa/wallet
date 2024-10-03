import { FlashList } from '@shopify/flash-list'
import { X, Check } from '@tamagui/lucide-icons'
import * as Contacts from 'expo-contacts'
import { Stack } from 'expo-router'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CAvatar, Separator, Text, View, styled, ScrollView, XStack } from 'ui'

async function fetchContacts() {
  const { status } = await Contacts.requestPermissionsAsync()

  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    })

    const filteredData = data.filter(
      (contact) => contact && contact.phoneNumbers && contact.phoneNumbers.length > 0
    )

    // Map the data to the format you want
    const contactList = filteredData.map((contact) => ({
      id: contact.id,
      name: contact.name || 'Unknown Name', // Fall back if name is missing
      phoneNumber: contact.phoneNumbers?.[0]?.number || 'No Number', // First available phone number
      image: contact.imageAvailable ? contact.image?.uri : undefined,
      initials: contact.name ? contact.name[0].toUpperCase() : '?',
      selected: false,
    }))

    return contactList
  }
  return []
}

type ContactList = Awaited<ReturnType<typeof fetchContacts>>

export default function AddContactsScreen() {
  const [contactList, setContactList] = useState<ContactList>([])
  const [selectedContacts, setSelectedContacts] = useState<ContactList>([])

  useEffect(() => {
    // Call the fetchContacts function and set the contactList
    const loadContacts = async () => {
      const contacts = await fetchContacts()
      setContactList(contacts)
    }

    loadContacts()
  }, [])

  const handleSelectContact = (contact: ContactList[number]) => {
    setSelectedContacts(
      (prev) =>
        prev.find((selected) => selected.id === contact.id)
          ? prev.filter((selected) => selected.id !== contact.id) // Deselect if already selected
          : [...prev, contact] // Select if not already selected
    )
  }

  console.log('Selected Contacts', selectedContacts)

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
              <Item contact={item} onPress={() => handleSelectContact(item)} />
              {index < contactList.length - 1 && <Separator />}
            </View>
          )}
          estimatedItemSize={200}
        />
      </View>
    </SafeAreaView>
  )
}

function Item({ contact, onPress }: { contact: ContactList[number]; onPress: () => void }) {
  return (
    <ContactItemFrame onPress={onPress}>
      <View>
        <CAvatar>
          <CAvatar.Content>
            {contact.image ? (
              <CAvatar.Image objectFit="cover" src={contact.image} />
            ) : (
              // Fallback to initials if image is not available
              <Text fontSize="$4" fontWeight="bold" color="$color12">
                {contact.initials}
              </Text>
            )}
          </CAvatar.Content>
          <CAvatar.Icon placement="bottom-right" backgroundColor="$green10">
            <Check color="$color12" />
          </CAvatar.Icon>
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
        <View alignItems="center" key={contact.id}>
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
            {contact.name}
          </Text>
        </View>
      ))}
    </XStack>
  )
}
