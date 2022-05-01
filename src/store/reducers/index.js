import { combineReducers } from 'redux';

import app from './app';
import albums from './albums';
import photos from './photos';

const combinedReducers = combineReducers({ app, albums, photos });
export default combinedReducers;
