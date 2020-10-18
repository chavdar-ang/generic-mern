import { combineReducers } from 'redux';
import alertReducer from './alerts';
import entityReducer from './entities';

export default combineReducers({
    alerts: alertReducer,
    entities: entityReducer
});