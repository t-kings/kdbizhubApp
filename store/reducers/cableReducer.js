const initstate = {
    cable:null,
    err:null
}

const cableReducer = (state = initstate, action) =>{
    switch(action.type){
        case 'got_cable_successfully' :
            return {
                ...state,
                cable:action.result,
                err:null
            }
        case 'got_cable_error':
            return {
                ...state,
                cable:null,
                err:action.err
            }
        default:
            return state;
    }
}
export default cableReducer;
