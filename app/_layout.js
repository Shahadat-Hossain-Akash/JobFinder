import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import React from 'react'



const Layout = () => {
  const [fontsLoaded] = useFonts({
    'RM-Regular': require('../assets/fonts/RobotoMono-Regular.ttf'),
    'RM-Medium': require('../assets/fonts/RobotoMono-Medium.ttf'),
    'RM-Bold': require('../assets/fonts/RobotoMono-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <Stack initialRouteName="home">
    <Stack.Screen name="home" />
  </Stack>
  )
}

export const unstable_settings = {initialRouteName: 'home'}

export default Layout
