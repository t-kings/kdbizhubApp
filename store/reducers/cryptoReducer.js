const initstate = {
    crypto:null,
    err:null
}

const cryptoReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'got_cryptocurrencies_successfully' :
            return {
                ...state,
                crypto:action.result,
                err:null
            }
        case 'got_cryptocurrencies_error':
            return {
                ...state,
                crypto:null,
                err:action.err
            }
        default:
            return state;
    }
}
export default cryptoReducer;
