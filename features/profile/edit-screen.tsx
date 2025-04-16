import { useToastController } from '@tamagui/toast'
import { Theme, View, YStack, getTokens } from 'tamagui'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { useLocalSearchParams } from 'expo-router'
import { useRouter } from 'expo-router'
import { z } from 'zod'

import { FullscreenSpinner, SubmitButton } from 'components'
import { UploadAvatar } from 'features/settings/components/upload-avatar'
import { useAuth } from 'provider/auth'
import { CAvatar } from 'components'
import { Pencil, UserRound, UserRoundPen } from '@tamagui/lucide-icons'

export const EditProfileScreen = () => {
  const { user } = useAuth()
  if (!user?.uid) {
    return <FullscreenSpinner />
  }
  return <EditProfileForm userId={user.uid} initial={{ name: 'Sam' }} />
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
})

const EditProfileForm = ({
  initial,
  userId,
}: {
  initial: { name: string | null }
  userId: string
}) => {
  const toast = useToastController()
  const params = useLocalSearchParams<{ edit_name?: '1' }>()

  const router = useRouter()

  const handleSubmit = () => {
    console.log('Update Form')
  }

  return (
    <SchemaForm
      schema={ProfileSchema}
      props={{
        name: {
          autoFocus: !!params?.edit_name,
        },
      }}
      defaultValues={{
        name: initial.name ?? '',
      }}
      onSubmit={handleSubmit}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton rounded="$10" theme="teal" onPress={() => submit()}>
            Save
          </SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack mb="$4" items="center">
            <View>
              <UploadAvatar>
                <UserAvatar />
              </UploadAvatar>
            </View>
          </YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}

const UserAvatar = () => {
  const { user } = useAuth()
  return (
    <CAvatar size="$8" theme="teal">
      <CAvatar.Icon placement="bottom-right">
        <Pencil />
      </CAvatar.Icon>
      <CAvatar.Content>
        <CAvatar.Image
          src={user?.photoURL}
          alt="your avatar"
          width={getTokens().size['8'].val}
          height={getTokens().size['8'].val}
        />
        <CAvatar.Fallback
          backgroundColor="$background"
          items="center"
          justifyContent="center"
        >
          <UserRound size={38} />
        </CAvatar.Fallback>
      </CAvatar.Content>
    </CAvatar>
  )
}
