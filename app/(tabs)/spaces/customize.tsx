import { Link, useLocalSearchParams, useNavigation } from 'expo-router'
import { View, useTheme, Text } from 'tamagui'
import { Platform, StyleSheet, useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  type SharedValue,
} from 'react-native-reanimated'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import { useHeaderHeight } from '@react-navigation/elements'
import { SubmitButton } from 'components'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export default function Customize() {
  const theme = useTheme()
  const navigation = useNavigation()
  const params = useLocalSearchParams()

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

  // useEffect(() => {
  //   if (talk) {
  //     navigation.setOptions({ headerRight: () => <Bookmark session={talk} /> })
  //   }
  // }, [navigation, talk])

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
                backgroundColor: 'teal',
              },
              headerStyle,
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
                backgroundColor: 'red',
                justifyContent: 'center',
              }}
            >
              <Text>Hello</Text>
              {/* <Text fontWeight="bold" fontSize={32} style={styles.talkTitle}>
                {talk?.title}
              </Text> */}
            </View>
          </Animated.View>
          <View
            style={{
              paddingTop: 16,
              paddingHorizontal: 16,
              backgroundColor: 'yellow',
            }}
          >
            <Text>Helllo</Text>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>
            <SubmitButton>Hello</SubmitButton>

            {/* {talk.speakers.map((speaker) => (
              <Link
                push
                key={speaker.id}
                href={{
                  pathname: '/speaker/[speaker]',
                  params: { speaker: speaker.id },
                }}
                asChild
              >
                <TouchableOpacity activeOpacity={0.8}>
                  <SpeakerDetails speaker={speaker} />
                </TouchableOpacity>
              </Link>
            ))} */}
            {/* <Section
              title="Date"
              value={
                isDayOne ? 'May 15, 2024 (Conference Day 1)' : 'May 15, 2024 (Conference Day 2)'
              }
            />
            <Section title="Time" value={formatSessionTime(talk, shouldUseLocalTz)} />
            <Section title="Venue" value={talk.room} />
            <Section title="Description" value={talk.description} /> */}
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

// function SpeakerDetails({ speaker }: { speaker: Speaker }) {
//   return (
//     <View style={styles.speaker}>
//       <SpeakerImage profilePicture={speaker.profilePicture} />
//       <View style={styles.speakerDetails}>
//         <ThemedText fontSize={18} fontWeight="bold">
//           {speaker.fullName}
//         </ThemedText>
//         <ThemedText fontSize={16} fontWeight="medium">
//           {speaker.tagLine}
//         </ThemedText>
//       </View>
//     </View>
//   )
// }

// function Section({ title, value }: { title: string; value: string | null }) {
//   if (!value) {
//     return null
//   }

//   return (
//     <View style={styles.sectionContainer}>
//       <ThemedText fontSize={18} fontWeight="bold">
//         {title}
//       </ThemedText>
//       <ThemedText fontSize={18} fontWeight="medium">
//         {value}
//       </ThemedText>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 250,
//     paddingTop: 50,
//     paddingHorizontal: theme.space16,
//     overflow: 'hidden',
//   },
//   contentContainer: {
//     borderBottomRightRadius: theme.borderRadius20,
//     borderBottomLeftRadius: theme.borderRadius20,
//   },
//   speaker: {
//     flexDirection: 'row',
//     marginBottom: theme.space12,
//   },
//   speakerDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   talkTitle: {
//     textAlign: 'center',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   reactLogo: {
//     position: 'absolute',
//     right: -100,
//     top: '30%',
//     height: 300,
//     width: 300,
//     opacity: 0.2,
//   },
//   sectionContainer: {
//     marginBottom: theme.space24,
//   },
//   content: {
//     paddingTop: theme.space16,
//     paddingHorizontal: theme.space16,
//   },
// })
