import { View, useTheme, H2, SizableText, styled, Button, XStack, YStack } from 'tamagui'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  type SharedValue,
} from 'react-native-reanimated'

import { SpaceSettings } from 'components'
import { PencilLine, Plus, Pencil } from '@tamagui/lucide-icons'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export default function SpaceSettingsScreen() {
  const theme = useTheme()
  const params = useLocalSearchParams()
  const insets = useSafeAreaInsets()

  // Animated header on scroll
  const translationY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y
  })

  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translationY.value,
            [-120, 0, 150],
            [-90, 0, 120],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(translationY.value, [-120, 0], [1.4, 1], Extrapolation.CLAMP),
        },
      ],
      opacity: interpolate(translationY.value, [0, 100], [1, 0.6]),
    }
  })

  return (
    <View style={{ flex: 1 }}>
      {/* Header Section */}
      <AnimatedScrollView
        style={{ flex: 1 }}
        onScroll={scrollHandler}
        scrollEventThrottle={8}
        contentContainerStyle={[
          {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
          {
            paddingBottom: insets.bottom + 24,
          },
        ]}
      >
        <Animated.View
          style={[
            {
              height: 300,
              paddingTop: 60,
              paddingHorizontal: 16,
              marginBottom: 16,
              overflow: 'hidden',
              backgroundColor: theme.teal8.val,
            },
            headerStyle,
          ]}
        ></Animated.View>

        <YStack mx="$4" gap="$8"></YStack>

        <SpaceSettings my="$4">
          <SpaceSettings.Items>
            <SpaceSettings.Title>Your space</SpaceSettings.Title>
            <SpaceSettings.Group>
              <SpaceSettings.Item icon={PencilLine} rightLabel="New Dog">
                Name
              </SpaceSettings.Item>
              <SpaceSettings.Item
                icon={Plus}
                rightLabel="Add goal"
                onPress={() => router.push('/space/add-goal')}
              >
                Add goal
              </SpaceSettings.Item>
              <SpaceSettings.Item icon={Plus} rightLabel="Add deadline">
                Deadline
              </SpaceSettings.Item>
            </SpaceSettings.Group>
          </SpaceSettings.Items>
        </SpaceSettings>
      </AnimatedScrollView>
    </View>
  )
}
