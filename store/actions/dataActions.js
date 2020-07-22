import axios from 'axios';
export const getData = () =>{
	return (dispatch, getState)=>{
        axios.get('https://kdbizhubpi.online/v1/api/v1/data%20plans')
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'got_data_successfully', result:res.data.plans});
              }else{
                dispatch({type:'got_data_error', err:res.data});
            }
          }).catch(err=>{
            dispatch({type:'got_data_error', err:"Check your Internet Connection"});
          })
	}
}