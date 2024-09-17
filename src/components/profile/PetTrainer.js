import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Span } from 'react-native'
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Platform } from "react-native";
import React from 'react'
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';


export default function PetTrainer({ onSelect }) {

    const [selectedPet, setSelectedPet] = useState('Cat'); // Default selection
    const [selectedGender, setSelectedGender] = useState('Dog'); // Default selection
    const [distance, setDistance] = useState(0); // State to hold the slider value
    const [count, setCount] = useState(0);

    // States to manage selection of Yes/No for each question independently
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [selectedOption4, setSelectedOption4] = useState(null);

    // Handle selection of Yes/No for each question
    const handleSelect = (question, option) => {
        switch (question) {
            case 1:
                setSelectedOption1(option);
                break;
            case 2:
                setSelectedOption2(option);
                break;
            case 3:
                setSelectedOption3(option);
                break;
            case 4:
                setSelectedOption4(option);
                break;
            default:
                break;
        }
        if (onSelect) onSelect(option);
    };

    // Function to handle increment
    const increment = () => setCount(prevCount => prevCount + 1);

    // Function to handle decrement
    const decrement = () => {
        if (count > 0) setCount(prevCount => prevCount - 1); // Prevents negative numbers
    };

    // Single state to manage the selected pet size
    const [selectedPetSize, setSelectedPetSize] = useState('Small'); // Default selection


    // Single state to manage the selected pet size
    const [selectedPetAge, setSelectedPetAge] = useState('Small'); // Default selection

    // for first multiple option choise
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [otherText, setOtherText] = useState(''); // State for the "Others" text input

    // List of options
    const options = [
        'Surgery',
        'Dentistry',
        'Dermatology',
        'Emergency & Critical Care',
        'Internal Medicine',
        'Vaccinations',
        'Oncology',
        'Opthalmology',
        'Others (please specify)'
    ];


    // Handle option selection
    const handleSelectOption = (option) => {
        if (option === 'Others (please specify)') {
            // If "Others" is selected, clear other options and select only "Others"
            setSelectedOptions([option]);
        } else {
            // If any other option is selected, deselect "Others" and toggle the option
            setSelectedOptions(prevSelected => {
                const isAlreadySelected = prevSelected.includes(option);
                const newSelectedOptions = isAlreadySelected
                    ? prevSelected.filter(item => item !== option)
                    : [...prevSelected.filter(item => item !== 'Others (please specify)'), option];

                return newSelectedOptions;
            });
        }
    };



    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const [otherText1, setOtherText1] = useState(''); // State for the "Others" text input

    // List of options
    const options1 = [
        " Early Morning (6am - 9am)",
        " Late Morning (9am - 12pm)",
        "Afternoon (12pm-3pm)",
        " Late Afternoon (3pm - 6pm)",
        " Evening (6pm - 9pm)",
        " Late Evening (9pm - 12am)",
        "  Weekends (Sat & Sun)",
        "Emergencies (24/7)",
        "Others (please specify)"
    ];

    // Handle option selection
    const handleSelectOption1 = (options1) => {
        if (options1 === 'Others (please specify)') {
            // If "Others" is selected, clear other options and select only "Others"
            setSelectedOptions1([options1]);
        } else {
            // If any other options1 is selected, deselect "Others" and toggle the options1
            setSelectedOptions1(prevSelected => {
                const isAlreadySelected = prevSelected.includes(options1);
                const newSelectedOptions = isAlreadySelected
                    ? prevSelected.filter(item => item !== options1)
                    : [...prevSelected.filter(item => item !== 'Others (please specify)'), options1];

                return newSelectedOptions;
            });
        }
    };

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
                bounces={false}
            >

                {/* nevigation bar  */}
                <View style={styles.firstnevigation}>
                    <TouchableOpacity style={styles.menubarcontainer}>
                        <View style={styles.menubarinduval}></View>
                        <View style={styles.menubarinduval}></View>
                        <View style={styles.menubarinduval}></View>
                    </TouchableOpacity>

                    {/* Logo  and right side profile pic*/}
                    <View>
                        <Image style={styles.logo} source={require("../../assets/logo.png")} />
                        <Image style={styles.cat} source={require("../../assets/cat.png")} />
                        <Text style={styles.notification}>2</Text>
                    </View>

                    {/* PET BOARDING text below pawsaathi logo */}
                    <View>
                        <Text style={styles.PetBoardingText} >PET TRAINER</Text>
                    </View>
                </View>

                {/* Add a Listing for your Services text and containt */}
                <View>
                    <Text style={styles.Addlisting}>Add a Listing for your Services</Text>
                    <Text style={styles.AddlistingText}>Give a name to your service - you can use a combination of the service you offer, the city name & pets you accept to customize listing</Text>
                    <TextInput style={styles.otpinput1}
                        placeholder='e.g. Sandesh’s Dog Boarding Thane'
                        keyboardType='Default'
                    />
                </View>

                {/* which pet you have chooise toggle   */}
                <View>
                    <Text style={styles.HostChooice}>
                        What Pets you can Walk?
                    </Text>
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
                </View>

                {/* pet size and their input chooise box */}
                <View>
                    <Text style={styles.petsizeText}>Sizes of Pets you can Walk</Text>
                    <View style={styles.pettoggleContainerone}>
                        <TouchableOpacity
                            style={[styles.pettoggleButton, selectedPetSize === 'Small' && styles.petselectedButton]}
                            onPress={() => setSelectedPetSize('Small')}
                        >
                            <Text style={[styles.pettoggleText, selectedPetSize === 'Small' && styles.petselectedText]}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.pettoggleButton, selectedPetSize === 'Medium' && styles.petselectedButton]}
                            onPress={() => setSelectedPetSize('Medium')}
                        >
                            <Text style={[styles.pettoggleText, selectedPetSize === 'Medium' && styles.petselectedText]}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.pettoggleButton, selectedPetSize === 'Large' && styles.petselectedButton]}
                            onPress={() => setSelectedPetSize('Large')}
                        >
                            <Text style={[styles.pettoggleText, selectedPetSize === 'Large' && styles.petselectedText]}>Large</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* how many pet you have text and input field */}
                <View>
                    <Text style={styles.petcount}>How many pets can you watch at your home at one time? </Text>
                    <View style={styles.containerofpetcounter}>
                        {/* Decrement Button */}
                        <TouchableOpacity style={styles.button} onPress={decrement}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        {/* Input Field Displaying Count */}
                        <TextInput
                            style={styles.input}
                            value={count.toString()}
                            keyboardType="numeric"
                            editable={false} // Prevents manual editing
                        />

                        {/* Increment Button */}
                        <TouchableOpacity style={styles.button} onPress={increment}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* First Question */}
                <View style={styles.firstcheckbox}>
                    <Text style={styles.last_check_box_main_text}>Do you accept home visits ?</Text>
                    <View style={styles.lastcheckboxContainerinput}>
                        <TouchableOpacity
                            style={styles.lastcheckboxContainer}
                            onPress={() => handleSelect(1, 'yes')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'yes' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.lastcheckboxContainer}
                            onPress={() => handleSelect(1, 'no')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'no' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* how far can you travel slider input and text */}
                <View>
                    <Text style={styles.pickup}>
                        How far can you travel for Pick-up?
                    </Text>
                    <View style={styles.container}>

                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={20}
                            step={1}
                            value={distance}
                            onValueChange={value => setDistance(value)}
                            minimumTrackTintColor="#FB3F4A"
                            maximumTrackTintColor="#FB3F4A"
                            thumbTintColor="#FB3F4A"
                        />
                        <Text style={styles.initialValueofkm}>0 km</Text>
                        <Text style={styles.finalValueofkm}>20 km</Text>
                        <Text style={styles.value}>{distance} km</Text>
                    </View>
                </View>

                {/*first multiple choise options */}
                <View style={styles.multipleselectcontainer}>
                    <Text style={styles.title}>Select your specializations</Text>

                    {options.map((option, index) => (
                        <View key={index} style={styles.optionContainer}>
                            <TouchableOpacity
                                style={styles.circle}
                                onPress={() => handleSelectOption(option)}
                            >
                                {selectedOptions.includes(option) && <View style={styles.checkedDot} />}
                            </TouchableOpacity>
                            <Text style={styles.optionText}>{option}</Text>
                        </View>
                    ))}

                    {/* TextInput for "Others" is always visible, but only enabled when "Others" is selected */}
                    <TextInput
                        style={styles.otherInput}
                        placeholder="Please specify"
                        value={otherText}
                        onChangeText={setOtherText}
                        editable={selectedOptions.includes('Others (please specify)')}
                    />
                </View>

                {/* Seconf Question */}
                <View style={styles.Secondcheckbox}>
                    <Text style={styles.last_check_box_main_text}>Do you provide online training ?</Text>
                    <View style={styles.lastcheckboxContainerinput}>
                        <TouchableOpacity
                            style={styles.lastcheckboxContainer}
                            onPress={() => handleSelect(1, 'yes')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'yes' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.lastcheckboxContainer}
                            onPress={() => handleSelect(1, 'no')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'no' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/*second multiple choise options */}
                <View style={styles.multipleselectcontainer}>
                    <Text style={styles.title}>Select your specializations</Text>

                    {options1.map((options1, index) => (
                        <View key={index} style={styles.optionContainer}>
                            <TouchableOpacity
                                style={styles.circle}
                                onPress={() => handleSelectOption1(options1)}
                            >
                                {selectedOptions1.includes(options1) && <View style={styles.checkedDot} />}
                            </TouchableOpacity>
                            <Text style={styles.optionText}>{options1}</Text>
                        </View>
                    ))}

                    {/* TextInput for "Others" is always visible, but only enabled when "Others" is selected */}
                    <TextInput
                        style={styles.otherInput}
                        placeholder="Please specify"
                        value={otherText1}
                        onChangeText={setOtherText1}
                        editable={selectedOptions.includes('Others (please specify)')}
                    />
                </View>

                {/* short description text and input field */}
                <View>
                    <Text style={styles.Descriptiontext}>Short Description of your Service</Text>
                    <TextInput
                        style={styles.Descriptiontextinputfield}
                        placeholder="Give your viewers an overview about what all services you offer. Tell them about your likes, about your boarding experience, and what all things you do or don’t do while boarding. Make it stand out!"
                        placeholderTextColor="#999" // Change this color if needed
                        multiline={true}
                        textAlignVertical="top" // Aligns text to the top of the input
                    />
                </View>

               

                {/* First Question */}
                <View style={styles.firstcheckbox}>
                    <Text style={styles.last_check_box_main_text}>Do you have a Dedicated Sleeping Area?</Text>
                    <View style={styles.lastcheckboxContainerinput}>
                        <TouchableOpacity
                            style={styles.lastcheckboxContainer}
                            onPress={() => handleSelect(1, 'yes')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'yes' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.lastcheckboxContainer2}
                            onPress={() => handleSelect(1, 'no')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'no' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.lastcheckboxContainer3}
                            onPress={() => handleSelect(1, 'Would like more info')}
                        >
                            <View style={styles.lastcheckbox}>
                                {selectedOption1 === 'Would like more info' && <View style={styles.lastchecked} />}
                            </View>
                            <Text style={styles.text}>Would like more info</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* next button */}
                <TouchableOpacity>
                    <View style={styles.nextbutton}>
                        <Text style={styles.nextbuttonText}>Next</Text>
                    </View>

                </TouchableOpacity>



            </KeyboardAwareScrollView>
        </SafeAreaView >
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
        top: 0,
        left: 67
    },
    menubarinduval: {
        width: 35,
        height: 3,
        backgroundColor: "black",
        margin: 6,
        top: 27,
        cursor: "pointer"
    },
    menubarcontainer: {
        marginBottom: -60,
        cursor: "pointer"
    },
    cat: {
        width: 40,
        height: 40,
        backgroundColor: "#F98881",
        borderRadius: 30,
        alignSelf: "flex-end",
        right: 20,
        top: 35,
        borderWidth: 1,
        borderColor: "black",
        padding: 20
    },
    notification: {
        fontSize: 12,
        width: 15,
        height: 15,
        backgroundColor: "#EF6497",
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        alignSelf: "flex-end",
        right: 18,
        top: -11,
        zIndex: 1
    },
    PetBoardingText: {
        alignSelf: "center",
        top: 10,
        marginLeft: 20,
        color: "#616161",
        fontWeight: "600",
        fontSize: 15.5
    },
    firstnevigation: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    Addlisting: {
        alignSelf: "center",
        top: 50,
        marginLeft: -30,
        fontSize: 18,
        fontWeight: "700"
    },
    AddlistingText: {
        width: 310,
        height: 60,
        marginLeft: 30,
        textAlign: "center",
        top: 55,
        fontSize: 14,
        left: 15,
        letterSpacing: 0.75
    },
    otpinput1: {
        width: 295,
        height: 39,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 65,
        paddingLeft: 20,
        fontSize: 16
    },
    petcount: {
        fontWeight: "600",
        fontSize: 16,
        paddingRight: 60,
        marginLeft: 50,
        marginTop: 30,
        marginBottom: -10
    },
    containerofpetcounter: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 20,
    },
    button: {
        width: 26,
        height: 26,
        borderRadius: 20,
        backgroundColor: '#FF564F',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 5,
        marginLeft: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        width: 52,
        height: 42,
        borderColor: '#ddd',
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 16,
        color: '#333',
        backgroundColor: "white"
    },
    HostChooice: {
        marginTop: 30,
        marginLeft: 50,
        fontSize: 16
    },

    toggleContainerone: {
        width: 73,
        height: 54,
        display: "flex",
        flexDirection: "row",
        marginLeft: 50,
        marginTop: 5,
        gap: 5,
        textAlign: "center"
    },
    toggleButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 3,

    },
    selectedButton: {
        backgroundColor: '#FF564F',
    },
    toggleText: {
        color: '#3F3E3F4D',
        fontSize: 16,
        fontWeight: "700"
    },
    selectedText: {
        color: '#fff',
    },
    pickup: {
        fontWeight: "700",
        marginLeft: 50,
        marginTop: 40
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    slider: {
        width: 250,
        height: 40,
        alignSelf: "center",
        marginLeft: -60
    },
    value: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: -25,
        marginLeft: -40,
        zIndex: 9,
        width: 60,
        alignSelf: "center"
    },
    initialValueofkm: {
        fontSize: 16,
        marginLeft: 45,
        marginTop: -15,
        zIndex: 99,
        color: "#3F3E3F69"
    },
    finalValueofkm: {
        fontSize: 16,
        marginLeft: 270,
        marginTop: -15,
        zIndex: 99,
        color: "#3F3E3F69"
    },
    Descriptiontext: {
        marginTop: 30,
        marginLeft: 50,
        fontWeight: "700",
        marginBottom: 10
    },
    Descriptiontextinputfield: {
        width: 295,
        height: 196,
        marginTop: 0,
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center",
        marginLeft: -30,
        padding: 15,
        letterSpacing: 1,
        lineHeight: 2
    },

    pricestext: {
        marginLeft: 50,
        marginTop: 40,
        fontWeight: "700",
        fontSize: 16
    },
    inputboxcontainer: {
        display: "flex",
        flexDirection: "row",
        gap: 30,
        marginTop: 10
    },
    inputboxcontainer1: {
        display: "flex",
        flexDirection: "row",
        gap: 30,
        marginTop: -110
    },
    uppertextofpriceinputfield1: {
        paddingLeft: 70,
        marginBottom: -15,
        marginTop: 10,
        fontWeight: "700"
    },
    uppertextofpriceinputfield2: {
        paddingLeft: 60,
        marginBottom: -15,
        marginTop: 10,
        fontWeight: "700"
    },
    uppertextofpriceinputfield3: {
        paddingLeft: 70,
        marginBottom: -15,
        marginTop: 20,
        fontWeight: "700"
    },
    uppertextofpriceinputfield4: {
        paddingLeft: 50,
        marginBottom: -15,
        marginTop: 20,
        fontWeight: "700"
    },
    pricesinputfiled1: {
        width: 119,
        height: 44,
        backgroundColor: "white",
        borderRadius: 10,
        top: -100,
        left: 52,
        textAlign: "center",
        marginTop: 120
    },
    pricesinputfiled2: {
        width: 117,
        height: 44,
        backgroundColor: "white",
        borderRadius: 10,
        top: -100,
        left: 40,
        textAlign: "center",
        marginTop: 120
    },
    pricesinputfiled3: {
        width: 119,
        height: 44,
        backgroundColor: "white",
        borderRadius: 10,
        top: -100,
        left: 52,
        textAlign: "center",
        marginTop: 120
    },
    pricesinputfiled4: {
        width: 117,
        height: 44,
        backgroundColor: "white",
        borderRadius: 10,
        top: -100,
        left: 40,
        textAlign: "center",
        marginTop: 120
    },
    moreInfo1: {
        width: 18,
        height: 15,
        top: -165,
        left: 160,
    },
    moreInfo2: {
        width: 18,
        height: 15,
        top: -165,
        left: 150,
    },
    moreInfo3: {
        width: 18,
        height: 15,
        top: -165,
        left: 160,
    },
    moreInfo4: {
        width: 18,
        height: 15,
        top: -165,
        left: 150,
    },
    petsizeText: {
        marginTop: 20,
        marginLeft: 50,
        fontSize: 16
    },
    pettoggleContainerone: {
        width: 80,
        height: 54,
        display: "flex",
        flexDirection: "row",
        marginLeft: 50,
        marginTop: 5,
        gap: 5,
        textAlign: "center"
    },
    pettoggleButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: '#ddd',
        marginLeft: 3,

    },
    petselectedButton: {
        backgroundColor: '#FF564F',
    },
    pettoggleText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 400
    },
    petselectedText: {
        color: '#fff',
    },
    nextbutton: {
        width: 266,
        height: 41,
        backgroundColor: "#FF564F",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 40
    },
    nextbuttonText: {
        color: "white",
        textAlign: "center",
        margin: "auto",
        fontSize: 17,
        fontWeight: "700"
    },
    last_check_box_main_text: {
        marginTop: 30,
        marginLeft: 50,
        fontSize: 16
    },
    lastcheckboxContainerinput: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"flex-start"
    },
    lastcheckboxContainer: {
        marginLeft: 50,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    lastcheckboxContainer2:{
        marginLeft: 50,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        marginLeft:25
    },
    lastcheckboxContainer3:{
        marginLeft: 50,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        marginLeft:25
    },
    lastcheckbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lastchecked: {
        width: 9,
        height: 9,
        backgroundColor: "red",
        color: "red",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    multipleselectcontainer: {
        marginLeft: 50,
        marginTop: 30
    },
    title: {
        fontSize: 16,
        marginBottom: 15,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    circle: {
        height: 18,
        width: 18,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedDot: {
        height: 9,
        width: 9,
        borderRadius: 3,
        backgroundColor: '#FB3F4A',
    },
    optionText: {
        fontSize: 14,
    },
    otherInput: {
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        width: 295,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10
    },
    checkedDot1: {
        height: 9,
        width: 9,
        borderRadius: 3,
        backgroundColor: '#FB3F4A',
    }
});