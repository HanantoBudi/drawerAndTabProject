import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {TabNavigator} from 'react-navigation'
import Friends from './Friends'
import Relatives from './Relatives'

class Main extends Component {
    static navigationOptions = {
        headerTitle: 'Main Screen',
        DrawerLable: 'Main',
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
                    Welcome to Main Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'blue',
        flex: 1,
        justifyContent:'center'
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign:'center'
    }
});

const Tab = TabNavigator({
    friends: {
        screen:Friends
    },
    relatives: {
        screen:Relatives
    },
})

export default Tab;