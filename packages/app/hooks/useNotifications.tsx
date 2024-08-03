import Constants from 'expo-constants'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { useEffect, useRef } from 'react'
import { Platform } from 'react-native'

type NotificationListener = ReturnType<typeof Notifications.addNotificationReceivedListener>
type ResponseListener = ReturnType<typeof Notifications.addNotificationResponseReceivedListener>

/**
 *
 * Note: Notifications are **NOT** supported on the iOS simulator or Android simulator.
 *
 * {@link https://docs.expo.dev/versions/latest/sdk/notifications/#usage}
 *
 */

export const useExpoNotifications = () => {
  const notificationListener = useRef<NotificationListener>()
  const responseListener = useRef<ResponseListener>()

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.info(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.info(response)
    })

    return () => {
      if (notificationListener.current && responseListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [])

  return {
    schedulePushNotification,
    registerForPushNotificationsAsync,
  }
}

async function schedulePushNotification(props: {
  title: string
  body: string
  data: Record<string, unknown>
  triggerSeconds: number
}) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: props.title ?? 'Expo Notification',
      body: props.body ?? 'Placeholder data',
      data: props.data ?? { data: 'goes here' },
    },
    trigger: { seconds: props.triggerSeconds ?? 2 },
  })
}

async function registerForPushNotificationsAsync(props?: {
  color: string
  vibrationPattern: number[]
  importance: Notifications.AndroidImportance
  name: string
}) {
  const defaultProps = {
    color: props?.color ?? '#FF231F7C',
    name: props?.name ?? 'default',
    vibrationPattern: props?.vibrationPattern ?? [0, 250, 250, 250],
    importance: props?.importance ?? 7,
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', defaultProps)
  }

  if (Device.isDevice) {
    const { status: permissions } = await Notifications.getPermissionsAsync()
    const permissionsGranted = permissions === 'granted'

    if (!permissionsGranted) {
      const { status: requestPermissions } = await Notifications.requestPermissionsAsync()
      const requestPermissionsGranted = requestPermissions === 'granted'
      if (!requestPermissionsGranted) {
        alert('Failed to get push token for push notification!')
        return
      }
    }

    /**
     * @see https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
     */

    try {
      const { data } = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.easConfig?.projectId,
      })
      return data
    } catch (e) {
      if (e instanceof Error) {
        console.error(e)
        alert('Must use physical device for Push Notifications')
      }
    }
  }
}
