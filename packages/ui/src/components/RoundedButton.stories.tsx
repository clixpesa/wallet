import { Meta, StoryObj } from '@storybook/react'

import { RoundedButton } from './RoundedButton'

const meta: Meta<typeof RoundedButton> = {
  title: 'ui/RoundedButton',
  parameters: { layout: 'centered' },
  component: RoundedButton,
}

type Story = StoryObj<typeof RoundedButton>

export const Basic: Story = {
  args: {},
}

export default meta
