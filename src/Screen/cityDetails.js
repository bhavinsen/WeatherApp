import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from "react-native"
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import OneSignal from 'react-native-onesignal'

export default class cityDetails extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    async componentDidMount(){
        OneSignal.setLogLevel(6, 0);
        OneSignal.setAppId("78789114-e8a0-4573-8b8a-ee5df6e33900");
    }
    render() {
        const itemDetails = this.props.route.params.data.coord
        const details = this.props.route.params.data
        return (
          <View style={{flex:1}}>
              
            <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation = {true}
            style={{ height:"65%"}}
            region={{
              latitude: itemDetails.lat,
              longitude: itemDetails.lon,
              latitudeDelta: 0.0015,
              longitudeDelta: 0.035,
            }}
            
          >
            <View>
       <Marker  
            coordinate={{ latitude: itemDetails.lat, longitude: itemDetails.lon }}  
            title = {details.name}   
          >
           <Image
                source = {require("../../assets/google.png")}
                style ={{height:30,width:30,alignSelf:'center'}}
           />
           <Text style={{textAlign:'center'}}>{details.name}</Text>
        </Marker> 
        
        </View>
        
     
    </MapView>
    <ScrollView style={{marginBottom:20}}>
            <View style={{flexDirection:'row',width:"100%"}}>
            <View style={{marginLeft:'5%',marginTop:"5%",width:"40%"}}>
                <Text style={{fontSize:24,fontWeight:'bold',fontFamily:'Roboto-Black'}}>{details.name}</Text>
                <Text style={{marginTop:5,fontSize:18}}>{details.weather[0].description}</Text>
                <Text style={{marginTop:5,fontSize:18}}>Humidity : {details.main.humidity}</Text>
                <Text style={{marginTop:5,fontSize:18}}>Wind Speed : {details.wind.speed}</Text>
                <Text style={{marginTop:5,fontSize:18}}>Max. Temp: {(details.main.temp_max - 273.15).toFixed(0)}°C</Text>
                <Text style={{marginTop:5,fontSize:18}}>Min. Temp: {(details.main.temp_min - 273.15).toFixed(0)}°C</Text>
            </View>
            <View style={{marginTop:"12%",width:"60%",alignItems:'center'}}>
                <Text style={{fontSize:32,fontWeight:'bold',fontFamily:'Roboto-Regular'}}>{(details.main.temp - 273.15).toFixed(0)}°C</Text>
                <Image
                    source = {require("../../assets/cloud.png")}
                    style={{height:70,width:100,marginTop:5}}
                />
                 
            </View>
            </View>
        </ScrollView>
      </View>
       
        )
    }
}