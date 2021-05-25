import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import cityData from '../Screen/cityData';
import cityDetails from '../Screen/cityDetails';

const Stack = createStackNavigator();

export default class Navigation extends React.Component {
    render() {
       
        return (
            
                <Stack.Navigator >
                    <Stack.Screen name="cityData" component={cityData} options = {{headerShown:false}} />
                    <Stack.Screen name="cityDetails" component={cityDetails} options = {{
                        title : "WeatherApp",
                         headerStyle: {
                            backgroundColor: '#00804A',
                          },
                          headerTintColor: '#fff',
                          headerTitleAlign: 'center'
                          
                    }} />
                </Stack.Navigator>
            
        )
    }
}