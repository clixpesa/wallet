import { FormProvider, useForm } from 'react-hook-form'
import { View, useTheme, H2, Theme, Text, Button, SizableText } from 'tamagui'
import { CircleCheck } from '@tamagui/lucide-icons'
import { z } from 'zod'
import { useMemo, useRef, useState, useCallback } from 'react'
import { StyleSheet, Text as Text2 } from 'react-native'
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import Animated from 'react-native-reanimated'
import { SubmitButton, Chip } from 'components'
import { SchemaForm, formFields } from 'utils/SchemaForm'

const spaceNames = ['Holidays', 'Savings', 'Gift', 'Rainy day', 'Education', 'Renovation']

const SpaceSchema = z.object({
  space: formFields.text.min(1).max(30),
})

export default function Customize() {
  const theme = useTheme()
  const form = useForm<z.infer<typeof SpaceSchema>>()
  const bottomSheetModalRef = useRef<BottomSheet>(null)
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const snapPoints = useMemo(() => ['30%'], [])

  const activeFieldValue = form.watch('space')
  const isDisabled = !activeFieldValue?.toString()

  const handleSpaceCreation = ({ space }) => {
    // Show bottom sheet when form is submitted
    setShowBottomSheet(true)
    // bottomSheetRef.current?.expand()
    console.log('space', space)
  }

  const handlePresentModalPress = useCallback(() => {
    console.log('pressed')
    bottomSheetModalRef.current?.expand()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {/* Header Section */}
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
        <View style={{ flex: 1 }}>
          <H2 fontFamily="$heading" size="$2" my="$7">
            Customize
          </H2>
        </View>
      </Animated.View>

      {/* Main Form */}
      <FormProvider {...form}>
        <SchemaForm
          form={form}
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

      {showBottomSheet && (
        <BottomSheet
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          detached
          bottomInset={46}
          snapPoints={snapPoints}
          style={styles.sheetContainer}
          enableContentPanningGesture={false}
          enableHandlePanningGesture={false}
          backdropComponent={BottomSheetBackdrop}
        >
          <BottomSheetView style={styles.contentContainer}>
            <CircleCheck size="$10" strokeWidth={0.5} color="$teal8" />
            <SizableText fontWeight="600" text="center" lineHeight="$4">
              Your `New Dog` space was successfully created
            </SizableText>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    // padding: 8,
  },
})
