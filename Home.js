import React , { Component } from 'react';
import { Text , View , StyleSheet , SafeAreaView , TouchableOpacity ,
Platform , StatusBar , ImageBackground , Image } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
              <SafeAreaView styles={styles.droidSafeArea}/>
                <ImageBackground 
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}
                >
                <View style={styles.container}>
                  <Image 
                  source={require('../assets/main-icon.png')}
                  style={styles.mainIcon} />
                  <Text style={styles.titleText} >Stellar App</Text>
                </View>
                <TouchableOpacity
                  style={styles.routeCard}
                  onPress={()=>{this.props.navigation.navigate('Space Crafts')}}>
                  <Text style={styles.routeText} >Space Crafts</Text>
                  <Image 
                  source={require('../assets/space_crafts.png')}
                  style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.routeCard}
                  onPress={()=>{this.props.navigation.navigate('Star Map')}}>
                  <Text style={styles.routeText} >Star Map</Text>
                  <Image 
                  source={require('../assets/star_map.png')}
                  style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.routeCard}
                  onPress={()=>{this.props.navigation.navigate('Daily Pic')}}>
                  <Text style={styles.routeText} >Daily Pictures</Text>
                  <Image 
                  source={require('../assets/daily_pictures.png')}
                  style={styles.iconImage} />
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    droidSafeArea: { 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
    backgroundImage: {
        flex: 1, resizeMode:'cover',
    }, 
    routeCard: { 
        flex: 0.25, 
        marginLeft: 50, 
        marginRight: 50, 
        marginTop: 50,
        borderRadius: 50, 
        backgroundColor: 'white' ,
        width:250
    },
    titleText:{
        color:'white',
        fontSize:40,
        margin:20,
        fontWeight:'bold'
    },
    mainIcon:{
      width:200,
      height:200
    },
    routeText: { 
      fontSize: 25, 
      fontWeight: "bold", 
      color: "deeppink", 
      marginTop: 15, 
      paddingLeft: 20 
    },
    iconImage: { 
      position: "absolute", 
      height: 100, 
      width: 100, 
      resizeMode: "contain", 
      right: -40, 
      top:-20
    }
})