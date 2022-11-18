import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';

export default class Complaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      issue: '',
      descrition: '',
      address: '',
      pincode: '',
    };
  };

addComplaint(){
  var {name,issue,descrition,address,pincode}=this.state
    db.ref ('complaints/').update({
      name_person:name,
      issue:issue,
      descrition:descrition,
      address_of_the_person:address,
      pincode:pincode,
    })
    alert ("complaint is submitted")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Resister Complaint</Text>
          <TextInput
            style={
              (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
            }
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name Of the Person'}
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={
              (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
            }
            onChangeText={(issue) => this.setState({ issue })}
            placeholder={'Issue'}
            multiline={true}
            numberOfLines={2}
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={
              (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
            }
            onChangeText={(descrition) => this.setState({ descrition })}
            placeholder={'Description'}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={
              (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
            }
            onChangeText={(address) => this.setState({ address })}
            placeholder={'Addreas'}
            multiline={true}
            numberOfLines={2}
            placeholderTextColor="white"></TextInput>
          <TextInput
            style={
              (styles.inputFont, styles.inputFontExtra, styles.inputTextBig)
            }
            onChangeText={(pincode) => this.setState({ pincode })}
            placeholder={'PinCode'}
            placeholderTextColor="white"></TextInput>
        </View>
        <View>
        <Button
                  onPress={() => this.addComplaint()}
                  title="Submit"
                  color="green"
                />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
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
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
    marginLeft: 50,
  },
  appTitleTextLight: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    padding: RFValue(10),
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
