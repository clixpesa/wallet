import useSpaceStore from 'app/store/spaceStore'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitButton, YStack } from 'ui'
import { z } from 'zod'

import { NewGroupSvg } from '@/components/NewGroupSvg'

export default function CreateSpaceScreen() {
  const { spaceInfo, setSpaceInfo } = useSpaceStore()
  const router = useRouter()

  const handleSubmit = (data) => {
    console.log('data', data)
    router.navigate('spaces/contacts')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'New space',
        }}
      />
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          title: formFields.text.min(10).describe('Name // Space name'),
          type: formFields.select.describe('Space type'),
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
        renderAfter={({ submit }) => <SubmitButton onPress={() => submit()}>Continue</SubmitButton>}
      >
        {(fields) => (
          <>
            <YStack ai="center">
              <NewGroupSvg />
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
