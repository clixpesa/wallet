import { useFormState } from 'react-hook-form'
import { AnimatePresence, Button, ButtonProps, Spinner } from 'tamagui'

// hack to prevent it from breaking on the server
const useIsSubmitting = () => {
  try {
    return useFormState().isSubmitting
  } catch (error) {
    console.error(error)
    return false
  }
}
/**
 * created to be used in forms
 * will show loading spinners and disable submission when already submitting
 */
export const SubmitButton = (props: ButtonProps) => {
  const isSubmitting = useIsSubmitting()

  return (
    // <Button {...props} disabled={isSubmitting}>
    //   <View
    //     animation="bouncy"
    //     flexDirection="row"
    //     x={isSubmitting ? 0 : -15}
    //     gap="$3"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Button.Icon>
    //       <Spinner
    //         animation="slow"
    //         enterStyle={{
    //           scale: 0,
    //         }}
    //         exitStyle={{
    //           scale: 0,
    //         }}
    //         opacity={isSubmitting ? 1 : 0}
    //       />
    //     </Button.Icon>
    //     <Button.Text>Continue</Button.Text>
    //   </View>
    // </Button>

    <Button
      iconAfter={
        <AnimatePresence>
          {isSubmitting && (
            <Spinner
              color="$color"
              key="loading-spinner"
              o={1}
              y={0}
              animation="quick"
              enterStyle={{
                o: 0,
                y: 4,
              }}
              exitStyle={{
                o: 0,
                y: 4,
              }}
            />
          )}
        </AnimatePresence>
      }
      disabled={isSubmitting}
      {...props}
    />
  )
}
