import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { View, useTheme, H2, Theme, Text } from 'tamagui'
import { z } from 'zod'

import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated'

import { SubmitButton, Chip } from 'components'
import { SchemaForm, formFields } from 'utils/SchemaForm'

const spaceNames = ['Holidays', 'Savings', 'Gift', 'Rainy day', 'Education', 'Renovation']

const SpaceSchema = z.object({
  space: formFields.text.min(1).max(30),
})

export default function Customize() {
  const theme = useTheme()
  const form = useForm()

  // Watch the 'space' field value
  const spaceValue = useWatch({
    control: form.control,
    name: 'space',
  })

  console.log('Space Value', spaceValue)

  // Disable button if field is empty or invalid
  const isDisabled = !spaceValue?.trim()

  const handleSpaceCreation = ({ space }) => {
    alert('Space created!!')
    console.log('space', space)
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          {
            height: 250,
            paddingTop: 50,
            paddingHorizontal: 16,
            marginBottom: 16,
            overflow: 'hidden',
            backgroundColor: theme.teal8.val,
          },
        ]}
      >
        {/* <Image
                tintColor={iconColor}
                source={require('../../assets/images/react-logo.png')}
                style={styles.reactLogo}
              /> */}
        <View
          style={{
            flex: 1,
          }}
        >
          <H2 fontFamily="$heading" size="$2" my="$7">
            Customize
          </H2>
        </View>
      </Animated.View>
      <FormProvider {...form}>
        <SchemaForm
          onSubmit={handleSpaceCreation}
          schema={SpaceSchema}
          props={{
            space: {
              placeholder: 'Name your Space',
            },
          }}
          renderAfter={({ submit }) => (
            <Theme inverse>
              <SubmitButton
                onPress={() => submit()}
                rounded="$10"
                theme="teal"
                disabled={isDisabled}
                // opacity={isDisabled ? 0.5 : 1}
              >
                Create my space
              </SubmitButton>
            </Theme>
          )}
        >
          {(fields) => (
            <>
              {Object.values(fields)}

              <View flexDirection="row" flexWrap="wrap" gap="$2" mt="$4">
                {spaceNames.map((name) => (
                  <Chip
                    theme="teal_alt1"
                    bg="$teal4"
                    circular
                    key={name}
                    pressable
                    size="$2.5"
                    onPress={() => form.setValue('space', name)}
                  >
                    <Chip.Text>{name}</Chip.Text>
                  </Chip>
                ))}
              </View>
            </>
          )}
        </SchemaForm>
      </FormProvider>
    </View>
  )
}
