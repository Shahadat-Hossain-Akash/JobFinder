import { Redirect, Stack, useRouter } from "expo-router";
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS, FONT, icons, images, SHADOWS, SIZES} from '../constants'
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";
import Index from "./index";


export default function Splash() {

  const navigation = useNavigation();

  const goToHome = () => {
    
  };

    return (
        <SafeAreaView style={styles.container}>
        <Stack.Screen options={{
            headerStyle: {backgroundColor:COLORS.white,},
            headerShadowVisible:false,
            headerLeft: () => null,
            headerTitle:""
            
        }}/>
        <View style={{flex:1,backgroundColor:COLORS.white}}>
        <ImageBackground
            source={icons.briefcase}
            resizeMode='cover'
            style={styles.image}>
            <View style={styles.textContainer}>
            <Text style={styles.textJob}>Job</Text>
            <Text style={styles.textFinder}>Finder</Text>
            <Image style={styles.imageWork} source={icons.work} resizeMode="contain"/>
            </View>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.jobButton}>
                <Text style={{color:COLORS.white,fontSize:28,fontFamily:FONT.medium}}><Link href='/home'>Click for job</Link></Text>
            </TouchableOpacity>
            </View>
            
        </ImageBackground>
        </View>
        

      
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: COLORS.white,
      padding: 8,
    },
    content: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        zIndex:-1,
        paddingBottom:270,
      },
      textContainer: {
        flexDirection:'row',
        width:'100%',
        height: 100,
        alignItems:'center',
        justifyContent:'center',
        marginTop:260,
        marginBottom:160
      },
      textJob:{
        paddingHorizontal:4,
        fontSize: 48,
        fontFamily: FONT.bold,
        color:COLORS.primary
      },
      textFinder:{
        paddingHorizontal:4,
        fontSize: 48,
        fontFamily: FONT.bold,
        color:COLORS.white,
      },
      imageWork: {
        width: 40,
        height:40,
        marginHorizontal:4
      },
      jobButton:{
        paddingHorizontal:72,
        paddingVertical:20,
        backgroundColor:COLORS.tertiary,
        borderRadius:10,
        elevation:24,
        shadowColor:'#808080'
      }
  });


