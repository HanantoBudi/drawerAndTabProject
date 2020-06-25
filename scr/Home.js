import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home Screen',
        DrawerLable: 'Home',
    }
    constructor() {
        super();
        this.state={
            showMe:true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Home Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#F5FCFF',
        flex: 1,
        justifyContent:'center'
    },
    instruction:{
        color:'#333333',
        marginBottom:5,
        textAlign:'center'
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign:'center'
    }
});