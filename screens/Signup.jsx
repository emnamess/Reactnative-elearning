import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/button';
import COLORS from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from '@expo/vector-icons';
import Keyboardavoidingwrapper from '../constants/Keyboardavoidingview';
import { FontAwesome6 } from '@expo/vector-icons';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import icons from '../components/icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Signup = ({ navigation }) => {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedAreas] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png `
                    }
                });
                setAreas(areaData);
                if (areaData.length > 0) {
                    let defaultData = areaData.filter((a) => a.code == "TN");
                    if (defaultData.length > 0) {
                        setSelectedAreas(defaultData[0]);
                    }
                }
            })

    }, []);



    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);



    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        return /^\d+$/.test(phoneNumber);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordShown(!isConfirmPasswordShown);
    };

    const handleFullNameChange = (text) => {
        setFullName(text);
        if (!text.trim()) {
            setFullNameError('Please enter your full name');
        } else if (!/^[a-zA-Z\s]+$/.test(text)) {
            setFullNameError('Please enter a valid name (only letters and spaces are allowed)');
        } else {
            setFullNameError('');
        }
    };


    const handleEmailChange = (text) => {
        setEmail(text);
        if (!text.trim()) {
            setEmailError('Please enter your email address');
        } else if (!isValidEmail(text)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
        if (!text.trim()) {
            setPhoneNumberError('Please enter your phone number');
        } else if (!isValidPhoneNumber(text)) {
            setPhoneNumberError('Please enter a valid phone number');
        } else {
            setPhoneNumberError('');
        }
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;

        if (!text.trim()) {
            setPasswordError('Please enter your password');
        } else if (text.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else if (!uppercaseRegex.test(text)) {
            setPasswordError('Password must contain at least one uppercase letter');
        } else if (!specialCharRegex.test(text)) {
            setPasswordError('Password must contain at least one special character');
        } else if (!numberRegex.test(text)) {
            setPasswordError('Password must contain at least one number');
        } else {
            setPasswordError('');
        }
    };


    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        if (!text.trim()) {
            setConfirmPasswordError('Please confirm your password');
        } else if (text !== password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false); // Close the picker
        setDate(currentDate); // Update the date state
    };

    const renderAreasCodeModal = () => {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        setSelectedAreas(item);
                        setModalVisible(false);
                    }}
                    style={{
                        flexDirection: "row",
                        padding: 10
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        resizeMode='contain'
                        style={{
                            height: 30,
                            width: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ color: COLORS.black }}>
                        {item.name} ({item.callingCode})

                    </Text>
                </TouchableOpacity>
            );
        }


        return (
            <Modal animationType='fade' transparent={true} visible={modalVisible}>
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        <View style={{
                           height: 800,
                           width:400,
                            backgroundColor: COLORS.white
                        }}>
                            {/*close button*/}
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={{
                                    position: "absolute",
                                    top: 22,
                                    right: 22,
                                    width: 42,
                                    height: 42,
                                    alignItems: "center",
                                    borderRadius: 999
                                }}
                            >
                                <AntDesign name="closecircle" size={24} color="black" style={{ marginTop: 10, marginLeft: 10 }} />


                            </TouchableOpacity>
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                horizontal={false}
                                keyExtractor={item => item.code}
                                style={{marginBottom: 10 }}
                            
                            ></FlatList>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    };
    return (
        <Keyboardavoidingwrapper>
            <SafeAreaView style={{ flex: 1, backgroundColor:'#F5F9FF' }}>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.secondary,
                            textAlign: 'center',
                        }}>
                            Create Account
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.secondary,
                            textAlign: 'center',
                        }}>Join us today!</Text>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <View style={styles.input}>
                            <AntDesign name="user" size={24} color={COLORS.secondary} style={{ marginRight: 10 }} />

                            <TextInput
                                placeholder='Enter your full name'
                                placeholderTextColor={COLORS.secondary}
                                keyboardType='default'
                                style={{ flex: 1 }}
                                value={fullName}
                                onChangeText={handleFullNameChange}
                            />
                        </View>
                        {fullNameError && (
                            <Text style={{ color: 'red', marginBottom: 8 }}>{fullNameError}</Text>
                        )}
                    </View>


                    <View style={{ marginBottom: 12 }}>

                        <View style={styles.input}>
                            <Fontisto name="email" size={24} color={COLORS.secondary} style={{ marginRight: 10 }} />

                            <TextInput
                                placeholder='Enter your email address'
                                placeholderTextColor={COLORS.secondary}
                                keyboardType='email-address'
                                style={{ flex: 1 }}
                                value={email}
                                onChangeText={handleEmailChange}
                            />
                        </View>
                        {emailError && (
                            <Text style={{ color: 'red', marginBottom: 8 }}>{emailError}</Text>
                        )}
                    </View>

                    <View style={{ marginBottom: 12 }}>

                        <View style={styles.input}>
                            <View style={{ marginBottom: 12 }}>
                                <TouchableOpacity onPress={() => setModalVisible(true)}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: selectedArea?.flag }}
                                            resizeMode='contain'
                                            style={{
                                                marginRight:5,
                                                marginTop:10,
                                                height:30,
                                                width: 30,
                                                marginLeft:-10
                                            }}
                                        />
                                        <Text style={{ marginTop:10, color:COLORS.secondary}} >{selectedArea?.callingCode}{''}</Text>
                                    </View>
                                </TouchableOpacity>



                            </View>

                            <TextInput
                                placeholder='Enter your phone number'
                                placeholderTextColor={COLORS.secondary}
                                keyboardType='numeric'
                                style={{ width: "70%",marginLeft:10}}
                                value={phoneNumber}
                                onChangeText={handlePhoneNumberChange}
                            />
                            <AntDesign name="phone" size={24} color={COLORS.secondary}/>
                        </View>
                        {phoneNumberError && (
                            <Text style={{ color: 'red', marginBottom: 8 }}>{phoneNumberError}</Text>
                        )}
                    </View>

                    <View style={{ marginBottom: 12 }}>

                        <View style={styles.input}>
                            <FontAwesome6 name="unlock-keyhole" size={24} color={COLORS.secondary} />
                            <TextInput
                                placeholder='Enter your password'
                                placeholderTextColor={COLORS.secondary}
                                secureTextEntry={!isPasswordShown}
                                style={{ width: "90%" }}
                                value={password}
                                onChangeText={handlePasswordChange}
                            />
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}
                                style={{ position: "absolute", right: 12 }}
                            >
                                <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.secondary} />
                            </TouchableOpacity>
                        </View>
                        {passwordError && (
                            <Text style={{ color: 'red', marginBottom: 8 }}>{passwordError}</Text>
                        )}
                    </View>

                    <View style={{ marginBottom: 12 }}>

                        <View style={styles.input}>
                            <FontAwesome6 name="unlock-keyhole" size={24} color={COLORS.secondary} />
                            <TextInput
                                placeholder='Confirm your password'
                                placeholderTextColor={COLORS.secondary}
                                secureTextEntry={!isConfirmPasswordShown}
                                style={{ width: "90%"}}
                                value={confirmPassword}
                                onChangeText={handleConfirmPasswordChange}

                            />
                            <TouchableOpacity
                                onPress={toggleConfirmPasswordVisibility}
                                style={{ position: "absolute", right: 12 }}
                            >
                                <Ionicons name={isConfirmPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.secondary} />
                            </TouchableOpacity>
                        </View>
                        {confirmPasswordError && (
                            <Text style={{ color: 'red', marginBottom: 8 }}>{confirmPasswordError}</Text>
                        )}
                    </View>

                    <View style={{ marginBottom: 12 }}>

                        {showPicker && (
                            <DateTimePicker
                                mode="date"
                                display="spinner"
                                value={date}
                                onChange={onChange}
                            />
                        )}
                        <View style={styles.input}>
                            {!showPicker && (
                                <Pressable onPress={toggleDatepicker} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name="calendar" size={24} color="black" style={{ marginRight: 8 }} />
                                    <TextInput
                                        placeholder='Select your date of birth'
                                        placeholderTextColor={COLORS.secondary}
                                        style={{ flex: 1, color: COLORS.secondary }}
                                        value={date.toLocaleDateString()} // Set the value to the formatted date string
                                        editable={false}
                                    />
                                </Pressable>

                            )}

                            <TouchableOpacity
                                onPress={() => console.log("Date of Birth pressed")}
                                style={{
                                    position: 'absolute', // Set absolute positioning
                                    right: 50,
                                    top: '50%',
                                    transform: [{ translateY: -12 }],
                                    zIndex: 1,
                                }}
                            >
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        onPress={() => navigation.navigate('VerificationScreen')}
                        title="Sign Up"
                        filled
                        style={{ marginTop: 18, marginBottom: 4 }}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: COLORS.grey,
                                marginHorizontal: 10
                            }}
                        />
                        <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: COLORS.grey,
                                marginHorizontal: 10
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => console.log("Pressed")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: 52,
                                borderWidth: 0.5,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}
                        >
                            <Image
                                source={require("../assets/facebook.png")}
                                style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 8
                                }}
                                resizeMode='contain'
                            />
                            <Text>Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => console.log("Pressed")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: 52,
                                borderWidth: 0.5,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}
                        >
                            <Image
                                source={require("../assets/google.png")}
                                style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 8
                                }}
                                resizeMode='contain'
                            />
                            <Text>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 22
                    }}>
                        <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: "bold",
                                marginLeft: 6
                            }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
                {renderAreasCodeModal()}
            </SafeAreaView>
        </Keyboardavoidingwrapper>
    );
}
const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderColor: COLORS.lightblue,
        backgroundColor: COLORS.lightblue,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingLeft: 22,
        justifyContent: 'space-between', // Align items horizontally with space between
        paddingRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,// Add paddingRight to create space for the icon

    }
});
export default Signup;
