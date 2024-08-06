import useSpaceStore from 'app/store/spaceStore'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, Theme, YStack } from 'ui'
import { z } from 'zod'

export default function CreateSpaceScreen() {
  const { spaceData, setSpaceData } = useSpaceStore()
  const router = useRouter()

  const handleSubmit = (data) => {
    console.log('data', data)
    router.push('/next-screen')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Create New Space',
        }}
      />
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          title: formFields.text.min(10).describe('Name // Name your space'),
          type: formFields.select.describe('Space Type'),
        })}
        defaultValues={spaceData}
        props={{
          type: {
            options: [
              {
                name: 'Chamaa (ROSCA) Group',
                value: 'rosca',
              },
              {
                name: 'Personal Space',
                value: 'personal',
              },
              {
                name: 'Contribution Group',
                value: 'mchango',
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
