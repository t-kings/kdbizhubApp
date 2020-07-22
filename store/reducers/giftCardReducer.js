const initstate = {
    cards:null,
    err:null
}

const giftCardReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'got_giftCards_successfully' :
            return {
                ...state,
                cards:action.result,
                err:null
            }
        case 'got_giftCards_error':
            return {
                ...state,
                cards:null,
                err:action.err
            }
        default:
            return state;
    }
}
export default giftCardReducer;
