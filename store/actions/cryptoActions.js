import axios from 'axios';
export const getCryptocurrencies = () =>{
	return (dispatch, getState)=>{
        axios.get('https://kdbizhubpi.online/v1/api/v1/cryptocurrencies')
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'got_cryptocurrencies_successfully', result:res.data.cryptocurrencies});
              }else{
                dispatch({type:'got_cryptocurrencies_error', err:res.data});
            }
          }).catch(err=>{
            dispatch({type:'got_cryptocurrencies_error', err:"Check your Internet Connection"});
          })
	}
}