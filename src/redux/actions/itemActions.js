// Action Types
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const SET_LOADING = 'SET_LOADING';

// Action Creators
export const fetchItems = () => ({
    type: FETCH_ITEMS_REQUEST,
});

export const createItem = (payload) => ({
    type: CREATE_ITEM_REQUEST,
    payload,
});

export const updateItem = (id, payload) => ({
    type: UPDATE_ITEM_REQUEST,
    payload: { id, ...payload },
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM_REQUEST,
    payload: id,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});
