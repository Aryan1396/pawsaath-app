import React, { Component } from 'react';
import { SafeAreaView, Button, Image, Keyboard, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LogInWithEmail({navigation}) {
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

      {/* logo pawsaath */}
      <View>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.container1}>
        <Text style={styles.header}>Sign in</Text>

        <View style={styles.inputTextWrapper}>
          <TextInput
            placeholder="email or phone"
            style={styles.textInput}
            returnKeyType="next"
            onSubmitEditing={this.editNextInput}
            onFocus={this.onInputFocus}
            onChangeText={this.onChangeInputHandler}
            ref={this.emailInputRef}
          />



        </View>

        <View style={styles.inputTextWrapper}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            returnKeyType="next"
            onSubmitEditing={this.editNextInput}
            onFocus={this.onInputFocus}
            onChangeText={this.onChangeInputHandler}
            ref={this.passwordInputRef}
          />



        </View>

        <View style={styles.btnContainer}>
          <Button title="Log in" color="#FF564F" onPress={this.submitPressed} />
        </View>

        <View>
          <Text style={styles.OptText}>Login through OTP</Text>
        </View>

        <View style={styles.hr}></View>



        <View style={styles.continueTextwapper}>
          <Text style={styles.continueText}>or continue with</Text>
        </View>

        <View style={styles.ContinueWithWapper}>
          <View style={styles.logosWapper}>
            <Image style={styles.ContinueGoogleLogo} source={require("../../assets/Google-Logo.png")} />
          </View>
          <View style={styles.logosWapper}>
            <Image style={styles.ContinueFacebookLogo} source={require("../../assets/facebook-logo.png")} />
          </View>
          <View style={styles.logosWapper}>
            <Image style={styles.continueAppleLogo} source={require("../../assets/apple-logo.png")} />
          </View>
        </View>

        {/* <View>
        <Text style={styles.laterText}>I’ll do it later</Text>
      </View> */}

        <View>
          <View>
            <Text style={styles.AlreadyAccount}>Don’t have an account?</Text>
          </View>

          <TouchableOpacity style={styles.signin} onPress={() => navigation.navigate("LogInWithPhone")}>
            <View>
              <Text style={styles.signin} >Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>


    </KeyboardAwareScrollView>
  </SafeAreaView>
);

}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FDF4E2'
},
logo: {
width: 240,
height: 100,
position: 'absolute',
top: 50.31,
left: 67.03
},
container1: {
flex: 1,
padding: 16,
paddingBottom: 100,
},
header: {
width: 353,
height: 22,
fontSize: 18,
textAlign: "center",
color: "#FF564F",
top: 160
},
inputTextWrapper: {
marginBottom: 24,
top: 220,
left: 5,
alignItems: "center"
},
textInput: {
width: 281,
height: 55,
borderColor: "#000000",
backgroundColor: "white",
padding: 10,
borderRadius: 10,
fontSize: 18,
fontWeight: "700"
},
errorText: {
color: 'red',
fontSize: 10,
marginStart: -100,
marginTop: 5
},
btnContainer: {
marginTop: 240,
height: 100,
width: 270,
borderRadius: 10,
left: 62
},
OptText: {
textAlign: "center",
color: "#9D9D9D",
fontSize: 17,
fontWeight: "bold",
top: -20,
},
hr: {
borderTopWidth: 1,
borderColor: "#F99781",
top: 33
},
continueText: {
color: "#F99781",
marginLeft: 115,
fontSize: 16,
marginTop: 5,
width: 150,
backgroundColor: "#FDF4E2",
padding: 15
},
ContinueWithWapper: {
display: "flex",
flexDirection: "row",
justifyContent: "center",
gap: 10
},
logosWapper: {
width: 88,
height: 60,
borderWidth: 1,
borderColor: "black",
borderRadius: 16
},
ContinueGoogleLogo: {
width: 65,
height: 65,
margin: "auto"
},
ContinueFacebookLogo: {
width: 40,
height: 40,
margin: "auto"
},
continueAppleLogo: {
width: 65,
height: 65,
margin: "auto"
},
laterText: {
color: "#9D9D9D",
fontWeight: "700",
textAlign: "center",
top: 70
},
AlreadyAccount: {
top: 76,
left: 90,
fontSize: 16
},
signin: {
color: "red",
top: 27,
fontSize: 16,
left: 130
}
});
  