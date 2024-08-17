import { Check } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Avatar, Text, View, XStack, YStack, YGroup, debounce } from 'tamagui'

import { Checkboxes } from './common/checkboxParts'

const items = [
  {
    title: 'PayPal',
    description: 'You will be redirected to the PayPal website',
    id: 'gr-paypal',
    checked: false,
    image: `https://i.pravatar.cc/150?img=20`,
  },
  {
    title: 'Mastercard',
    description: 'Mastercard secure code is a private code for you',
    id: 'gr-mastercard',
    checked: false,
    image: `https://i.pravatar.cc/150?img=20`,
  },
  {
    title: 'Visa',
    description: 'This is a secure 128-bit SSL encrypted payment',
    id: 'gr-visa',
    checked: false,
    image: `https://i.pravatar.cc/150?img=20`,
  },
]

type Item = (typeof items)[number]

export function GroupedCheckbox() {
  const [values, setValues] = useState<Record<string, boolean>>(() =>
    items.reduce(
      (a, b) => ({
        ...a,
        [b.id]: b.checked,
      }),
      {}
    )
  )

  const onValuesChange = debounce((values: any) => {
    setValues(values)
  })

  return (
    <Checkboxes values={values} onValuesChange={onValuesChange}>
      <Checkboxes.FocusGroup
        minWidth="100%"
        loop
        $group-window-gtXs={{
          alignSelf: 'center',
          minWidth: 'unset',
          maxWidth: 400,
        }}
      >
        <Checkboxes.Group orientation="vertical" flexShrink={1} minWidth="100%">
          {items.map((item) => (
            <Checkboxes.FocusGroup.Item value={item.id} key={item.id}>
              <CheckboxItem checked={values[item.id]} key={item.id} item={item} />
            </Checkboxes.FocusGroup.Item>
          ))}
        </Checkboxes.Group>
      </Checkboxes.FocusGroup>
    </Checkboxes>
  )
}

function CheckboxItem({ item, checked }: { item: Item; checked: boolean }) {
  const { id, image } = item

  return (
    <YGroup.Item>
      <Checkboxes.Card
        flexDirection="row"
        backgroundColor={checked ? '$backgroundPress' : '$background'}
        borderColor={checked ? '$borderColorPress' : '$borderColor'}
        marginBottom={-1}
        borderWidth={1}
        alignItems="center"
        gap="$3"
        width="100%"
        padding="$3.5"
        minHeight={90}
        cursor="pointer"
        $group-window-sm={{
          gap: '$2',
        }}
      >
        <Avatar circular size="$5">
          <Avatar.Image src={image} />
          <Avatar.Fallback borderColor="$background" />
        </Avatar>
        <View flexDirection="column" gap="$2" f={1}>
          {/* TODO: Style better */}
          <View flexDirection="row" gap="$2">
            <Checkboxes.Checkbox.Label size="$4" lh="$5" htmlFor={id} f={1}>
              Abedy
            </Checkboxes.Checkbox.Label>
            <View
              backgroundColor="$color6"
              borderRadius={100_000}
              marginRight="auto"
              paddingHorizontal="$2"
              paddingVertical="$0.5"
              height="$1"
              theme="teal"
            >
              <Text color="$color9" fontSize="$1" fontWeight="$1">
                Chamaa
              </Text>
            </View>
          </View>
          <Text fontSize="$3" lineHeight="$3" fontWeight="300" col="$gray9">
            +254-1234-5678
          </Text>
        </View>
        <Checkboxes.Checkbox marginLeft="auto" id={id} theme="orange">
          <Checkboxes.Checkbox.Indicator>
            <Check />
          </Checkboxes.Checkbox.Indicator>
        </Checkboxes.Checkbox>
      </Checkboxes.Card>
    </YGroup.Item>
  )
}
