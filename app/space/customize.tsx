import { useHeaderHeight } from '@react-navigation/elements'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { View, useTheme, H2 } from 'tamagui'
import { Platform, useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Input } from 'components/forms/inputs/components/inputParts'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  type SharedValue,
} from 'react-native-reanimated'

import { SubmitButton, Chip } from 'components'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

const spaceNames = ['Holidays', 'Savings', 'Gift', 'Rainy day', 'Education', 'Renovation']

export default function Customize() {
  const theme = useTheme()
  const navigation = useNavigation()
  const params = useLocalSearchParams()

  // Animated header on scroll
  const translationY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y
  })

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>
      <>
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
                overflow: 'hidden',
                backgroundColor: theme.teal8.val,
              },
            ]}
          >
            {/* <Image
                tintColor={iconColor}
                source={require('../../assets/images/react-logo.png')}
                style={styles.reactLogo}
              /> */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'green',
                // justifyContent: 'center',
              }}
            >
              <H2 fontFamily="$heading" size="$2" my="$7">
                Customize
              </H2>
              {/* <Text fontWeight="bold" fontSize={32} style={styles.talkTitle}>
                {talk?.title}
              </Text> */}
            </View>
          </Animated.View>
          <View
            style={{
              paddingTop: 16,
              paddingHorizontal: 16,
            }}
          >
            <View flexDirection="row" flexWrap="wrap" gap="$3">
              {spaceNames.map((name) => (
                <Chip
                  theme="teal_alt1"
                  bg="$teal4"
                  circular
                  key={name}
                  pressable
                  size="$2.5"
                  onPress={() => {
                    setTimeout(() => {
                      alert('pressed')
                    })
                  }}
                >
                  <Chip.Text>{name}</Chip.Text>
                </Chip>
              ))}
            </View>
          </View>
        </AnimatedScrollView>

        {Platform.OS === 'android' ? (
          <HeaderBackgroundAndroid scrollTranslationY={translationY} />
        ) : (
          <HeaderBackgroundIOS scrollTranslationY={translationY} />
        )}
      </>
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
  const theme = useTheme()
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
          backgroundColor: theme.teal10.val,
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
  const colorScheme = useColorScheme()
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
