import React, { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

type HorizontalScrollProps = {}

export const HorizontalScroll: React.FC<PropsWithChildren<HorizontalScrollProps>> = ({
  children
}) => {
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {children}
      </ScrollView>
    </>
  )
}