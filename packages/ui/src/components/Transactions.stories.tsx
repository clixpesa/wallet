import { Meta, StoryObj } from '@storybook/react'

import { Transactions } from './Transactions'

const meta: Meta<typeof Transactions> = {
  title: 'ui/Transactions',
  parameters: { layout: 'centered' },
  component: Transactions,
}

type Story = StoryObj<typeof Transactions>

export const Basic: Story = {
  args: {},
}

export default meta
