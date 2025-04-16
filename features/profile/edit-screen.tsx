import { Pencil, UserRound } from '@tamagui/lucide-icons'
import { useToastController } from '@tamagui/toast'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, YStack, getTokens } from 'tamagui'
import { z } from 'zod'

import { UploadAvatar } from 'features/settings/components/upload-avatar'
import { FullscreenSpinner, SubmitButton, CAvatar } from 'components'
import { SchemaForm, formFields } from 'utils/SchemaForm'

import type { User } from 'provider/auth/firebase'
import { useAuth } from 'provider/auth'

export const EditProfileScreen = () => {
  const { user } = useAuth()

  if (!user?.uid) {
    return <FullscreenSpinner />
  }
  return <EditProfileForm user={user} initial={{ name: user.displayName }} />
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
})

const EditProfileForm = ({
  initial,
  user,
}: {
  initial: { name: string | null }
  user: User
}) => {
  const router = useRouter()
  const toast = useToastController()
  const params = useLocalSearchParams<{ edit_name?: '1' }>()

  const handleSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    try {
      await user?.updateProfile({
        displayName: data.name,
      })
      toast.show('Successfully updated!')
      router.back()
    } catch (error) {
      console.error('Error updating profile', error)
      toast.show('Failed to update profile')
    }
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
        <SubmitButton rounded="$10" theme="teal" onPress={() => submit()} themeInverse>
          Save
        </SubmitButton>
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
          src={user?.photoURL || ''}
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
