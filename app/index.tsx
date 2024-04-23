import { StyleSheet, Text, View,Image,TouchableOpacity,Linking} from 'react-native'
import React from 'react'
import welcomeImage from '@/assets/images/welcome.png';
import { Link } from "expo-router";
import Colors from '@/constants/Colors';
const welcome_image  = Image.resolveAssetSource(welcomeImage).uri
const Page = () => {
    const openLink = () =>{
        Linking.openURL("https://www.whatsapp.com/");
    }
  return (
    <View style={styles.container}>
      <Image source={{uri:welcome_image}} style={styles.welcome}/>
      <Text style={styles.headline}>Welcome to Whatsapp</Text>
      <Text style={styles.description}>
        Read Our{' '}
        <Text style={styles.links} onPress={openLink}>
            Policy
        </Text>
        .{'Tap "Agree & Continue" to accept the '}
        <Text style={styles.links} onPress={openLink}>
        Terms of Service
        </Text>
        .
      </Text>
      <Link href="/otp" replace asChild>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent: 'center',
        backgroundColor:'#fff',
    },
    welcome:{
        width:'100%',
        height:300,
        marginBottom:80,

    },
    headline: {
        fontSize:24,
        fontWeight:"bold",
        marginVertical:20,
        marginHorizontal:50
      },
      description: {
        fontSize:14,
        textAlign: "center",
        marginBottom: 80,
        color:Colors.gray
      },
      links: {
        color:Colors.primary
      },
      button:{
        width:"100%",
        alignItems: "center",
    
      },
      buttonText:{
        fontSize:22,
        color:Colors.primary
      }

})