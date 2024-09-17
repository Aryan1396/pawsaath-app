import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from '@react-native-community/datetimepicker';

const AddPet = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [selectedElements, setSelectedElements] = useState([]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (mode) => {
        setShow(true);
    };

    const [selectedPet, setSelectedPet] = useState('Cat'); // Default selection
    const [selectedGender, setSelectedGender] = useState('Male'); // Default selection

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <View>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>

            <View>
                <Text style={styles.create}>Add another Pet</Text>
            </View>

            {/* Default image for upload photo */}
            <View>
                <Image style={styles.PhotoPutLogo} source={require('../../assets/logoForProfile.jpg')} />
            </View>

            {/* Input field for email */}
            <View>
                <TextInput
                    style={styles.otpInput}
                    placeholder="Enter your Pet’s name"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.otpInputsec}
                    placeholder="Pet’s Usernamee"
                    keyboardType="text"
                />
            </View>


            <View style={styles.toggleContainer}>
                <View style={styles.toggleContainerone}>
                    <TouchableOpacity
                        style={[styles.toggleButton, selectedPet === 'Cat' && styles.selectedButton]}
                        onPress={() => setSelectedPet('Cat')}
                    >
                        <Text style={[styles.toggleText, selectedPet === 'Cat' && styles.selectedText]}>Cat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.toggleButton, selectedPet === 'Dog' && styles.selectedButton]}
                        onPress={() => setSelectedPet('Dog')}
                    >
                        <Text style={[styles.toggleText, selectedPet === 'Dog' && styles.selectedText]}>Dog</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.toggleContainerone}>
                    <TouchableOpacity
                        style={[styles.toggleButton, selectedGender === 'Male' && styles.selectedButton]}
                        onPress={() => setSelectedGender('Male')}
                    >
                        <Text style={[styles.toggleText, selectedGender === 'Male' && styles.selectedText]}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.toggleButton, selectedGender === 'Female' && styles.selectedButton]}
                        onPress={() => setSelectedGender('Female')}
                    >
                        <Text style={[styles.toggleText, selectedGender === 'Female' && styles.selectedText]}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Input field for pet  */}
            <View>
                <TextInput
                    style={styles.otpInputthird}
                    placeholder="Pet’s Breed"
                    keyboardType="text"
                />
            </View>

            {/* Input field for date picker */}
            <View style={styles.dateContainer}>
                <TouchableOpacity onPress={() => showMode('date')}>
                    <Text style={styles.date}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {show && (
                    <DatePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        
                    />
                )}
                <TouchableOpacity onPress={() => showMode('date')}>
                    <Image style={styles.dateLogo} source={require('../../assets/date_icon.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={styles.another}>Add another Pet</Text>
                    <Text style={styles.anotherpuls}>+</Text>
                </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
                    <Text style={styles.later}>I don’t have a Pet</Text> 
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.latersec} >I’ll do it later</Text>
                </TouchableOpacity>


            </View>

            {/* Next button */}
            <View>
                <TouchableOpacity>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

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
    create: {
        alignSelf: "center",
        top: 160,
        fontSize: 18,
        fontWeight: "700"
    },
    PhotoPutLogo: {
        width: 108,
        height: 108,
        alignSelf: "center",
        borderRadius: 50,
        top: 190
    },
    otpInput: {
        width: 295,
        height: 44,
        backgroundColor: "#fff",
        textAlign: "start",
        paddingLeft: 10,
        borderRadius: 10,
        fontSize: 18,
        top: 220,
        alignSelf: "center",
        zIndex: 1
    },
    otpInputsec: {
        width: 295,
        height: 44,
        backgroundColor: "#fff",
        textAlign: "start",
        paddingLeft: 10,
        borderRadius: 10,
        fontSize: 18,
        top: 235,
        alignSelf: "center",
        zIndex: 1
    },
    otpInputthird: {
        width: 295,
        height: 44,
        backgroundColor: "#fff",
        textAlign: "start",
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 265,
        fontSize: 18,
        alignSelf: "center",
        zIndex: 1
    },
    toggleContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginLeft: 54
    },
    toggleContainerone: {
        display: "flex",
        flexDirection: "row",
        top: 250
    },
    toggleButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft:3,
     
    },
    selectedButton: {
        backgroundColor: '#FF564F',
    },
    toggleText: {
        color: '#3F3E3F4D',
        fontSize:20
    },
    selectedText: {
        color: '#fff',
    },
    dateContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    date: {
        width: 295,
        height: 44,
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
    another: {
        width: 151,
        height: 28,
        backgroundColor: "white",
        alignSelf: "flex-end",
        left: -61,
        top: 15,
        padding: 5,
        paddingLeft: 13,
        borderRadius: 5,
        color: "#858585",
        fontWeight:"500"
    },
    anotherpuls: {
        fontSize: 20,
        fontWeight: "700",
        color: "#858585",
        left: 325,
        top: -12
    },
    later: {
        alignSelf: "center",
        color: "#9D9D9D",
        fontSize: 18,
        marginTop: 10
    },
    latersec: {
        alignSelf: "center",
        color: "#9D9D9D",
        fontSize: 18,
        fontWeight: "800",
    },
    next: {
        width: 295,
        height: 56,
        alignSelf: "center",
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "#FF564F",
        color: "#fff",
        fontWeight: "900",
        fontSize: 22,
        padding: 10,
        marginTop: 20
    },
    
});

export default AddPet;
