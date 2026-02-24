import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from './redux/actions/itemActions';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
    const dispatch = useDispatch();
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleEditItem = (item) => {
        setEditingItem(item);
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>React Redux Saga CRUD</h1>
                <p>State Management with Saga Side Effects</p>
            </header>

            <main style={styles.main}>
                <ItemForm editingItem={editingItem} onCancelEdit={handleCancelEdit} />
                <ItemList onEditItem={handleEditItem} />
            </main>

            <footer style={styles.footer}>
                <p>
                    API Backend: <code>http://localhost:5000</code>
                </p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#282c34',
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    main: {
        flex: 1,
        padding: '20px',
    },
    footer: {
        backgroundColor: '#282c34',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto',
    },
};

export default App;
