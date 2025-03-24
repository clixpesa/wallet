import { useNetInfo } from '@react-native-community/netinfo'
import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'utils/useSafeAreaInsets'
import { Text, View } from 'tamagui'

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
  }))

  //TODO: Check the white line in dark mode

  return (
    <Animated.View style={animatedStyle}>
      <View bg="$background" height="100%" position="absolute" b={0} r={0} l={0}>
        <View items="center" py={4} bg="$color5">
          <Text fontWeight="bold">App is offline</Text>
        </View>
      </View>
    </Animated.View>
  )
}
