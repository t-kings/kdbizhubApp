import axios from 'axios';
export const getGiftCards = () =>{
	return (dispatch, getState)=>{
        axios.get('https://kdbizhubpi.online/v1/api/v1/gift%20cards')
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'got_giftCards_successfully', result:res.data.plans});
              }else{
                dispatch({type:'got_giftCards_error', err:res.data});
            }
          }).catch(err=>{
            dispatch({type:'got_giftCards_error', err:"Check your Internet Connection"});
          })
	}
}