import { LinearGradient } from '@tamagui/linear-gradient'
import { X } from '@tamagui/lucide-icons'
import { AnimatePresence, Card, type CardProps, type ColorTokens, YStack } from 'tamagui'

export const Banner = ({
  children,
  colors = ['$color2', '$color2', '$color4'],
  ...props
}: {
  colors?: ColorTokens[]
} & CardProps) => {
  return (
    <Card {...props} rounded="$8" bordered>
      <Card.Header animation="bouncy" gap="$2">
        {children}
      </Card.Header>
      <Card.Background>
        <Card.Background rounded="$8">
          <LinearGradient
            scale={4}
            x={50}
            animation="bouncy"
            rounded="$2"
            width="100%"
            height="100%"
            colors={colors}
            start={[0, 0]}
            end={[1, 1]}
          />
        </Card.Background>
      </Card.Background>
      <Card.Background items="flex-end">
        <AnimatePresence>
          <YStack
            pr="$3"
            pt="$3"
            animation="bouncy"
            enterStyle={{ x: -6, opacity: 0 }}
            exitStyle={{ x: -6, opacity: 0 }}
            x={0}
            theme="alt2"
            opacity={0.9}
          >
            <X size={24} />
          </YStack>
        </AnimatePresence>
      </Card.Background>
    </Card>
  )
}
