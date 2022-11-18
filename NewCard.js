import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import firebase from "firebase";

export default class Newcard extends Component{
  render(){
    return(
       <TouchableOpacity
          onPress={()=>
             this.props.navigation.navigate("Newsscreen", {
               news: this.props.news
             })
           }
        >
       <View style={styles.cardContainer}>
         <Image
        source={require("../assets/world-news-flat-vector-icon-news-symbol-logo-illustration-M2HDGA.jpg")}
        style={styles.image}
         >
         </Image>
         <Text style={styles.storyTitleText}>{this.props.news.title}</Text>
       </View>
      </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  contanier:{
    flex:1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  image: {
    resizeMode: "contain",
    width: "50%",
    alignSelf: "center",
    height: RFValue(50)
  },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white"
  },
})