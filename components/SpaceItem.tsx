import { SizableText, XStack, YGroup, type YStackProps, styled, Circle } from 'tamagui'

export type SpaceItemProps = YStackProps & {
  rightLabel?: string
  isActive?: boolean
}

export const SpaceItem = ({ children, rightLabel, isActive, ...props }: SpaceItemProps) => {
  return (
    <YGroup.Item>
      <SpaceItemFrame isActive={!!isActive} {...props}>
        <Circle size={40} bg="$teal8" />
        <SizableText size="$4" flex={1} fontWeight="500">
          {children}
        </SizableText>
        {!!rightLabel && (
          <XStack rounded="$10" bg="$teal2" px="$3" py="$1.5">
            <SizableText size="$2" textTransform="capitalize">
              {rightLabel}
            </SizableText>
          </XStack>
        )}
      </SpaceItemFrame>
    </YGroup.Item>
  )
}

const SpaceItemFrame = styled(XStack, {
  bg: '$color1',
  items: 'center',
  justify: 'center',
  p: '$4',
  gap: '$4',

  variants: {
    isActive: {
      true: {
        bg: '$backgroundFocus',
      },
      false: {
        hoverStyle: {
          bg: '$backgroundHover',
        },
        pressStyle: {
          bg: '$backgroundPress',
        },
      },
    },
  } as const,
})
