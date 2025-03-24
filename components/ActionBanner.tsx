import type { IconProps } from '@tamagui/helpers-icon'
// import { LinearGradient } from '@tamagui/linear-gradient'
import { ChevronRight, X } from '@tamagui/lucide-icons'
import { TouchableOpacity } from 'react-native'
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

export const ActionBanner = ({
  title,
  icon: Icon,
  action,
  ...props
}: ActionBannerProps) => {
  return (
    <Card rounded="$6" {...props} bg="$color1">
      <Card.Header my="auto" padded gap="$3">
        <XStack justify="space-between" items="flex-start">
          <XStack gap="$3" items="center">
            <YStack theme="teal" bg="$teal2" p="$2.5" rounded="$10">
              <Icon color="$color11" opacity={0.8} />
            </YStack>
            <YStack>
              <H4 size="$3">{title}</H4>
              <SizableText theme="alt1">Achieve your results faster</SizableText>
            </YStack>
          </XStack>
          <TouchableOpacity>
            <X color="$color10" size={20} />
          </TouchableOpacity>
        </XStack>

        {!!action && (
          <Button mt="$3" rounded="$8" theme="teal" fontWeight="700">
            {action.text}
          </Button>
        )}
      </Card.Header>
      <Card.Background>
        {/* <LinearGradient
          br="$6"
          w="100%"
          h="100%"
          colors={['$color2', '$color3', '$color2']}
          start={[1, 1]}
          end={[0.85, 0]}
        /> */}
      </Card.Background>
    </Card>
  )
}
