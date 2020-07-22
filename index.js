import React, { Component } from 'react';
import {getCables} from './store/actions/cableActions'
import {getCryptocurrencies} from './store/actions/cryptoActions'
import {getData} from './store/actions/dataActions'
import {getGiftCards} from './store/actions/giftcardActions'
import {getPhones} from './store/actions/phoneActions'
import TabNavigator from './routes/homeTab';
import Loading from './screens/loading';
import {connect} from 'react-redux';
class Index extends Component {
	constructor(props){
		super(props)
		props.getCables();
		props.getCryptocurrencies();
		props.getData();
		props.getGiftCards();
		props.getPhones();
	}
  render(){
    const {cables, cryptos, data, giftCards, phones} = this.props;
    if(cables && cryptos && data && giftCards && phones){
      return (
          <TabNavigator />
      );
    }else{
      return(
      <Loading />
      )
    }
  }
}


const matchDispatchToProps = (dispatch) =>{
    return{
      getCables : ()=> dispatch(getCables()),
      getCryptocurrencies : ()=> dispatch(getCryptocurrencies()),
      getData : ()=> dispatch(getData()),
      getGiftCards : ()=> dispatch(getGiftCards()),
      getPhones : ()=> dispatch(getPhones())
    }
  }

const matchStateToProps = (state, ownProps)=>{
    return{
          cables:state.cables.cable,
          cryptos:state.cryptos.crypto,
          data:state.data.data,
          giftCards:state.giftCards.cards,
          phones:state.phones.phone
    }
  }

export default connect(matchStateToProps, matchDispatchToProps)(Index);
