import { combineReducers } from 'redux';
import alertReducer from './alerts';
import articleReducer from './articles';

export default combineReducers({
    alerts: alertReducer,
    articles: articleReducer
});