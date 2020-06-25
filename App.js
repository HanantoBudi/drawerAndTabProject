/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import Home from './scr/Home'
import Tab from './scr/Main'

const Drawer = DrawerNavigator({
  home:{
    screen:Home,
  },
  main:{
    screen:Tab,
  }
})
export default Drawer