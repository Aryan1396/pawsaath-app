import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context'
import DatePicker from "@react-native-community/datetimepicker";

const FirstProfile = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [selectedElements, setSelectedElements] = useState([]);
  const [choice, setChoice] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View>
        <Text style={styles.WelcomeNote}>Hello Sandesh,</Text>
        <Text style={styles.WelcomeNote}>Let's create your profile first</Text>
      </View>

      <View>
        <Image style={styles.PhotoPutLogo} source={require("../../assets/logoForProfile.jpg")} />
      </View>

      <View>
        <TouchableOpacity >
             <TextInput
         style={styles.otpInput} placeholder="Your Email Address" />
        </TouchableOpacity>
     
      </View>

      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => showMode("date")}>
          <Text style={styles.date}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {show && (
          <DatePicker
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <TouchableOpacity onPress={() => showMode("date")}>
          <Image style={styles.dateLogo} source={require("../../assets/date_icon.png")} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.iam}>I am a </Text>
        <View style={styles.optionsContainer}>
          {["Pet Parent", "Pet Boarder", "Pet Sitter", "Groomer", "Pet Lover", "Pet Walker", "Pet Doctor", "Trainer"].map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedElements.includes(option) && styles.selectedOption
              ]}
              onPress={() => handleClick(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View>
        <TouchableOpacity style={{width:142, height:56, alignSelf:"center"}}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
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
    top: 56,
    left: 67
  },
  WelcomeNote: {
    textAlign: "center",
    fontSize: 18,
    top: 180
  },
  PhotoPutLogo: {
    width: 108,
    height: 108,
    alignSelf: "center",
    borderRadius: 50,
    top: 200
  },
  otpInput: {
    width: 274,
    height: 40,
    backgroundColor: "#fff",
    textAlign: "start",
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 18,
    top: 230,
    alignSelf:"center"
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 250
  },
  date: {
    width: 274,
    height: 40,
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 20
  },
  dateLogo: {
    width: 25.74,
    height: 25.74,
    position: 'absolute',
    top: -30,
    left: 100
  },
  iam: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    top:300,
    left:32
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    top:285,
  },
  option: {
    padding: 10,
    margin: 5,
    fontWeight:"500",
    backgroundColor:"#fff",
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#FF564F'
  },
  next:{
    width:142,
    height:56,
    alignSelf:"center",
    borderRadius:10,
    backgroundColor:"#FF564F",
    color:"#fff",
    fontWeight:"900",
    fontSize:22,
    padding:10,
    paddingLeft:40,
    top:300,
  }
});

export default FirstProfile;
