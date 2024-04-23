import { KeyboardAvoidingView, StyleSheet, Text,View,Linking,TouchableOpacity, ActivityIndicator,} from 'react-native'
import React,{useState} from 'react'
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaskInput from 'react-native-mask-input';
const Page = () => {
    const [loading,setLoading] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('');
    const router = useRouter();
    const openLink = () =>{
        Linking.openURL("https://www.whatsapp.com/");
    }
    const sendOTP = async () => {
        setLoading(true);
        setTimeout(()=>{
           setLoading(false);
           router.push(`/verify/${phoneNumber}`) 
        },2000)
    };
    const trySignIn = async () => {};
    const PAK_PHONE = [
        `+`,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ];
  return (
    <KeyboardAvoidingView style={{flex:1}}>
          {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={{ fontSize: 18, padding: 10 }}>Sending code...</Text>
        </View>
      )}
        <View style={styles.container}>
        <Text style={styles.description}>
          WhatsApp will need to verify your account. Carrier charges may apply
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Pakistan </Text>
            <Ionicons name="arrow-forward" size={22} color={Colors.gray} />

          </View>
          <View style={styles.separator} />
          <MaskInput
        style={styles.input}
      value={phoneNumber}
      autoFocus
      placeholder="+92"
      keyboardType="numeric"
      onChangeText={(masked, unmasked) => {
        setPhoneNumber(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={PAK_PHONE}
    />
      </View>
      <Text style={styles.legal}>
          You must be{" "}
          <Text style={styles.link} onPress={openLink}>
            at least 16 years old
          </Text>{" "}
          to register. Learn how WhatsApp works with the{" "}
          <Text style={styles.link} onPress={openLink}>
            Meta component
          </Text>
        </Text>
        <View style={{flex:1}}/>
        <TouchableOpacity onPress={sendOTP} style={[styles.button,phoneNumber !== ""?styles.enabled:null]}>
          <Text style={[phoneNumber !== ""?styles.enabled:null]}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Page

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: Colors.background,
        gap: 20,
      },
      description: {
        fontSize: 14,
        color: Colors.gray,
      },
      legal: {
        fontSize: 12,
        textAlign: "center",
        color: "#000",
      },
      link: {
        color: Colors.primary,
      },
      button: {
        width: "100%",
        alignItems: "center",
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 10,
    
      },
      enabled: {
        backgroundColor: Colors.primary,
        color: "#fff",
      },
      buttonText: {
        color: Colors.gray,
        fontSize: 22,
        fontWeight: "500",
      },
      list: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        padding: 10,
      },
      listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 6,
        marginBottom: 10,
      },
      listItemText: {
        fontSize: 18,
        color: Colors.primary,
      },
      separator: {
        width: "100%",
        height: 1,
        backgroundColor: Colors.gray,
        opacity: 0.2,
      },
      input: {
        backgroundColor: "#fff",
        width: "100%",
        fontSize: 16,
        padding: 6,
        marginTop: 10,
      },
    
      loading: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      },
})