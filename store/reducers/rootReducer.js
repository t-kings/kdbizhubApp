import {combineReducers} from 'redux';
import giftCardReducer from './giftCardReducer';
import cryptoReducer from './cryptoReducer';
import phoneReducer from './phoneReducer';
import dataReducer from './dataReducer';
import cableReducer from './cableReducer';

const rootReducer= combineReducers({
        giftCards:giftCardReducer,
        cryptos:cryptoReducer,
        phones:phoneReducer,
        data:dataReducer,
        cables:cableReducer
})

export default rootReducer;