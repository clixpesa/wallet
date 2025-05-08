import { Settings, Plus, Minus, Goal } from '@tamagui/lucide-icons'
import { View, useTheme, H2, SizableText, styled, Button, XStack, YStack } from 'tamagui'
import { Link, useLocalSearchParams } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated'

import { ActionBanner } from 'components'
import { AutomaticTransferSwitch } from 'components/AutomaticTransferSwitch'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export default function SpaceDetailScreen() {
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
        >
          <YStack gap="$4" mt="$8">
            <SizableText fontWeight="500">{params.name}</SizableText>
            <H2 fontFamily="$heading" size="$2">
              {`Kshs ${params.amount.toLocaleString()}`}
            </H2>

            <XStack gap="$2">
              <Link href="/profile/edit" asChild push>
                <CustomButton>
                  <Button.Icon>
                    <Plus size={24} />
                  </Button.Icon>
                  Add cash
                </CustomButton>
              </Link>

              <Link href="/space/add-goal" asChild push>
                <CustomButton>
                  <Button.Icon>
                    <Minus size={24} />
                  </Button.Icon>
                  Withdraw
                </CustomButton>
              </Link>

              <Link href="/space/settings" asChild push>
                <CustomButton>
                  <Button.Icon>
                    <Settings size={24} />
                  </Button.Icon>
                  Settings
                </CustomButton>
              </Link>
            </XStack>
          </YStack>
        </Animated.View>

        <YStack mx="$4" gap="$8">
          <ActionBanner icon={Goal} title="It's easier with a goal" />
          <AutomaticTransferSwitch />
        </YStack>
      </AnimatedScrollView>

      {/* {Platform.OS === 'android' ? (
        <HeaderBackgroundAndroid scrollTranslationY={translationY} />
      ) : (
        <HeaderBackgroundIOS scrollTranslationY={translationY} />
      )} */}
    </View>
  )
}

const CustomButton = styled(Button, {
  flexDirection: 'column',
  items: 'flex-start',
  justify: 'center',
  width: 100,
  height: 80,
  px: '$3',
  rounded: '$6',
  bg: '$teal2',
  fontWeight: 600,
  color: '$teal10',
  theme: 'teal',

  pressStyle: {
    bg: '$backgroundPress',
  },
})
