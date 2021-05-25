import axios from 'axios'
import React, { Component } from 'react'
import {View,Text, StatusBar, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { actions as cityDataAction } from "../Redux/reducer";


 class cityData extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            loader : true
        }
    }
   async componentDidMount(){
        const data = axios.get(`https://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=6e61d94e865a761a2aba00995b015135`)
        .then(res => {
            const jsondata = res.data.list;
          //  console.log("Value od data",data)
          this.props.cityDataAction(jsondata)
            this.setState({ data : jsondata,loader : false });
          })
          
    }
    render(){
        console.log("Value of response data is",this.props.cityData)
        if(this.props.cityData.length == ""){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator color= " #00804A" size = "large" style={{}} />
                </View>
            )
        }
        else{
            return(
                <View style={{flex:1}}>
                    <View style={{height:60,backgroundColor:"#00804A",width:"100%",justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:22,color:"#FFFFFF"}}>WeatherApp</Text>
                    <StatusBar backgroundColor="#024024"/>
                    </View>
                    <ScrollView>
                    {
                        this.props.cityData.map((item)=>(
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("cityDetails",{
                            "data" : item
                        })} >
                            <View style={{height:70,width:"100%",borderBottomWidth:0.5,borderBottomColor:"#a9a9a9",flexDirection:'row',justifyContent:'space-between',}}>
                            <View style={{justifyContent:'space-evenly',marginLeft:"5%"}}>
                            <Text style={{fontSize:20}}>{item.name}</Text>
                            <Text style={{fontSize:16}}>{item.weather[0].main}</Text>
                            </View>
                            <View style={{justifyContent:'center',marginRight:"5%",}}>
                                <Text style={{fontSize:30,}}>{(item.main.temp - 273.15).toFixed(0)}°<Text style={{fontSize:24}}>C</Text></Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        ))
                    }
                    </ScrollView>
                </View>
            )
        }
     
    }
}

const mapStateToProps = (state) => {
    console.log("Value of state is",state);
    return {
      cityData: state.cityData,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        cityDataAction: (val) => {
        dispatch(cityDataAction.cityDataAction(val));
      }, 
  };
}
  

  export default connect(mapStateToProps, mapDispatchToProps)(cityData);
