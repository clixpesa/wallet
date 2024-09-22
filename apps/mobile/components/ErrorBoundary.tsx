import * as Sentry from '@sentry/react-native'
import { Component, ErrorInfo, ReactNode } from 'react'
import { H3, View, Button, YStack, SizableText } from 'ui'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
    Sentry.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      // TODO: add expo-updates and force app to start button
      return (
        <YStack gap="$8" f={1} jc="center" ai="center" bg="$background" paddingHorizontal="$4">
          <View ai="center">
            <H3 mb="$2">Oops! Something went wrong</H3>
            <SizableText theme="alt1">Please try again later</SizableText>
          </View>
          <Button width="100%" borderRadius="$10" theme="teal" themeInverse>
            Try Again
          </Button>
        </YStack>
      )
    }
    return this.props.children
  }
}
