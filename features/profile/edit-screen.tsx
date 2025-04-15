import { useToastController } from '@tamagui/toast'
import { Avatar, Theme, View, YStack, Image, Text } from 'tamagui'
import { SchemaForm, formFields } from 'utils/SchemaForm'
import { useLocalSearchParams } from 'expo-router'
import { useRouter } from 'expo-router'
import { z } from 'zod'

import { FullscreenSpinner, SubmitButton } from 'components'
// import { UploadAvatar } from 'features/settings/components/upload-avatar'



export const EditProfileScreen = () => {
  return <Text>Hello</Text>
  // const { profile, user } = useUser()
  // if (!profile || !user?.id) {
  //   return <FullscreenSpinner />
  // }
  // return (
  //   // <EditProfileForm
  //   // userId={user.id}
  //   // initial={{ name: 'Sam' }}
  //   // />
  // )
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
  about: formFields.textarea.describe('About // Tell us a bit about yourself'),
})

const EditProfileForm = ({
  initial,
  userId,
}: {
  initial: { name: string | null; about: string | null }
  userId: string
}) => {
  const toast = useToastController()
  const params = useLocalSearchParams<{ edit_name?: '1'; edit_about?: '1' }>()

  const router = useRouter()

  return (
    <SchemaForm
      schema={ProfileSchema}
      props={{
        name: {
          autoFocus: !!params?.edit_name,
        },
      }}
      defaultValues={
        {
          // name: initial.name ?? '',
        }
      }
      // onSubmit={(values) => mutation.mutate(values)}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Update Profile</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack mb="$4" items="center">
            <View>
              {/* <UploadAvatar>
                <UserAvatar />
              </UploadAvatar> */}
            </View>
          </YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}

const UserAvatar = () => {
  // const { avatarUrl } = useUser()
  return (
    <Avatar circular size={128}>
      <Image alt="your avatar" width={128} height={128} />
    </Avatar>
  )
}
