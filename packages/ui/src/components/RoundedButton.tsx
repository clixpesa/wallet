import { IconProps } from '@tamagui/helpers-icon'
import { YStack, Button, Text } from 'tamagui'

export type RoundedButtonProps = {
  buttonText: string
  action: () => void
  icon: React.FC<IconProps>
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({ action, buttonText, icon: Icon }) => {
  return (
    <YStack ai="center" gap="$2">
      <Button circular size="$5" onPress={action} theme="green">
        <Button.Icon>
          <Icon />
        </Button.Icon>
      </Button>
      <Text theme="alt2" fow="bold">
        {buttonText}
      </Text>
    </YStack>
  )
}
