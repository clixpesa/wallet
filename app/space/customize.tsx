import { FormProvider, useForm } from 'react-hook-form'
import { View, useTheme, H2, Theme, SizableText } from 'tamagui'
import { CircleCheck } from '@tamagui/lucide-icons'
import { z } from 'zod'
import { useMemo, useRef, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { BottomSheetView, BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'

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
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['30%'], [])

  const activeFieldValue = form.watch('space')
  const isDisabled = !activeFieldValue?.toString()

  // Custom backdrop component
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        an
      />
    ),
    []
  )
  const handleSpaceCreation = ({ space }) => {
    // Show bottom sheet when form is submitted
    bottomSheetModalRef.current?.present()
  }

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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        index={0}
        detached
        bottomInset={46}
        snapPoints={snapPoints}
        style={styles.sheetContainer}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <CircleCheck size="$10" strokeWidth={0.5} color="$teal8" />
          <SizableText fontWeight="600" text="center" lineHeight="$4">
            Your `{activeFieldValue}` space was successfully created
          </SizableText>
        </BottomSheetView>
      </BottomSheetModal>
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
  },
})
