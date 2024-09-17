import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform } from "react-native";

const Address = () => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.container}
                contentOffset={{ x: 0, y: 24 }}
                ref={this._scrollViewRef}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingTop: 24 }}
                contentInsetAdjustmentBehavior="always"
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                enableOnAndroid={true}
                extraHeight={32}
                extraScrollHeight={Platform.OS == "android" ? 32 : 0}
                enableResetScrollToCoords={false}
                onKeyboardDidShow={this._keyboardDidShowHandler}
            >
                {/* Logo */}
                <View>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>

                <View>
                    <Text style={styles.AddressText}>Enter your Address & Location</Text>
                </View>


                <View style={styles.AddressTextContainer}>
                    {/* logic for second box of otp */}
                    <TextInput style={styles.otpinput1}
                        placeholder='Address Line 1'
                        keyboardType='Default'
                    />
                    <TextInput style={styles.otpinput2}
                        placeholder='Address Line 2'
                        keyboardType='Default'
                    />
                    <View style={styles.AddressPinCityText}>
                        <TextInput style={styles.otpinput3}
                            placeholder='Pincode'
                            keyboardType='Default'
                        />
                        <TextInput style={styles.otpinput4}
                            placeholder='City'
                            keyboardType='number-pad'
                            maxLength={6}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.finish}>
                    <Text style={styles.finishText}>Finish</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF4E2',
    },
    logo: {
        width: 240,
        height: 100,
        position: 'absolute',
        top: 40,
        left: 67
    },
    AddressText: {
        fontSize: 18,
        alignSelf: "center",
        marginTop: 175,
        fontWeight: "500"
    },
    AddressTextContainer: {
        marginTop: 130
    },
    otpinput1: {
        width: 295,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 210,
        textAlign: "center",
        fontSize: 20
    },
    otpinput2: {
        width: 295,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 20,
        textAlign: "center",
        fontSize: 20
    },
    AddressPinCityText: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginLeft: 60
    },
    otpinput3: {
        width: 135,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 20,
        textAlign: "center",
        fontSize: 20
    },
    otpinput4: {
        width: 135,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 20,
        textAlign: "center",
        fontSize: 20
    },
    finish: {
        width: 296,
        height: 50,
        backgroundColor: "#FF564F",
        alignSelf: "center",
        borderRadius: 5,
        top: 20,
        marginBottom:25
    },
    finishText: {
        textAlign: "center",
        margin: "auto",
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        
    },
});
export default Address