import { getFontSized } from '@tamagui/get-font-sized'
import { Info } from '@tamagui/lucide-icons'
import type { FontSizeTokens } from 'tamagui'
import { View, getTokenValue, styled, Text } from 'tamagui'

export const Banner = ({
  size = '$3',
  children,
}: {
  size?: FontSizeTokens
  children?: React.ReactNode
}) => {
  return (
    <View height="100%" position="absolute" bottom={0} right={0} left={0}>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        // padding={size}
        // paddingVertical={size}
        gap={size}

        // borderRadius="$4"
        // margin="$5"
      >
        <Info size={getTokenValue(size as any, 'size') * 0.5} />
        <SizableText size={size}>{children}</SizableText>
      </View>
    </View>
  )
}

const SizableText = styled(Text, {
  name: 'SizableText',
  fontFamily: '$body',

  variants: {
    size: {
      '...fontSize': getFontSized,
    },
  } as const,

  defaultVariants: {
    size: '$true',
  },
})
