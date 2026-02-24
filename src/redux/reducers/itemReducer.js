import {
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAILURE,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
    SET_LOADING,
} from '../actions/itemActions';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };

        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
                error: null,
            };

        case CREATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                loading: false,
                error: null,
            };

        case UPDATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
                loading: false,
                error: null,
            };

        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default itemReducer;
