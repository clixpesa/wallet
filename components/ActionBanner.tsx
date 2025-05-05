import type { IconProps } from '@tamagui/helpers-icon'
import { LinearGradient } from '@tamagui/linear-gradient'
import { ChevronRight, X } from '@tamagui/lucide-icons'
import { TouchableOpacity } from 'react-native'
import { Text } from 'tamagui'
// import type { useLon } from 'expo-router'

import type React from 'react'
import { Button, Card, type CardProps, H4, SizableText, XStack, YStack } from 'tamagui'

export type ActionBannerProps = {
  icon: React.FC<IconProps>
  title?: string
  action?: {
    // props: ReturnType<typeof useLink>
    text: string
  }
} & CardProps

export const ActionBanner = ({ title, icon: Icon, action, ...props }: ActionBannerProps) => {
  return (
    <Card rounded="$8" {...props} bg="$accent12">
      <Card.Header padded gap="$4">
        <XStack justify="space-between" items="flex-start">
          <XStack gap="$4" items="center">
            <YStack theme="teal" bg="$teal2" p="$3" rounded="$10">
              <Icon color="$color11" opacity={0.8} />
            </YStack>
            <YStack gap="$2">
              <Text fontWeight="600" fontSize={16}>
                {title}
              </Text>
              <SizableText theme="alt1">Achieve your results faster</SizableText>
            </YStack>
          </XStack>
          <TouchableOpacity>
            <X color="$color10" size={16} />
          </TouchableOpacity>
        </XStack>

        {/* {!!action && ( */}
        <Button mt="$3" rounded="$8" theme="teal" fontWeight="600">
          Set up a goal
          {/* {action.text} */}
        </Button>
        {/* )} */}
      </Card.Header>
      <Card.Background>
        {/* <LinearGradient
          rounded="$6"
          width="100%"
          height="100%"
          colors={['$color1', '$color1']}
          start={[1, 1]}
          end={[0.85, 0]}
        /> */}
      </Card.Background>
    </Card>
  )
}
