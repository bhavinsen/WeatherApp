import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native';
import Navigation from "./src/Navigation/Navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers } from 'redux';
import cityData from './src/Redux/reducer'
import { Provider } from 'react-redux';

const store = createStore(cityData)

const screenHeight = Dimensions.get('screen').height;
class SplashScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 34, color: "#0A804A",  fontWeight: 'bold',fontFamily:"RobotoReg" }}>WeatherApp</Text>
      </View>
    );
  }
}



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }




  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});