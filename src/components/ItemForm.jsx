import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem, updateItem } from '../redux/actions/itemActions';

const ItemForm = ({ editingItem, onCancelEdit }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: editingItem?.title || '',
        description: editingItem?.description || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert('Title is required');
            return;
        }

        if (editingItem) {
            dispatch(updateItem(editingItem.id, formData));
            onCancelEdit();
        } else {
            dispatch(createItem(formData));
        }

        setFormData({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>{editingItem ? 'Edit Item' : 'Create New Item'}</h2>

            <div style={styles.formGroup}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter item title"
                    required
                    style={styles.input}
                />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter item description"
                    rows="4"
                    style={styles.textarea}
                />
            </div>

            <div style={styles.buttonGroup}>
                <button type="submit" style={styles.submitBtn}>
                    {editingItem ? 'Update' : 'Create'}
                </button>
                {editingItem && (
                    <button
                        type="button"
                        onClick={onCancelEdit}
                        style={styles.cancelBtn}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

const styles = {
    form: {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        maxWidth: '600px',
        margin: '0 auto 30px',
    },
    formGroup: {
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '14px',
        marginTop: '5px',
        fontFamily: 'Arial, sans-serif',
    },
    textarea: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '14px',
        marginTop: '5px',
        fontFamily: 'Arial, sans-serif',
        resize: 'vertical',
    },
    buttonGroup: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    },
    submitBtn: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    cancelBtn: {
        padding: '10px 20px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default ItemForm;
