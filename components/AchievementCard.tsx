// import { LinearGradient } from '@tamagui/linear-gradient'
import { Card, type CardProps, H4, Progress, SizableText, XStack, YStack } from 'tamagui'

export type AchievementCardProps = {
  title?: string
  progress: {
    current: number
    full: number
    label?: string
  }
} & CardProps

export const AchievementCard = ({ title, progress, ...props }: AchievementCardProps) => {
  return (
    <Card rounded="$6" {...props} bg="$color1">
      <Card.Header my="auto" gap="$3">
        <YStack gap="$2">
          <XStack justify="space-between">
            <H4 size="$2">{title} 0%</H4>
            <XStack items="center">
              <SizableText size="$4" theme="alt1">
                {progress.label} {progress.current}
              </SizableText>
              <SizableText size="$4" theme="alt1">
                {' '}
                / {progress.label} {progress.full}
              </SizableText>
            </XStack>
          </XStack>

          <Progress bg="$color4" value={6}>
            <Progress.Indicator
              bg="$teal10"
              animation="bouncy"
              width="100%"
              rounded="$6"
            />
          </Progress>

          <XStack items="center">
            <SizableText size="$4" theme="alt1">
              8 April 2025
            </SizableText>
            <SizableText size="$4" theme="alt1">
              {' '}
              ~ 1 month to go
            </SizableText>
          </XStack>
        </YStack>
      </Card.Header>
      <Card.Background>
        {/* <LinearGradient
          rounded="$6"
          width="100%"
          height="100%"
          colors={['$color2', '$color3', '$color2']}
          start={[1, 1]}
          end={[0.85, 0]}
        /> */}
      </Card.Background>
    </Card>
  )
}
