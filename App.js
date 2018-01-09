import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {

    const {

      container,
      formControl,
      imgContainer,
      imgStyle,
      inputStyle,
      buttonStyle,
      buttonTxtStyle,
    } = styles;

    return (
      <View style={container}>

        <View style={formControl}>
          <View style={imgContainer}>
            <Image
              style={imgStyle}
              source={require('./src/img/logo.png')}
              />
          </View>
        </View>  

        <View style={formControl}>
          <TextInput
            underlineColorAndroid='transparent'
            style={inputStyle}
            onChangeText={(text) => this.setState({text})}
            placeholder="Please enter here.."
            value={this.state.text}
            /> 
        </View>

        <View style={formControl}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={this.onPress}
          > 
            <Text style={buttonTxtStyle}>Send</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formControl: {
    width: '80%',
    marginBottom: 36
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  imgStyle: {
    width: 72,
    height: 72
  },

  inputStyle: {
    height: 48, 
    borderColor: '#c9c9c9', 
    borderWidth: 1,
    paddingLeft: 12
  },

  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#85DAF8',
    paddingHorizontal: 24,
    paddingVertical: 14
  },

  buttonTxtStyle: {
    color: '#FFF',
    fontSize: 16
  }

};
