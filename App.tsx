import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './SRC/navigations/BootomTabNavigations'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}