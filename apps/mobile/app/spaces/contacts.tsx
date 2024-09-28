import { Stack, useRouter } from 'expo-router'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, Theme, YStack, XStack, Button } from 'ui'

export default function AddContactsScreen() {
  const [selectedContacts, setSelectedContacts] = useState([])
  const [contactList, setContactList] = useState()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const { status } = await Contacts.requestPermissionsAsync()
      console.log(status)
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          Fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        })
        if (data.length > 0) {
          setContactList(data)
        } else {
          console.log('No Contacts')
        }
      }
    })()
  }, [])

  const handleSelected = (selected) => {
    const selectedInfo = {
      id: selected.lookupKey,
      name: selected.name,
      phoneNo: selected.phoneNumbers
        ? parsePhoneNumber(getContactData(selected.phoneNumbers, 'number')[0], 'KE').number
        : 'No Number',
    }
    const selectedList = [...selectedContacts, selectedInfo]
    setSelectedContacts(selectedList)
  }

  const handleDeselect = (deselected) => {
    const filtredList = selectedContacts.filter((el) => el.id !== deselected.id)
    setSelectedContacts(filtredList)
  }

  const handleSubmit = (data) => {
    console.log('data', data)
    router.push('/pots')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Add contacts',
        }}
      />

      <Box flex={1} bg="muted.50" alignItems="flex-start">
        <VStack width="full">
          {selectedContacts.length > 0 ? (
            <HStack space={3} p={2} borderBottomWidth="1" borderColor="muted.200">
              {selectedContacts.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      handleDeselect(item)
                    }}
                  >
                    <SelectedContact
                      nameInitials={item.name[0].toUpperCase()}
                      fullName={item.name}
                    />
                  </TouchableOpacity>
                )
              })}
            </HStack>
          ) : (
            <Box alignItems="center" m={3} ml={8} w="60%">
              <Text>Please select some members to add to your space</Text>
            </Box>
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contactList}
            keyExtractor={(item) => item.lookupKey}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  handleSelected(item)
                }}
              >
                <ContactItem
                  nameInitials={item.name[0].toUpperCase()}
                  fullName={item.name}
                  phoneNo={
                    item.phoneNumbers ? getContactData(item.phoneNumbers, 'number')[0] : 'No Number'
                  }
                />
              </TouchableOpacity>
            )}
          />
        </VStack>
        <Button
          position="absolute"
          variant="subtle"
          bg="primary.100"
          bottom={6}
          left="20%"
          rounded="3xl"
          w="60%"
          _text={{ color: 'primary.600', fontWeight: 'semibold', mb: '0.5' }}
          onPress={() => {
            dispatch(setSelectedMembers(selectedContacts))
            navigation.navigate('setSpaceGoal')
          }}
        >
          Next
        </Button>
      </Box>
    </SafeAreaView>
  )
}

//TODO! Maintain unique selctions
//TODO! Handle submissions.

function ContactItem(props) {
  return (
    <HStack w="75%" space={3} ml={8} my={1.5}>
      <Avatar>{props.nameInitials}</Avatar>
      <VStack>
        <Text>{props.fullName}</Text>
        <Text>{props.phoneNo}</Text>
      </VStack>
    </HStack>
  )
}

function SelectedContact(props) {
  return (
    <VStack alignItems="center">
      <Avatar>{props.nameInitials}</Avatar>
      <Text fontSize="xs">{props.fullName}</Text>
    </VStack>
  )
}

const getContactData = (data, property) => {
  if (data) {
    return data.map((data, index) => {
      return data[property]
    })
  }
}
