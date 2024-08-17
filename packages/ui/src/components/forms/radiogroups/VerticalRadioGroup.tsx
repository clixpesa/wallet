import { useId, useState } from 'react'
import { H3, Label, RadioGroup, View } from 'tamagui'

import { Card } from './components/radioParts'

const data = [
  {
    id: 'daily',
    label: 'Daily (300 cKES)',
  },
  {
    id: 'weekly',
    label: 'Weekly (4,000 cKES)',
  },
  {
    id: 'monthly',
    label: 'Monthly (10,000 cKES)',
  },
]

export function VerticalRadioGroup() {
  const uniqueId = useId()
  const [value, setValue] = useState('hor-visa')
  return (
    <View
      flexDirection="column"
      minWidth="100%"
      $group-window-sm={{
        paddingHorizontal: '$4',
        paddingVertical: '$6',
      }}
      $group-window-gtSm={{ maxWidth: 400, minWidth: 400 }}
      gap="$4"
    >
      <H3>Repayment frequency</H3>
      <RadioGroup
        $group-window-gtSm={{ maxWidth: 400 }}
        flexWrap="wrap"
        gap="$2"
        flexDirection="column"
        value={value}
        onValueChange={setValue}
      >
        {data.map(({ id, label }) => (
          <Card
            padding={0}
            key={id}
            flexDirection="row"
            alignItems="center"
            gap="$3"
            paddingHorizontal="$2.5"
            active={value === id}
            onPress={() => setValue(id)}
          >
            <View onPress={(e) => e.stopPropagation()}>
              <RadioGroup.Item id={uniqueId + id} value={id}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </View>
            <View flexDirection="row" alignItems="center" gap="$2">
              <Label cursor="pointer" htmlFor={uniqueId + id}>
                {label}
              </Label>
            </View>
          </Card>
        ))}
      </RadioGroup>
    </View>
  )
}
