import { Spinner, type SpinnerProps, YStack, H4 } from 'tamagui'

export const FullscreenSpinner = (props: SpinnerProps) => {
  return (
    <YStack flex={1} justify="center" items="center" gap="$4">
      <Spinner {...props} size="large" />
      <H4 fontWeight="bold">Loading wallet...</H4>
    </YStack>
  )
}
