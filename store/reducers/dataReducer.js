const initstate = {
    data:null,
    err:null
}

const dataReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'got_data_successfully' :
            return {
                ...state,
                data:action.result,
                err:null
            }
        case 'got_data_error':
            return {
                ...state,
                data:null,
                err:action.err
            }
        default:
            return state;
    }
}
export default dataReducer;
