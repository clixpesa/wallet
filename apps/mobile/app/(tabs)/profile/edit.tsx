import { getCurrentUser } from 'app/provider/auth/firebase/init.native'
import { User } from 'app/provider/auth/firebase/types'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createParam } from 'solito'
import { SolitoImage } from 'solito/image'
import { Avatar, FullscreenSpinner, SubmitButton, Theme, YStack, useToastController } from 'ui'
import { z } from 'zod'

import { UploadAvatar } from '@/components/UploadAvatar'

const { useParams } = createParam<{ edit_name?: '1' }>()

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
  const { params } = useParams()
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
          autoFocus: !!params?.edit_name,
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
  console.log('photoUrl', user?.photoURL)
  return (
    <Avatar circular size={128}>
      <SolitoImage
        src={user?.photoURL}
        // src="https://media.istockphoto.com/id/1411772543/photo/side-profile-of-african-woman-with-afro-isolated-against-a-white-background-in-a-studio.webp?b=1&s=170667a&w=0&k=20&c=AXoZk6bD-xbU4AQ66k4AKpWBRuDgHufmP4A1_Gn_5zg="
        alt="your avatar"
        width={128}
        height={128}
      />
    </Avatar>
  )
}
