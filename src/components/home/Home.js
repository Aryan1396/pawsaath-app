import { SafeAreaView, View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Home = ({ navigation }) => {


  return (

    <>
      {/* main view for all */}
      <SafeAreaView style={style.container}>

        {/* logo pawsaath */}
        <View>
          <Image style={style.logo} source={require("../../assets/logo.png")} />
        </View>

        {/* center text */}
        <View>
          <View><Text style={style.firstText}>Your paw’s</Text></View>
          <View><Text style={style.secondText}>best friend!</Text></View>
        </View>

        {/* pet img */}
        <View>
          <Image style={style.pet} source={require("../../assets/pet.png")} />
        </View>

        {/* get start button */}
        <TouchableOpacity style={style.appButtonContainer} onPress={() => navigation.navigate("LogInWithEmail")}>
          <View style={{ color: "red" }}>
          <Text style={style.appButtonText} >Get start</Text>
          </View>
        </TouchableOpacity>
        {/* sign in button */}
        <View>
          <View><Text style={style.end} >Already have an account? </Text></View>
          <TouchableOpacity style={style.signin} onPress={() => navigation.navigate("LogInWithPhone")}>
          <View>
          <Text style={style.signin} >Get start</Text>
          </View>
        </TouchableOpacity>
        </View>


      </SafeAreaView>
    </>
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
  firstText: {
    fontSize: 24,
    color: "#E08983",
    fontWeight: "400",
    display: "flex",
    top: 183.31,
    textAlign: "center"
  },
  secondText: {
    fontSize: 24,
    color: "#C52F2B",
    fontWeight: "700",
    display: "flex",
    top: 183.31,
    textAlign: "center",
    marginLeft: 10
  },
  pet: {
    position: 'absolute',
    zIndex: 1,
    width: 881,
    height: 1982.25,
    top: -1172.69,
    marginLeft: -215.97,
    zIndex: 0,
    transform: [{ scale: 1.05 }],

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FF564F",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 266,
    height: 41,
    left: 70,
    top: 720,
    zIndex: 1,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    zIndex: 1,
  },

  end: {
    fontSize: 16,
    color: "#20242B",
    top: 730,
    left: 88,
    zIndex: 99,
    fontWeight: "400"

  },
  signin: {
   fontSize:16,
   top:354,
   zIndex:99,
   color:"red",
   left:138,
   fontWeight:"700"
  }

})

export default Home