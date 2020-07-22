const initstate = {
    phone:null,
    err:null
}

const phoneReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'got_phones_successfully' :
            return {
                ...state,
                phone:action.result,
                err:null
            }
        case 'got_phones_error':
            return {
                ...state,
                phone:null,
                err:action.err
            }
        default:
            return state;
    }
}
export default phoneReducer;
