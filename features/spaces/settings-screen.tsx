import { View, useTheme } from 'tamagui'
import { router, useLocalSearchParams } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  type SharedValue,
} from 'react-native-reanimated'

import { Actions, SpaceSettings } from 'components'
import { PencilLine, Plus, UsersRound } from '@tamagui/lucide-icons'
import { useHeaderHeight } from '@react-navigation/elements'

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
    <View flex={1}>
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
              height: 250,
              paddingTop: 50,
              paddingHorizontal: 16,
              marginBottom: 16,
              overflow: 'hidden',
              backgroundColor: theme.teal8.val,
            },
          ]}
        ></Animated.View>

        <SpaceSettings>
          <SpaceSettings.Items>
            <SpaceSettings.Title>Your Space</SpaceSettings.Title>
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

        <Actions my="$4">
          <Actions.Items>
            <Actions.Title>Action</Actions.Title>
            <Actions.Group>
              <Actions.Item icon={UsersRound} description="Save and achieve your goals together">
                Invite your friends
              </Actions.Item>
            </Actions.Group>

            <Actions.Group>
              <Actions.Item>Report an issue</Actions.Item>
            </Actions.Group>

            <Actions.Group>
              <Actions.Item textColor="$red10">Close space</Actions.Item>
            </Actions.Group>
          </Actions.Items>
        </Actions>
      </AnimatedScrollView>

      {Platform.OS === 'android' ? (
        <HeaderBackgroundAndroid scrollTranslationY={translationY} />
      ) : (
        <HeaderBackgroundIOS scrollTranslationY={translationY} />
      )}
    </View>
  )
}

// We use a transparent header background on Android to provide a nice looking
// header that expands to the top of the screen. This component ensures that
// a header background becomes visible as we scroll past the header, so we don't
// just see a floating back button.
function HeaderBackgroundAndroid({
  scrollTranslationY,
}: {
  scrollTranslationY: SharedValue<number>
}) {
  const headerHeight = useHeaderHeight()
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollTranslationY.value, [50, 150], [0, 1]),
  }))

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          height: headerHeight,
          position: 'absolute',
          elevation: 4,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'teal',
        },
      ]}
    />
  )
}

function HeaderBackgroundIOS({
  scrollTranslationY,
}: {
  scrollTranslationY: SharedValue<number>
}) {
  const headerHeight = useHeaderHeight()
  // const colorScheme = useColorScheme()
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollTranslationY.value, [0, 150], [0, 1], Extrapolation.CLAMP),
  }))

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          elevation: 4,
          top: 0,
          left: 0,
          right: 0,
        },
      ]}
    >
      {/* <BlurView
        intensity={40}
        tint={colorScheme === 'light' ? 'systemThinMaterialLight' : 'systemThinMaterialDark'}
        style={{ height: headerHeight, flex: 1 }}
      /> */}
    </Animated.View>
  )
}
