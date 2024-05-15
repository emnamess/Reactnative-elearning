import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Welcomeheader = () => {
    const navigation = useNavigation();

    const handleSeeProfile = () => {
        navigation.navigate('MyTabs');
      };
    return (
        <View style={styles.container}>
            <View>
            <Text>Welcome,</Text>
            <Text style={{fontSize:25,fontWeight:'bold'}}>
                user
            </Text>
            </View>
            <AntDesign name="user" size={30} color="black"  onPress={handleSeeProfile}/>
        </View>
    )
}

export default Welcomeheader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})