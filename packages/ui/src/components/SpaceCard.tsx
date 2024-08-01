import { LinearGradient } from '@tamagui/linear-gradient'
import {
  Avatar,
  Card,
  CardProps,
  H4,
  Image,
  Paragraph,
  TooltipSimple,
  XStack,
  YStack,
} from 'tamagui'

export const SpaceCard = ({
  title,
  description,
  authors,
  withImages,
  ...props
}: {
  title: string
  description?: string
  authors?: { avatar: string; name: string; id: number }[]
  withImages?: boolean
} & CardProps) => {
  return (
    <Card br="$4" overflow="hidden" {...props}>
      <Card.Header>
        {withImages && (
          <Image
            br="$4"
            source={{
              uri: `https://picsum.photos/seed/${title}/1000/500`,
            }}
            h={150}
            $sm={{
              h: 100,
            }}
          />
        )}

        <XStack pt="$2" ai="center" jc="space-between">
          <YStack gap="$1">
            <H4 size="$5" tt="capitalize">
              {title}
            </H4>
            {!!description && (
              <Paragraph size="$3" theme="alt1">
                {description}
              </Paragraph>
            )}
          </YStack>

          {authors && authors.length > 0 && (
            <XStack>
              {authors.map((author) => (
                <TooltipSimple key={author.id} label={author.name}>
                  <Avatar circular size={34} ml="$-3">
                    <Avatar.Image
                      source={{
                        uri: author.avatar,
                        width: 34,
                        height: 34,
                      }}
                    />
                  </Avatar>
                </TooltipSimple>
              ))}
            </XStack>
          )}
        </XStack>
      </Card.Header>
      <Card.Background>
        <LinearGradient
          // br="$4"
          w="100%"
          h="100%"
          colors={['$color2', '$color1']}
          start={[1, 1]}
          end={[0.85, 0]}
        />
      </Card.Background>
    </Card>
  )
}
