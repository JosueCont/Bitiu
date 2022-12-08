import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import NewsReducer from './NewsReducer';
import DetailReducer from './DetailReducer';

export default combineReducers({
  home: HomeReducer,
  news: NewsReducer,
  detail: DetailReducer
});
