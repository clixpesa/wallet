import { useExpoNotifications } from 'app/hooks/useNotifications'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { isDevice } from 'expo-device'
import { Stack } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Button,
  H3,
  KVTable,
  Paragraph,
  SizableText,
  Spacer,
  SubmitButton,
  Theme,
  useToastController,
} from 'ui'
import { z } from 'zod'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Notifications',
        }}
      />
      <NotificationsScreen />
    </SafeAreaView>
  )
}

const NotificationsSchema = z.object({
  token: formFields.text.describe("Token (copy paste from above) // ExpoToken['']"),
  title: formFields.text.describe('Title'),
  body: formFields.text.describe('Body'),
})

export const NotificationsScreen = () => {
  const [token, setToken] = useState('')
  const toast = useToastController()
  const { registerForPushNotificationsAsync, schedulePushNotification } = useExpoNotifications()

  const handleGetToken = async () => {
    const expoToken = await registerForPushNotificationsAsync()
    if (expoToken) {
      setToken(expoToken)
    } else {
      toast.show('No token found something went wrong')
    }
  }

  return (
    <SchemaForm
      // TODO: updated
      onSubmit={(values) => {
        schedulePushNotification({
          title: values.title,
          body: values.body,
          triggerSeconds: 2,
          data: {},
        })
      }}
      schema={NotificationsSchema}
      defaultValues={{
        token: '',
      }}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Send Notification</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <Paragraph>
            Expo Notification Tokens are unique identifiers that is associated with a physical
            device. A user can have many devices signed in (user can have many expo tokens).
          </Paragraph>
          <Spacer size="$3" />
          <Paragraph>
            You can use this token to send yourself push notifications from the Expo Push
            Notifications tool.
          </Paragraph>
          <Spacer size="$3" />
          {!isDevice && (
            <Paragraph color="$red10" fontWeight="900">
              App is running on a simulator and will not render a token or show notifications
            </Paragraph>
          )}
          <Spacer size="$3" />
          <KVTable>
            <KVTable.Row>
              <KVTable.Key>
                <SizableText fontWeight="900">Token:</SizableText>
              </KVTable.Key>
              <KVTable.Value gap="$4">
                <SizableText selectable>{token ?? null}</SizableText>
              </KVTable.Value>
            </KVTable.Row>
          </KVTable>
          <Button themeInverse onPress={handleGetToken}>
            Get Physical Device Token
          </Button>

          <H3>Send Local Notification</H3>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}
