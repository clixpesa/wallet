import { Meta, StoryObj } from '@storybook/react'
import { Cog, Users, HelpCircle } from '@tamagui/lucide-icons'

import { Settings } from './Settings'

const meta: Meta<typeof Settings> = {
  title: 'ui/Settings',
  component: Settings,
  parameters: { layout: 'centered' },
}

type Story = StoryObj<typeof Settings>

export const Basic: Story = {
  render: (props) => (
    <Settings {...props} w={500}>
      <Settings.Items>
        <Settings.Group>
          <Settings.Item icon={Users} accentTheme="green">
            Refer Your Friends
          </Settings.Item>
          <Settings.Item icon={Cog} accentTheme="orange">
            Settings
          </Settings.Item>
          <Settings.Item icon={HelpCircle} accentTheme="blue">
            Help
          </Settings.Item>
        </Settings.Group>
      </Settings.Items>
    </Settings>
  ),
}

export default meta
