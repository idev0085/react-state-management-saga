import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import itemReducer from './reducers/itemReducer';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    items: itemReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
