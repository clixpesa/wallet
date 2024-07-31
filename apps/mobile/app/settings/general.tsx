import { getCurrentUser } from 'app/provider/auth/firebase/init.native'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'solito/link'
import { FormWrapper, H4, KVTable, Separator, SizableText, YStack, styled } from 'ui'

export default function GeneralSetttingsScreen() {
  const user = getCurrentUser()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'General',
        }}
      />
      <FormWrapper>
        <FormWrapper.Body mt="$2" gap="$10">
          <Section>
            <KVTable>
              <YStack gap="$4">
                <H4>Profile Data</H4>
                <Separator />
              </YStack>
              <KVTable.Row>
                <KVTable.Key>
                  <SizableText fow="900">Name</SizableText>
                </KVTable.Key>
                <KVTable.Value gap="$4">
                  <SizableText>{user?.displayName}</SizableText>
                  <Link href="/profile/edit">
                    <SizableText textDecorationLine="underline">Change</SizableText>
                  </Link>
                </KVTable.Value>
              </KVTable.Row>
            </KVTable>
          </Section>

          <Section>
            <KVTable>
              <YStack gap="$4">
                <H4>Account Data</H4>
                <Separator />
              </YStack>
              <KVTable.Row>
                <KVTable.Key>
                  <SizableText fow="900">Email</SizableText>
                </KVTable.Key>
                <KVTable.Value gap="$4">
                  <SizableText>{user?.email}</SizableText>
                  <Link href="/settings/change-email">
                    <SizableText textDecorationLine="underline">Change</SizableText>
                  </Link>
                </KVTable.Value>
              </KVTable.Row>

              <KVTable.Row>
                <KVTable.Key>
                  <SizableText fow="900">User ID</SizableText>
                </KVTable.Key>
                <KVTable.Value>
                  <SizableText>{user?.uid}</SizableText>
                </KVTable.Value>
              </KVTable.Row>
            </KVTable>
          </Section>
        </FormWrapper.Body>
      </FormWrapper>
    </SafeAreaView>
  )
}

const Section = styled(YStack, {
  boc: '$borderColor',
  bw: 1,
  p: '$4',
  br: '$4',
})
