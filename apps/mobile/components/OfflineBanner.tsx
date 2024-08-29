import { useNetInfo } from '@react-native-community/netinfo'
import { getFontSized } from '@tamagui/get-font-sized'
import { Info } from '@tamagui/lucide-icons'
import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Banner, Text, View, getTokenValue, styled, useTheme } from 'ui'

const minHeight = 0

export function OfflineBanner() {
  const netinfo = useNetInfo()
  const insets = useSafeAreaInsets()
  const height = useSharedValue(0)

  const isOffline = netinfo.isInternetReachable === false
  const maxHeight = 28 + insets.bottom / 2

  useEffect(() => {
    if (isOffline) {
      height.value = withTiming(maxHeight)
    } else {
      height.value = withTiming(minHeight)
    }
  }, [isOffline, height, maxHeight])

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    // marginTop: interpolate(height.value, [minHeight, maxHeight], [minHeight, -insets.bottom + 1]),
  }))

  console.log('height', height)

  return (
    <Animated.View style={animatedStyle}>
      <View height="100%" position="absolute" bottom={0} right={0} left={0}>
        <SizableText size="$3">App is offline</SizableText>
      </View>
    </Animated.View>
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
