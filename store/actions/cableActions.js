import axios from 'axios';
export const getCables = () =>{
	return (dispatch, getState)=>{
        axios.get('https://kdbizhubpi.online/v1/api/v1/cable%20plans')
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'got_cable_successfully', result:res.data.plans});
              }else{
                dispatch({type:'got_cable_error', err:res.cable});
            }
          }).catch(err=>{
            dispatch({type:'got_cable_error', err:"Check your Internet Connection"});
          })
	}
}