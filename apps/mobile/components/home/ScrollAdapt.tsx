import { ScrollView, useMedia } from 'ui'

export function ScrollAdapt({
  children,
  withSnap = false,
  itemWidth,
}: {
  children: React.ReactNode
  withSnap?: boolean
  itemWidth?: number
}) {
  const { md } = useMedia()
  return md ? (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      {...(itemWidth && { snapToInterval: itemWidth })}
      snapToAlignment="start"
      {...(withSnap && { decelerationRate: 0.9 })}
    >
      {children}
    </ScrollView>
  ) : (
    <ScrollView>{children}</ScrollView>
  )
}
