import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';

export default class Newsscreen extends Component {
  render() {
    // if (!this.props.route.params) {
    //   this.props.navigation.navigate('Home');
    // } else {
    return (
      <View style={styles.contanier}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/world-news-flat-vector-icon-news-symbol-logo-illustration-M2HDGA.jpg')}
              style={styles.image}></Image>
          </View>
          <Text style={styles.storyTitleText}>
            {this.props.route.params.news.title}
          </Text>
          <Text style={styles.storyTitleText}>
            {this.props.route.params.news.Description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  storyTitleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    color: 'white',
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  image: {
    resizeMode: 'contain',
    width: '50%',
    alignSelf: 'center',
    height: RFValue(50),
  },
});
