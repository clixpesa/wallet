import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, Theme, YStack } from 'ui'
import { z } from 'zod'

export default function CreateScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'New Space',
        }}
      />
      <SchemaForm
        onSubmit={console.log}
        schema={z.object({
          title: formFields.text.min(10).describe("Name // Your group's name"),
          type: formFields.select.describe('Space Type'),
        })}
        defaultValues={{
          title: '',
          type: 'ROSCA/Chamma group',
        }}
        props={{
          type: {
            options: [
              {
                name: 'ROSCA/Chamma group',
                value: 'ROSCA/Chamma group',
              },
              {
                name: 'Personal Space',
                value: 'personal space',
              },
            ],
          },
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()}>Create Space</SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$2" py="$4" pb="$8">
              <Paragraph ta="center">Create New Space</Paragraph>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
