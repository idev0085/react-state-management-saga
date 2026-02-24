import { call, put, takeEvery } from 'redux-saga/effects';
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    CREATE_ITEM_REQUEST,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAILURE,
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
} from '../actions/itemActions';

const API_URL = 'http://localhost:5000/api';

// Fetch Items Saga
function* fetchItems() {
    try {
        const response = yield call(fetch, `${API_URL}/items`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = yield call([response, 'json']);
        yield put({
            type: FETCH_ITEMS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: FETCH_ITEMS_FAILURE,
            payload: error.message,
        });
    }
}

// Create Item Saga
function* createItem(action) {
    try {
        const response = yield call(fetch, `${API_URL}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = yield call([response, 'json']);
        yield put({
            type: CREATE_ITEM_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: CREATE_ITEM_FAILURE,
            payload: error.message,
        });
    }
}

// Update Item Saga
function* updateItem(action) {
    try {
        const { id, ...payload } = action.payload;
        const response = yield call(fetch, `${API_URL}/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = yield call([response, 'json']);
        yield put({
            type: UPDATE_ITEM_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: UPDATE_ITEM_FAILURE,
            payload: error.message,
        });
    }
}

// Delete Item Saga
function* deleteItem(action) {
    try {
        const response = yield call(fetch, `${API_URL}/items/${action.payload}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        yield put({
            type: DELETE_ITEM_SUCCESS,
            payload: action.payload,
        });
    } catch (error) {
        yield put({
            type: DELETE_ITEM_FAILURE,
            payload: error.message,
        });
    }
}

// Root Saga
export function* rootItemSaga() {
    yield takeEvery(FETCH_ITEMS_REQUEST, fetchItems);
    yield takeEvery(CREATE_ITEM_REQUEST, createItem);
    yield takeEvery(UPDATE_ITEM_REQUEST, updateItem);
    yield takeEvery(DELETE_ITEM_REQUEST, deleteItem);
}
