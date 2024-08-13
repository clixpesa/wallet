import { IconProps } from '@tamagui/helpers-icon'
import { Button } from 'tamagui'

export type ActionButtonProps = {
  buttonText?: string
  action: () => void
  icon: React.FC<IconProps>
}

export const ActionButton = ({ buttonText, action, icon: Icon }: ActionButtonProps) => {
  return (
    <Button  onPress={action} theme="teal" br='$10'>
      <Button.Icon >
        <Icon />
      </Button.Icon>
      {buttonText && <Button.Text   >{buttonText}</Button.Text>}
    </Button>
  )
}
