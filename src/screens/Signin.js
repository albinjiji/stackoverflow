import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Dimensions, ImageBackground} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') 
export default class Signin extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <ImageBackground source= {require('../images/im.jpg')} 
                resizeMode="cover" style={styles.image} >
            <Text style={styles.fontText}>Find & Explore World
             Top Places</Text>
            
            <View style={styles.login}>
                <Text style={styles.test} onPress={()=>navigate('Home')}>       Sign In</Text>
            </View>
            <View style={styles.login}><Text style={styles.test} onPress={()=>navigate ('Signup')}>     Sign Up</Text>
            </View>
            </ImageBackground>
            </View>
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
        color: '#00ff00'
    },
    form:{
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 23,
    },
    login:{
        marginHorizontal: 25,
        borderColor: '#f54542',
        marginTop: 25,
        backgroundColor: "#f54542",
        height: 50,
        width: 200,
        paddingLeft: 45,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 25
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