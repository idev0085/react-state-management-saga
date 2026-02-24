# React Redux Saga CRUD Application

This is a complete CRUD example using React, Redux, and Redux-Saga for state management.

## Project Structure

```
src/
├── components/
│   ├── ItemForm.jsx      # Form to create/update items
│   └── ItemList.jsx      # Display list of items
├── redux/
│   ├── actions/
│   │   └── itemActions.js    # Action creators and types
│   ├── reducers/
│   │   └── itemReducer.js    # Reducer logic
│   ├── sagas/
│   │   ├── itemSaga.js       # Saga side effects
│   │   └── index.js          # Root saga
│   └── store.js              # Redux store configuration
├── App.jsx              # Main app component
├── index.jsx            # Entry point
├── index.css            # Global styles
└── README.md           # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install react redux react-redux redux-saga
npm install --save-dev @babel/core @babel/preset-react @babel/preset-env babel-loader webpack webpack-cli webpack-dev-server
```

### 2. Start Backend Server

```bash
cd backend
npm install
npm run dev
# Server will run on http://localhost:5000
```

### 3. Start React App

```bash
npm start
# App will run on http://localhost:3000
```

## Features

- **Fetch Items**: Load all items from the backend
- **Create Item**: Add new items with title and description
- **Update Item**: Edit existing items
- **Delete Item**: Remove items with confirmation
- **Loading State**: Shows loading indicator while fetching
- **Error Handling**: Displays errors if API calls fail

## Redux-Saga Flow

### Fetch Items Flow
```
User Action (Fetch) 
  ↓
Action Creator (fetchItems())
  ↓
Reducer (SET_LOADING)
  ↓
Saga (watchFetchItems)
  ↓
API Call (GET /api/items)
  ↓
Success Action (FETCH_ITEMS_SUCCESS)
  ↓
Reducer (Update state with items)
  ↓
Component Re-renders
```

### Create Item Flow
```
User Submits Form
  ↓
Action Creator (createItem(data))
  ↓
Saga (watchCreateItem)
  ↓
API Call (POST /api/items)
  ↓
Success Action (CREATE_ITEM_SUCCESS)
  ↓
Reducer (Add item to state)
  ↓
Component Re-renders
```

## API Endpoints Used

- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Key Concepts

### Actions
Define what happens in the application (e.g., fetch, create, update, delete)

### Reducers
Update state based on actions in a pure function

### Sagas
Handle side effects like API calls, triggered by actions

### Store
Centralized state management combining reducers and sagas

## Example Usage in Components

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, createItem, deleteItem } from './redux/actions/itemActions';

function MyComponent() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.items);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleCreate = () => {
        dispatch(createItem({ title: 'New Item', description: 'Details' }));
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        // JSX here
    );
}
```

## Benefits of Using Redux-Saga

1. **Centralized State**: Single source of truth
2. **Predictable State Changes**: Reducers are pure functions
3. **Side Effect Management**: Sagas handle async operations
4. **Testability**: Easy to test actions, reducers, and sagas
5. **Time-Travel Debugging**: Redux DevTools integration
6. **Scalability**: Well-suited for large applications

## Troubleshooting

### API Connection Error
- Ensure backend is running on http://localhost:5000
- Check CORS settings in backend/server.js

### Items not updating
- Open Redux DevTools to inspect actions and state
- Check browser console for error messages

### Form not submitting
- Verify all required fields are filled
- Check network tab in developer tools for API errors
