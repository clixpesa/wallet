import type { SizeTokens } from '@tamagui/core'
import { Check, X } from '@tamagui/lucide-icons'
import { useState } from 'react'

import { Switch } from './common/switchParts'

export function SwitchCustomIcons({ size }: { size?: SizeTokens }) {
  const [checked, setChecked] = useState(true)

  return (
    <Switch size={size} checked={checked} onCheckedChange={setChecked}>
      <Switch.Icon placement="left">
        <X color="#fff" />
      </Switch.Icon>
      <Switch.Icon placement="right">
        <Check color="#fff" />
      </Switch.Icon>
      <Switch.Thumb animation="quick" />
    </Switch>
  )
}
