import * as Sentry from '@sentry/react-native'
import { Component, ErrorInfo, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { H3, View, Button, Text, YStack } from 'ui'

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
    console.log('state', this.state.hasError)
    if (this.state.hasError) {
      // TODO: add expo-updates and force app to start button
      return (
        <View>
          {/* <H3>Something went wrong.</H3> */}
          <Text style={styles.errorText}>Something went wrong.</Text>
          <Text style={styles.errorSubtext}>Please try again later.</Text>
        </View>
        // <YStack gap="$4" f={1} justifyContent="center" alignItems="center">
        //   <View>
        //     <Text fontSize={28}>Oops!</Text>
        //     <H3>Something went wrong</H3>
        //     <Text>Try again later</Text>
        //   </View>

        //   <Button borderRadius="$10" width={300}>
        //     Try Again
        //   </Button>
        // </YStack>
      )
    }

    return this.props.children
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e3e',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#666',
  },
})
