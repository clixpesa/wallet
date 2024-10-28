import { faker } from '@faker-js/faker'
import { Users } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { YStack, H3, View, SizableText, XStack, SubmitButton, Button } from 'ui'
import { z } from 'zod'

export default function RequestLoanScreen() {
  const address = faker.finance.ethereumAddress()

  const handleSubmit = () => {
    console.log('Submit form')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <SchemaForm
        onSubmit={handleSubmit}
        schema={z.object({
          amount: formFields.number.min(10).max(10000).describe('Loan amount'),
          duration: formFields.select.describe('Duration'),
        })}
        defaultValues={{
          duration: '1 month',
        }}
        props={{
          duration: {
            options: [
              {
                name: '1 month (7.5% interest)',
                value: '1 month',
              },
              {
                name: '2 months (15% interest)',
                value: '2 months,',
              },
              {
                name: '3 months (22.5% interest)',
                value: '3 months',
              },
            ],
          },
        }}
        renderAfter={({ submit }) => (
          <XStack jc="space-between" gap="$4">
            <Button
              boc="$color12"
              pressStyle={{
                bg: '$color6',
              }}
              br="$10"
              onPress={() => console.log('Save')}
            >
              <Button.Text col="$color">Save</Button.Text>
            </Button>
            <SubmitButton f={1} onPress={() => submit()} theme="orange">
              Continue
            </SubmitButton>
          </XStack>
        )}
      >
        {(fields) => (
          <>
            <YStack gap="$6" mb="$4">
              <H3 ta="left">Request loan from Haraka Pool</H3>
              <XStack ai="center">
                <XStack ai="center" gap="$3">
                  <View bg="$teal10" p="$4" br="$10" theme="teal">
                    <Users o={0.8} />
                  </View>
                  <YStack gap="$2">
                    <SizableText>Maldives Contributions</SizableText>
                    <SizableText size="$4" theme="alt2" numberOfLines={1}>{`${address.slice(
                      0,
                      6
                    )}...${address.slice(-4)}`}</SizableText>
                  </YStack>
                </XStack>
              </XStack>
            </YStack>
            {Object.values(fields)}
          </>
        )}
      </SchemaForm>
    </SafeAreaView>
  )
}
