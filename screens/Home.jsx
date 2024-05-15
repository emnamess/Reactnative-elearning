import { View, Text, Pressable, Image, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    
                    <Image
                        source={require("../assets/logo.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "relative",
                            top: 5,
                            
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },

                                
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Career Change</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Start it Now </Text>
                    
                    

                    <Pressable
                        style={{
                            paddingBottom: 16,
                            paddingVertical: 10,
                            borderColor: COLORS.white,
                            borderWidth: 2,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 40,
                            backgroundColor:COLORS.white,
                            Text
                        }}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={{ color: COLORS.black, fontSize: 20 }}>Join Now</Text>
                    </Pressable>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Home