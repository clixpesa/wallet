import React, { useEffect, useRef } from 'react'
// import { Animated, PanResponder } from 'react-native'
import type { TabsContentProps } from 'tamagui'
import { Separator, Tabs, View, useEvent, SizableText } from 'tamagui'

const tabs = ['Loans', 'Offers', 'Requests']

export const TabBarSwippable = ({
  LoansView,
  OffersView,
  RequestsView,
}: {
  LoansView: React.ComponentType<unknown>
  OffersView: React.ComponentType<unknown>
  RequestsView: React.ComponentType<unknown>
}) => {
  // const boxHPosition = useRef(new Animated.Value(0)).current
  const [activeTabIndex, _setActiveTabIndex] = React.useState(0)
  const activeTabRef = useRef(activeTabIndex)
  activeTabRef.current = activeTabIndex

  const changeActiveTab = useEvent((activeTabIndex) => {
    _setActiveTabIndex(activeTabIndex)
  })

  useEffect(() => {
    changeActiveTab(activeTabIndex)
  })

  return (
    <Tabs
      flexDirection="column"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$color1"
      defaultValue={tabs[0]}
      flex={1}
      value={tabs[activeTabIndex]}
      alignItems="center"
      alignSelf="center"
      width="100%"
      $gtSm={{
        marginTop: '$4',
        maxWidth: 660,
      }}
    >
      <View
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        minWidth="100%"
        $gtMd={{
          borderRadius: 100,
        }}
      >
        <Tabs.List
          minWidth="100%"
          userSelect="none"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingVertical="$2"
          height="$4"
        >
          {tabs.map((tab, index) => (
            <Tabs.Tab
              unstyled
              key={index}
              value={tab}
              flex={1}
              onPress={() => {
                changeActiveTab(index)
              }}
              pressStyle={{ opacity: 0.5 }}
            >
              <SizableText
                theme={index !== activeTabIndex ? 'alt1' : undefined}
                fontWeight={index !== activeTabIndex ? undefined : '700'}
              >
                {tab}
              </SizableText>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </View>
      <Separator />
      <TabsContent value="Loans">
        <LoansView />
      </TabsContent>
      <TabsContent value="Offers">
        <OffersView />
      </TabsContent>
      <TabsContent value="Requests">
        <RequestsView />
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      key={props.value}
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      height={600}
      width="100%"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}
