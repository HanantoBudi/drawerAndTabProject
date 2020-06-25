import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Relatives extends Component {
    static navigationOptions = {
        headerTitle: 'Relatives Screen',
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
                    Welcome to Relatives Screen
                </Text>
                <Text>Mita</Text>
                <Text>Rara</Text>
                <Text>Fira</Text>
                <Text>Melani</Text>
                <Text>Andhika</Text>
                <Text>Tasya</Text>
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