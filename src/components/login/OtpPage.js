import { SafeAreaView, View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { text } from '@fortawesome/fontawesome-svg-core';


const Home = () => {

    const OI1 = useRef();
    const OI2 = useRef();
    const OI3 = useRef();
    const OI4 = useRef();

    return (
        <SafeAreaView style={style.container}>
            {/* main view for all */}
            <SafeAreaView>

                {/* logo pawsaath */}
                <View>
                    <Image style={style.logo} source={require("../../assets/logo.png")} />
                </View>

                <View>
                    <Text style={style.ConfirmText}>Confirm your Phone Number</Text>
                </View>

                <View>
                    <Text style={style.OtpSent}>
                        Enter the OTP sent to you
                    </Text>
                    <Text style={style.OtpSentSec}>
                        by SMS at
                    </Text>
                    <Text style={style.OtpSentNum}>
                        +91 9892 016 075
                    </Text>
                </View>


                <View style = {style.optWapper}>
                <TextInput style = {style.otpinput} 
                ref={OI1}
                keyboardType='number-pad' 
                maxLength={1}
                onChangeText={txt =>{
                    if(txt.length >=1) {
                        OI2.current.focus();
                    }else if(txt.length<1){
                        OI1.current.focus();
                    }
                        
                }}
                />
               
                <TextInput style = {style.otpinput} 
                ref={OI2} 
                keyboardType='number-pad' 
                maxLength={1}
                onChangeText={txt =>{
                    if(txt.length >=1){
                         OI3.current.focus();
                    }else if(txt.length<1){
                        OI1.current.focus();
                    }
                       
                }}/>
               
                <TextInput style = {style.otpinput} 
                ref={OI3} 
                keyboardType='number-pad' 
                maxLength={1}
                onChangeText={txt =>{
                    if(txt.length >=1){ 
                        OI4.current.focus();
                    }else if(txt.length < 1){
                        OI2.current.focus();
                    }
                }}/>
               
                <TextInput style = {style.otpinput} 
                ref={OI4} 
                keyboardType='number-pad' 
                maxLength={1}
                onChangeText={txt =>{
                    if(txt.length >=1){ 
                        OI4.current.focus();
                    }else if(txt.length < 1){
                        OI3.current.focus();
                    }
                }}
                />
                </View>

                <View><Text style={style.RemainingTime}>Remaining Time : 120</Text></View>
                <View style={style.btnContainer}>
                    <Button title="Submit" color="#FF564F" onPress={this.submitPressed} />
                </View>

                <View>
                    <Text style={style.NotReceive}>Haven’t received an SMS</Text>
                </View>

                <TouchableOpacity>
                    <Text style={style.Resend}>Resend</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF4E2'
      },
      
    logo: {
        width: 240,
        height: 100,
        position: 'absolute',
        top: 56.31,
        left: 67.03
    },
    ConfirmText: {
        color: "#FF564F",
        top: 180,
        textAlign: "center",
        fontSize: 20
    },
    OtpSent: {
        textAlign: "center",
        top: 219,
        left: 62,
        width: 297,
        height: 50,
        fontSize: 24
    },
    OtpSentSec: {
        textAlign: "center",
        top: 204,
        left: -25,
        width: 297,
        height: 50,
        fontSize: 23
    },
    OtpSentNum: {
        fontSize: 22,
        letterSpacing: -1,
        fontWeight: "900",
        top: 155,
        left: 182
    },
    RemainingTime: {
        textAlign: "center",
        color: "#FF564F",
        top: 270,
        fontSize: 16
    }, btnContainer: {
        marginTop: 240,
        height: 100,
        width: 270,
        borderRadius: 10,
        left: 75,
        top: 50,
    },
    NotReceive:{
        top:10,
        textAlign:"center",
        fontSize:16,
        color:"#9D9D9D"
    },
    Resend:{
        top:10,
        textAlign:"center",
        fontSize:17,
        color:"#9D9D9D",
        fontWeight:"900"
    },
    otpinput:{
        width:49,
        height:47,
        borderRadius:10,
        backgroundColor:"#fff",
        alignSelf:"center",
        top:210,
        textAlign:"center",
        fontSize:20
    },
    optWapper:{
        flex:1,
        flexDirection:"row",
        gap:20,
        justifyContent:"center"
    }

})

export default Home