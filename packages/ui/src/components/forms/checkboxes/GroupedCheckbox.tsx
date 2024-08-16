import { Check } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Avatar, Text, View, XStack, YStack, YGroup, debounce } from 'tamagui'

import { Checkboxes } from './common/checkboxParts'

/** ------ EXAMPLE ------ */
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
        // paddingHorizontal="$4"
        // paddingVertical="$6"
        $group-window-gtXs={{
          alignSelf: 'center',
          minWidth: 'unset',
          maxWidth: 400,
        }}
      >
        <Checkboxes.Group orientation="vertical" flexShrink={1} minWidth="100%">
          {items.map((item) => (
            <Checkboxes.FocusGroup.Item value={item.id} key={item.id}>
              <Item checked={values[item.id]} key={item.id} item={item} />
            </Checkboxes.FocusGroup.Item>
          ))}
        </Checkboxes.Group>
      </Checkboxes.FocusGroup>
    </Checkboxes>
  )
}

function Item({ item, checked }: { item: Item; checked: boolean }) {
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
        <View flexDirection="column" flex={1} bg="blue">
          <View flexDirection="row" gap="$3" bg="green">
            <Checkboxes.Checkbox.Label size="$5" htmlFor={id} bg="teal" lh="$6">
              Rizamoyiii
            </Checkboxes.Checkbox.Label>

            <View
              backgroundColor="$color6"
              borderRadius={100_000}
              marginRight="auto"
              paddingHorizontal="$2"
              paddingVertical="$0.5"
              theme="teal"
              height="$2"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="$color9" fontSize="$1" fontWeight="$1">
                Chamaa
              </Text>
            </View>

            <Checkboxes.Checkbox marginLeft="auto" id={id} alignSelf="flex-start">
              <Checkboxes.Checkbox.Indicator>
                <Check />
              </Checkboxes.Checkbox.Indicator>
            </Checkboxes.Checkbox>
          </View>
          <Text numberOfLines={2} fontSize="$3" lineHeight="$3" fontWeight="300" col="$gray9">
            +254-1234-5678
          </Text>
        </View>
      </Checkboxes.Card>
    </YGroup.Item>
  )
}
