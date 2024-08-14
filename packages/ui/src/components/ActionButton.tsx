import { IconProps } from '@tamagui/helpers-icon'
import { Button, ButtonProps } from 'tamagui'

export type ActionButtonProps = {
  buttonText?: string
  action: () => void
  icon?: React.FC<IconProps>
} & ButtonProps

export const ActionButton = ({ buttonText, action, icon: Icon, ...props }: ActionButtonProps) => {
  return (
    <Button onPress={action} theme="teal" br="$10" {...props}>
      {Icon && (
        <Button.Icon>
          <Icon />
        </Button.Icon>
      )}
      {buttonText && <Button.Text>{buttonText}</Button.Text>}
    </Button>
  )
}
