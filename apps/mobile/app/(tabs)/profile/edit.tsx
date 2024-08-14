import { getCurrentUser } from 'app/provider/auth/firebase/init.native'
import { User } from 'app/provider/auth/firebase/types'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Avatar,
  FullscreenSpinner,
  SubmitButton,
  Theme,
  YStack,
  useToastController,
  Image,
  Button,
} from 'ui'
import { z } from 'zod'

import { UploadAvatar } from '@/components/UploadAvatar'

export default function EditProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Edit Profile',
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
        <EditProfile />
      </SafeAreaView>
    </>
  )
}

export const EditProfile = () => {
  const user = getCurrentUser()

  if (!user) {
    return <FullscreenSpinner />
  }
  return <EditProfileForm user={user} initial={{ name: user.displayName }} />
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
})

const EditProfileForm = ({ initial, user }: { initial: { name: string | null }; user: User }) => {
  // const { params } = useParams()
  const toast = useToastController()
  const router = useRouter()

  const handleSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    try {
      await user.updateProfile({
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
          // autoFocus: !!params?.edit_name,
        },
      }}
      defaultValues={{
        name: initial.name ?? '',
      }}
      onSubmit={handleSubmit}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Update Profile</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack mb="$4">
            <UploadAvatar>
              <UserAvatar />
            </UploadAvatar>
          </YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}

const UserAvatar = () => {
  const user = getCurrentUser()
  return (
    <Avatar circular size={128}>
      <Image
        // src={user?.photoURL}
        src="https://picsum.photos/id/237/200/300"
        alt="your avatar"
        width={128}
        height={128}
      />
    </Avatar>
  )
}
