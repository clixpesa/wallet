import React, { useEffect, useRef } from 'react'
import type { TabsContentProps } from 'tamagui'
import { Separator, Tabs, View, useEvent, SizableText } from 'tamagui'

const tabs = ['Loans', 'Offers', 'Requests']

export const TabBarSwippable = ({
  InitialView,
  SecondView,
  ThirdView,
}: {
  InitialView: React.ComponentType<unknown>
  SecondView: React.ComponentType<unknown>
  ThirdView: React.ComponentType<unknown>
}) => {
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
      paddingHorizontal="$2"
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
          backgroundColor="$background"
          justifyContent="space-between"
        >
          {tabs.map((tab, index) => (
            <Tabs.Tab
              unstyled
              key={index}
              value={tab}
              alignItems="center"
              flex={1}
              flexBasis={0}
              flexShrink={1}
              height="$4"
              pe={activeTabIndex === index ? 'none' : 'auto'}
              onPress={() => {
                changeActiveTab(index)
              }}
              pressStyle={{ opacity: 0.5 }}
            >
              <SizableText
                color={index !== activeTabIndex ? '$color10' : '$teal10'}
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
        <InitialView />
      </TabsContent>
      <TabsContent value="Offers">
        <SecondView />
      </TabsContent>
      <TabsContent value="Requests">
        <ThirdView />
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
      backgroundColor="$background"
      height={600}
      width="100%"
      minWidth="$100%"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}
