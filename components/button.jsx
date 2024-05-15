import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={props.style}
            onPress={props.onPress}
        >
            <LinearGradient
                colors={['#6B89A7', '#002E56']}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
                style={{
                    ...styles.button,
                    ...{ backgroundColor: bgColor },
                }}
            >
                <Text style={{ fontSize: 18, ...{ color: textColor } }}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Button;
