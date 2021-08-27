import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Dimensions, ImageBackground} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') 
export default class Signup extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source= {require('../images/im.jpg')} 
                resizeMode="cover" style={styles.image} >
            <Text style={styles.fontText}>Find & Explore World
             Top Places</Text>
            <View style={styles.form}>
            <TextInput style={styles.emailText} placeholder={'Enter Your Name'} 
                        underlineColorAndroid='transparent' /></View>

            <View style={styles.form}>
            <TextInput style={styles.passText} placeholder={'Your Email Address'} 
                        underlineColorAndroid='transparent'  />
                        <TextInput style={styles.passText} placeholder={'Your Password'} 
                        underlineColorAndroid='transparent'  secureTextEntry /></View>
            <View style={styles.login}>
                <Text style={styles.test} onPress={()=>navigate('Login')} >     Sign Up</Text>
            </View>
            </ImageBackground>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff',
        height:"100%",
        justifyContent: "center",
        
    },
    fontText: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 0.5,
        justifyContent: "center",
        color: "#00ff00"
    },
    emailText: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 18,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginTop: 25,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 25,
        borderRadius: 25,
        borderColor: '#4287f5',
    },
    form:{
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 23,
    },
    passText: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: "#FFFFFF",
        fontSize: 18,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginHorizontal: 25,
        marginTop: 15,
    },
    login:{
        marginHorizontal: 25,
        borderRadius: 25,
        borderColor: '#4287f5',
        marginTop: 25,
        backgroundColor: "#f54542",
        height: 50,
        width: 200,
        paddingLeft: 45,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 19,
        fontWeight: "bold",
        marginTop: 15,
    },
    test: {
        justifyContent: "center",
        fontSize: 19,
        fontWeight: "bold",
    },
    image:{
        flex: 1,
        justifyContent: "center"
    }
})