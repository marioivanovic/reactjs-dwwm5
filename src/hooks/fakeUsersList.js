import { useState, useEffect } from 'react';
import { api } from './../../src/api/config'

export function useFetchFakeUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data)
        } catch (error) {
            setError('Erreur de récup API');
        }
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    return { users, error };
}