import { useNetInfo } from '@react-native-community/netinfo'
import { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View } from 'ui'

const minHeight = 0

export function OfflineBanner() {
  const netinfo = useNetInfo()
  const insets = useSafeAreaInsets()
  const height = useSharedValue(0)

  const isOffline = netinfo.isInternetReachable === false
  const maxHeight = 28 + insets.bottom / 1

  useEffect(() => {
    if (isOffline) {
      height.value = withTiming(maxHeight)
    } else {
      height.value = withTiming(minHeight)
    }
  }, [isOffline, height, maxHeight])

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }))

  return (
    <Animated.View style={animatedStyle}>
      <View bg="$background" h="100%" position="absolute" bottom={0} right={0} left={0}>
        <View ai="center" paddingVertical={4} bg="$color5">
          <Text fow="bold">App is offline</Text>
        </View>
      </View>
    </Animated.View>
  )
}
