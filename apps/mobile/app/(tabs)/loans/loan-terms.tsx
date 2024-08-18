import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Paragraph, SubmitButton, YStack } from 'ui'
import { z } from 'zod'

export default function LoanTermsScreen() {
  const router = useRouter()

  const handleSubmit = () => {
    router.navigate('/loans')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          checkbox: formFields.boolean_checkbox.describe(
            'I understand that I have to repay this loan. If I don’t repay, it may result in negative consequences, including but not limited to damage to my credit score, legal action, or collection activities.'
          ),
        })}
        props={{}}
        renderAfter={({ submit }) => (
          <SubmitButton onPress={() => submit()} theme="orange">
            Yes, I accept
          </SubmitButton>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$2" py="$4" pb="$8">
              <Paragraph ta="center">Loan Terms</Paragraph>
            </YStack>

            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
