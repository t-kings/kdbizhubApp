import axios from 'axios';
export const getPhones = () =>{
	return (dispatch, getState)=>{
        axios.get('https://kdbizhubpi.online/v1/api/v1/phones')
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'got_phones_successfully', result:res.data.phones});
              }else{
                dispatch({type:'got_phones_error', err:res.data});
            }
          }).catch(err=>{
            dispatch({type:'got_phones_error', err:"Check your Internet Connection"});
          })
	}
}