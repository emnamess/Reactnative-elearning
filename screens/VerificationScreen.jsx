import { StyleSheet, View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import COLORS from '../constants/colors';
import Button from '../components/button';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Keyboardavoidingwrapper from '../constants/Keyboardavoidingview';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { OtpInput } from 'react-native-otp-entry';
const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Keyboardavoidingwrapper>

            <SafeAreaView
                style={{ flex: 1,  backgroundColor:'#F5F9FF' }}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="email-open-outline" size={150} color={COLORS.secondary} />
                </View>

                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.secondary,
                            textAlign: 'center',
                        }}>
                            Account Verification{' '}
                            <Octicons name="verified" size={24} color="green" />

                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            textAlign: 'center',
                        }}>
                            Please enter the code we sent to your Email</Text>
                    </View>
                    <View>
                        <OtpInput
                            numberOfDigits={4}
                            onTextChange={(text) => console.log(text)}

                            focusColor={COLORS.primary}
                            focusStickBlinkingDuration={400}
                            theme={{
                                pinCodeContainerStyle: {
                                    backgroundColor: COLORS.white,
                                    width: 58,
                                    height: 58,
                                    borderRadius: 12
                                }
                            }}
                        />
                    </View>
                    <Button
                        onPress={() => navigation.navigate('Welcome')}
                        title="Confirm"
                        filled
                        style={{
                            marginTop: 220,
                            marginBottom: 4,
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 22
                    }}>
                        <Text style={{ fontSize: 16, color: COLORS.black }}>Didn't receive the code ? </Text>
                        <Pressable
                            onPress={() => navigation.navigate("Signup")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: "bold",
                                marginLeft: 6
                            }}>Send again</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </Keyboardavoidingwrapper>
    )
}
const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
        borderColor: COLORS.lightblue,
        backgroundColor: COLORS.lightblue,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingLeft: 22,
        justifyContent: 'space-between', // Align items horizontally with space between
        paddingRight: 16, // Add paddingRight to create space for the icon
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    iconContainer: {
        width: 200,
        height: 200,
        borderRadius: 100, // half of width and height to make it circular
        backgroundColor: COLORS.lightblue, // or any color you want for the background
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Align the container itself to the center
        marginTop: 50,

    },

});
export default Login