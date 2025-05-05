import { Coins, CalendarClock } from '@tamagui/lucide-icons'
import { useId, useState } from 'react'
import { Button, Label, Switch, Text, View, YStack, YGroup, Circle } from 'tamagui'

export function AutomaticTransferSwitch() {
  const uniqueId = useId()
  const uniqueId2 = useId()
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)

  return (
    <YGroup rounded="$6">
      <Button
        flexDirection="row"
        maxW="100%"
        py="$3"
        gap="$1.5"
        height="auto"
        bg="$color1"
        onPress={() => setChecked(!checked)}
      >
        <YStack theme="teal" bg="$teal2" p="$2.5" rounded="$10">
          <Coins color="$color11" opacity={0.8} hitSlop={20} />
        </YStack>

        <View flexDirection="column">
          <Label size="$1.5" htmlFor={uniqueId + 'switch'} fontWeight="600">
            Spare Change
          </Label>
          <Text theme="alt1">~Ksh 300 / month</Text>
        </View>
        <Switch
          id={uniqueId + 'switch'}
          checked={checked}
          onCheckedChange={setChecked}
          marginLeft="auto"
          size="$3"
          backgroundColor={checked ? '$teal10' : '$color5'}
        >
          <Switch.Thumb animation="quick" bg="white" />
        </Switch>
      </Button>
      <Button
        flexDirection="row"
        maxW="100%"
        py="$3"
        height="auto"
        items="center"
        bg="$color1"
        gap="$1.5"
        onPress={() => setChecked2(!checked2)}
      >
        <YStack theme="teal" bg="$teal2" p="$2.5" rounded="$10">
          <CalendarClock color="$color11" opacity={0.8} />
        </YStack>

        <View flexDirection="column">
          <Label size="$1.5" htmlFor={uniqueId2 + 'switch'} fontWeight="600">
            Recurring transfer
          </Label>
          <Text theme="alt1">~Ksh 300 / month</Text>
        </View>
        <Switch
          id={uniqueId2 + 'switch'}
          checked={checked2}
          onCheckedChange={setChecked2}
          marginLeft="auto"
          size="$3"
          backgroundColor={checked2 ? '$teal10' : '$color5'}
        >
          <Switch.Thumb animation="quick" bg="white" />
        </Switch>
      </Button>
    </YGroup>
  )
}
