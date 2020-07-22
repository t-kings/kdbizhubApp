import  React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {globalStyles} from '../stylesheet'
import {connect} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import bitcoin from '../assets/bitcoin.png'
import giftcard from '../assets/giftcard.png'
import airtime from '../assets/airtime.png'
import dataPlan from '../assets/dataPlan.png'
import tv from '../assets/tv.png'
import phone from '../assets/phone.png'
import eth from '../assets/eth.png'
import utilities from '../assets/utilities.png'
class Home extends Component {
  render(){
	const {cryptos, cable, data, giftCards, phones} = this.props;
	return (
	  <View style={globalStyles.container}>
		<ScrollView>
		  <View style={{height:200}}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			  <View style={globalStyles.containerBtc}>
				<Image style={globalStyles.carouselImage} source={require('../assets/btc.png')} />
				<Text style={globalStyles.carouselHeader}>
				  BTC
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text style={{color:'green'}}>Buy Price</Text>
				  <Text style={{color:'#ffffff'}}>Sell Price</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerEth}>
				<Image style={globalStyles.carouselImage} source={require('../assets/eth.png')} />
				<Text style={globalStyles.carouselHeader}>
				  ETH
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text style={{color:'green'}}>Buy Price</Text>
				  <Text style={{color:'#ffffff'}}>Sell Price</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerGift}>
				<Image style={globalStyles.carouselImage} source={require('../assets/eth.png')} />
				<Text style={globalStyles.carouselHeader}>
				  Gift Card
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text style={{color:'green'}}>Buy Price</Text>
				  <Text style={{color:'#ffffff'}}>Sell Price</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerData}>
				<Image style={globalStyles.carouselImage} source={require('../assets/data.png')} />
				<Text style={globalStyles.carouselHeader}>
				  Data plans
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text style={{color:'green'}}>Price</Text>
				  <Text style={{color:'#ffffff'}}>Size</Text>
				  <Text style={{color:'#000000'}}>Validity</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerAirtime}>
				<Image style={globalStyles.carouselImage} source={require('../assets/call.png')} />
				<Text  style={globalStyles.carouselHeader}>
				  Airtime
				</Text>
			  </View>
			  <View style={globalStyles.containerCable}>
				<Image style={globalStyles.carouselImage} source={require('../assets/tv.png')} />
				<Text  style={globalStyles.carouselHeader}>
				  {cable[0].network}
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text style={{color:'#000000'}}>{cable[0].amount}</Text>
				  <Text style={{color:'#000000'}}>{cable[0].name}</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerPhone}>
				<Image style={globalStyles.carouselImage} source={require('../assets/eth.png')} />
				<Text style={globalStyles.carouselHeader}>
				  Phones
				</Text>
				<View style={{...globalStyles.flexBetweenRow, justifyContent:'center'}}>
				  <Text  style={{color:'#000000'}}>Price</Text>
				</View>
			  </View>
			  <View style={globalStyles.containerCrypto}>
				<Image style={globalStyles.carouselImage} source={require('../assets/eth.png')} />
				<Text style={globalStyles.carouselHeader}>
				  Crypto
				</Text>
				<View style={globalStyles.flexBetweenRow}>
				  <Text  style={{color:'#000000'}} >Buy Price</Text>
				  <Text  style={{color:'#ffffff'}}>Sell Price</Text>
				</View>
			  </View>
			</ScrollView>
		  </View>
		  <View style={globalStyles.category}>
			<View style={globalStyles.categoryItem}>
			  <Image source={bitcoin} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Bitcoin</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={eth} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Crypto Currency</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={giftcard} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Gift Card</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={airtime} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Airtime</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={dataPlan} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Data Plans</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={tv} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Cable Plans</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={phone} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Phones</Text>
			</View>
			<View style={globalStyles.categoryItem}>
			  <Image source={utilities} style={{height:20, marginBottom:20, resizeMode:'contain'}} />
			  <Text style={{textAlign:'center'}}>Bill Payment</Text>
			</View>
		  </View>
		  <View style={globalStyles.recommended}>
			<View style={globalStyles.recommendedHeader}>
				<Text style={globalStyles.title}>Recommended for You</Text>
			</View>
			<View style={globalStyles.recommendedBody}>
				<View style={globalStyles.productBox}>
					<View style={globalStyles.productBoxImageBox}>
						<Image source={bitcoin} style={globalStyles.productBoxImage}/>
					</View>
					<Text style={globalStyles.btcPrice}>1BTC = 6878 USD</Text>
					<View style={globalStyles.productFlexBetweenRow}>
					<Text style={{color:'green'}}>Buy:240</Text>
					<Text style={{color:'red'}}>Sell:467</Text>
					</View>
				</View>
				<View style={globalStyles.productBox}>
					<View style={globalStyles.productBoxImageBox}>
						<Image source={eth} style={globalStyles.productBoxImage}/>
					</View>
					<Text style={globalStyles.btcPrice}>1ETH = 6878 USD</Text>
					<View style={globalStyles.productFlexBetweenRow}>
					<Text style={{color:'green'}}>Buy:240</Text>
					<Text style={{color:'red'}}>Sell:467</Text>
					</View>
				</View>
				{
					cryptos.map(crypto=>{
						return(
							<View key={crypto.name+crypto.id} style={globalStyles.productBox}>
								<View style={globalStyles.productBoxImageBox}>
									<Image source={{uri: crypto.picture}} style={globalStyles.productBoxImage}/>
								</View>
								<Text style={globalStyles.btcPrice}>{crypto.name}</Text>
								<View style={globalStyles.productFlexBetweenRow}>
								<Text style={{color:'green'}}>Buy: {crypto.convertRate}</Text>
								<Text style={{color:'red'}}>Sell: {crypto.rate}</Text>
								</View>
							</View>
						)
					})
				}
				{
					data.map(item=>{
						return(
							<View key={item.network+item.id} style={globalStyles.productBox}>
								<View style={globalStyles.productBoxImageBox}>
									{/* <Image source={{uri: crypto.picture}} style={globalStyles.productBoxImage}/> */}
								<Text style={globalStyles.btcPrice}>{item.network}</Text>
								</View>
								<Text style={globalStyles.btcPrice}>{item.size}</Text>
								<View style={globalStyles.productFlexBetweenRow}>
								<Text style={{color:'green'}}>Buy: {item.amount}</Text>
								<Text style={{color:'red'}}>Sell: {item.validity}</Text>
								</View>
							</View>
						)
					})
				}
				{
					giftCards.map(item=>{
						return(
							<View key={item.name+item.id} style={globalStyles.productBox}>
								<View style={globalStyles.productBoxImageBox}>
									<Image source={{uri: item.picture}} style={globalStyles.productBoxImage}/>
								</View>
								<Text style={globalStyles.btcPrice}>{item.name}</Text>
								<View style={globalStyles.productFlexBetweenRow}>
								<Text style={{color:'green'}}>Buy: {item.in_price}</Text>
								<Text style={{color:'red'}}>Sell: {item.out_price}</Text>
								</View>
							</View>
						)
					})
				}
				{
					phones.map(item=>{
						return(
							<View key={item.name+item.id} style={[globalStyles.productBox, {borderBottomWidth:0}]} >
								<View style={globalStyles.productBoxImageBox}>
									<Image source={{uri: item.picture}} style={globalStyles.productBoxImage}/>
								</View>
								<Text style={globalStyles.btcPrice}>{item.price}</Text>
								<View style={globalStyles.productFlexBetweenRow}>
								</View>
							</View>
						)
					})
				}
			</View>
		  </View>
		</ScrollView>
	  </View>
	);
  }
}

  
const matchStateToProps = (state, ownProps)=>{
  const cables = state.cables.cable;
  const cryptos=state.cryptos.crypto;
  const datas=state.data.data;
  const giftCards=state.giftCards.cards;
  const phones=state.phones.phone;
  var cryptosNumbers = [];
  var cablesNumbers = [];
  var dataNumbers = [];
  var giftCardsNumbers = [];
  var phonesNumbers = [];
  var cable = [];
  var crypto = [];
  var data = [];
  var giftCard = [];
  var phone = [];
  var number;
  while(cable.length < 4){
	number = Math.floor(Math.random() * cables.length);
	if(!cablesNumbers.includes(number)){
	  cable.push(cables[number]);
	  cablesNumbers.push(number);
	}
  }
  while(crypto.length < 2){
	number = Math.floor(Math.random() * cryptos.length);
	if(!cryptosNumbers.includes(number)){
	  crypto.push(cryptos[number]);
	  cryptosNumbers.push(number);
	}
  }
  while(data.length < 4){
	number = Math.floor(Math.random() * datas.length);
	if(!dataNumbers.includes(number)){
	  data.push(datas[number]);
	  dataNumbers.push(number);
	}
  }
  while(giftCard.length < 4){
	number = Math.floor(Math.random() * giftCards.length);
	if(!giftCardsNumbers.includes(number)){
	  giftCard.push(giftCards[number]);
	  giftCardsNumbers.push(number);
	}
  }
  while(phonesNumbers.length < 4){
	number = Math.floor(Math.random() * phones.length);
	if(!phonesNumbers.includes(number)){
	  phone.push(phones[number]);
	  phonesNumbers.push(number);
	}
  }
  return{
		cable:cable,
		cryptos:crypto,
		data:data,
		giftCards:giftCard,
		phones:phone
  }
}

export default connect(matchStateToProps, null)(Home);


