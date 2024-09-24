import { Users } from '@tamagui/lucide-icons'
import type { SizeTokens, ThemeName } from 'tamagui'
import { View } from 'tamagui'

import { Chip } from './components/chipsParts'

const colors = ['teal', 'pink', 'orange']

function ChipsItem({ color, size }: { color: string; size: SizeTokens }) {
  return (
    <Chip
      backgroundColor="$color4"
      rounded
      theme={color as ThemeName}
      size={size}
      onPress={() => console.log('pressed')}
    >
      <Chip.Icon y={-1} scaleIcon={1.1} color="$color9">
        <Users />
      </Chip.Icon>
      <Chip.Text color="$color9">Groups</Chip.Text>
    </Chip>
  )
}

export function ChipsWithIcon({ size }: { size?: SizeTokens }) {
  return (
    <View flexDirection="row" flexShrink={1} flexWrap="wrap" gap="$2" padding="$4">
      {colors.map((color) => (
        <ChipsItem size={size ?? '$3'} key={color} color={color} />
      ))}
    </View>
  )
}
