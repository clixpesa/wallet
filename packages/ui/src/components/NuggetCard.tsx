import { IconProps } from '@tamagui/helpers-icon'
import { LinearGradient } from '@tamagui/linear-gradient'
import { ChevronRight } from '@tamagui/lucide-icons'
import React from 'react'
import { useLink } from 'solito/link'
import { Button, Card, CardProps, H4, Progress, SizableText, XStack, YStack } from 'tamagui'

export type NuggetCardProps = {
  icon: React.FC<IconProps>
  title?: string
  action?: {
    props: ReturnType<typeof useLink>
    text: string
  }
} & CardProps

export const NuggetCard = ({ title, icon: Icon, action, ...props }: NuggetCardProps) => {
  return (
    <Card br="$0" chromeless {...props}>
      <Card.Header my="auto" padded gap="$2" ai="center">
        <YStack theme="green" bg="$background" p="$4" br="$10">
          <Icon size="$3" o={0.8} />
        </YStack>
        <SizableText tt="capitalize" mt="$2" size="$2">
          {title}
        </SizableText>
      </Card.Header>
      <Card.Background>
        <LinearGradient
          br="$4"
          w="100%"
          h="100%"
          colors={['$color2', '$color3', '$color2']}
          start={[1, 1]}
          end={[0.85, 0]}
        />
      </Card.Background>
    </Card>
  )
}
