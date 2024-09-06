import * as Sentry from '@sentry/react-native'
import { Component, ErrorInfo, ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
        <View style={styles.errorContainer}>
          <Text>Something went wrong.</Text>
          <Text>Please try again later.</Text>
        </View>
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
    backgroundColor: '#f8f8f8',
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
