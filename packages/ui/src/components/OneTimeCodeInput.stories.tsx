import { Meta, StoryObj } from '@storybook/react'
import { OneTimeCodeInput } from './OneTimeCodeInput'

const meta: Meta<typeof OneTimeCodeInput> = {
  title: 'ui/OneTimeCodeInput',
  parameters: { layout: 'centered' },
  component: OneTimeCodeInput,
}

type Story = StoryObj<typeof OneTimeCodeInput>

export const Basic: Story = {
  args: {},
}

export default meta
