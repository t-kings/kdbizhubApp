import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';
// import * as Font from 'expo-font';
const windowWidth = Dimensions.get('window').width;
const width_proportion = '80%';
export const globalStyles = StyleSheet.create({
    header:{
        flex: 1,
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerLogoContainer:{
        flex:3
    },
    headerLogo:{
        width: 50,
        height:25
    },
    headerIcons:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerIconsIcon:{
        marginLeft: 5,
        marginRight:5
    },
    container:{
        flex:1,
        padding:10
    },
    category:{
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10,
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 3, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 2,
        backgroundColor:'#ffffff',
        marginTop:20
    },
    categoryItem:{
        width:'23%',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        height: 100,
        borderRadius:10,
        padding:10,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 3, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 2,
        backgroundColor:'#ffffff',
        marginBottom:10
    },
    containerBtc:{
        width:windowWidth - 20,
        backgroundColor:"#ffa500",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerEth:{
        width:windowWidth - 20,
        backgroundColor:"#000000",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerGift:{
        width:windowWidth - 20,
        backgroundColor:"purple",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerData:{
        width:windowWidth - 20,
        backgroundColor:"orangered",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerCable:{
        width:windowWidth - 20,
        backgroundColor:"#292930",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerCrypto:{
        width:windowWidth - 20,
        backgroundColor:"#E426CA",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerAirtime:{
        width:windowWidth - 20,
        backgroundColor:"green",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    containerPhone:{
        width:windowWidth - 20,
        backgroundColor:"#32064a",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'nowrap'
    },
    carouselImage:{
        height:50,
        resizeMode: 'contain',
    },
    carouselHeader:{
        marginTop:10,
        marginBottom:10,
        fontSize:30,
        color:'#ffffff',
        fontWeight:'900',
    },
    flexBetweenRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:width_proportion,
        marginTop:10
    },
    recommended:{
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 3, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 2,
        backgroundColor:'#ffffff',
        marginTop:20,
        marginBottom:20
    },
    recommendedHeader:{
        backgroundColor:'#ffa500',
        padding:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    recommendedBody:{
        justifyContent:'space-between',
        alignItems:'stretch',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    productBox:{
        width:'50%',
        borderColor:'#cecece',
        borderWidth:1,
        borderWidth:1,
        padding:10
    },
    productBoxImageBox:{
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    productBoxImage:{
        height:50,
        resizeMode:'contain'
    },
    btcPrice:{
        textAlign:'center'
    },
    productFlexBetweenRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    }
})