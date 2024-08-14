import useSpaceStore from 'app/store/spaceStore'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, Theme, YStack, XStack, Button } from 'ui'
import { z } from 'zod'

export default function CreateSpaceScreen() {
  const { spaceInfo, setSpaceInfo } = useSpaceStore()
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
        defaultValues={spaceInfo}
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
          <Theme>
            <XStack jc="space-between" gap="$5">
              <Button
                pressStyle={{
                  bg: '$color6',
                }}
                br="$10"
                onPress={() => console.log('Save')}
              >
                <Button.Text col="$color">Save</Button.Text>
              </Button>
              <SubmitButton f={1} onPress={() => submit()}>
                Continue
              </SubmitButton>
            </XStack>
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
