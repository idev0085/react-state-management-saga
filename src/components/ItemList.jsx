import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/actions/itemActions';

const ItemList = ({ onEditItem }) => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.items);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteItem(id));
        }
    };

    if (loading) {
        return <div style={styles.loading}>Loading items...</div>;
    }

    if (error) {
        return <div style={styles.error}>Error: {error}</div>;
    }

    if (items.length === 0) {
        return <div style={styles.empty}>No items found. Create one to get started!</div>;
    }

    return (
        <div style={styles.container}>
            <h2>Items List ({items.length})</h2>
            <ul style={styles.list}>
                {items.map((item) => (
                    <li key={item.id} style={styles.listItem}>
                        <div style={styles.itemContent}>
                            <h3 style={styles.itemTitle}>{item.title}</h3>
                            <p style={styles.itemDescription}>{item.description}</p>
                            <small style={styles.itemId}>ID: {item.id}</small>
                        </div>
                        <div style={styles.itemActions}>
                            <button
                                onClick={() => onEditItem(item)}
                                style={styles.editBtn}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                style={styles.deleteBtn}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    itemContent: {
        flex: 1,
    },
    itemTitle: {
        margin: '0 0 5px 0',
        color: '#333',
        fontSize: '18px',
    },
    itemDescription: {
        margin: '5px 0',
        color: '#666',
        fontSize: '14px',
    },
    itemId: {
        color: '#999',
        fontSize: '12px',
    },
    itemActions: {
        display: 'flex',
        gap: '10px',
        marginLeft: '15px',
    },
    editBtn: {
        padding: '8px 16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    deleteBtn: {
        padding: '8px 16px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    loading: {
        textAlign: 'center',
        padding: '40px',
        fontSize: '18px',
        color: '#007bff',
    },
    error: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderRadius: '4px',
        margin: '20px',
    },
    empty: {
        textAlign: 'center',
        padding: '40px',
        fontSize: '16px',
        color: '#666',
        backgroundColor: '#e9ecef',
        borderRadius: '4px',
        margin: '20px',
    },
};

export default ItemList;
