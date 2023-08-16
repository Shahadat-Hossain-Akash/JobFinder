import {View, Text, Share} from "react-native";
import {useState} from "react";
import {ScrollView, SafeAreaView} from 'react-native'

import React from 'react'
import {Stack, useRouter} from "expo-router";
import {COLORS, icons, images, SHADOWS, SIZES} from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import { useFonts } from 'expo-font';
import SidebarOverlay from "../components/common/sideoverlay/SidebarOverlay";

const Home = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>

        <Stack.Screen options={{
            headerStyle: {backgroundColor:COLORS.white,},
            headerShadowVisible:false,
            headerLeft: () => (
                {/*<ScreenHeaderBtn iconUrl={icons.menu} dimension='50%' bgColor={COLORS.tertiary} shadow={SHADOWS.small} />*/},
                <SidebarOverlay/>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension='50%' bgColor={COLORS.white} />
            ),
            headerTitle:""
        }}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding:SIZES.medium,backgroundColor:COLORS.white}}>
                <Welcome search={search} setSearch={setSearch} handleClick={() => {if (search) {router.push(`/search/${search}`)}}}/>
                <Popularjobs/>
                <Nearbyjobs/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home
