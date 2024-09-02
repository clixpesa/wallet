import { useNetInfo } from '@react-native-community/netinfo'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme, Theme } from 'ui'

const minHeight = 0

export function OfflineBanner() {
  const theme = useTheme()
  const netinfo = useNetInfo()
  const insets = useSafeAreaInsets()
  const height = useSharedValue(0)

  const isOffline = netinfo.isInternetReachable === true
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
    backgroundColor: 'green',
  }))

  return (
    <Animated.View style={animatedStyle}>
      <View
        style={{
          height: '100%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: theme.background.val,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 4,
            backgroundColor: theme.color5.val,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: theme.color1.val,
            }}
          >
            App is offline
          </Text>
        </View>
      </View>
    </Animated.View>
  )
}
