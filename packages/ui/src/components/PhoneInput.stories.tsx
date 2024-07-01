import { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from './PhoneInput'

const meta: Meta<typeof PhoneInput> = {
  title: 'ui/PhoneInput',
  parameters: { layout: 'centered' },
  component: PhoneInput,
}

type Story = StoryObj<typeof PhoneInput>

export const Basic: Story = {
  args: {},
}

export default meta
