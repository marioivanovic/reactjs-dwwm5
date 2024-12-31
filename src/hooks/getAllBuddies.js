import { useState, useEffect } from 'react';
import { api } from './../../src/api/config'

export function useFetchBuddies() {
    const [buddies, setBuddies] = useState([]);
    const [error, setError] = useState(null);

    const fetchBuddies = async () => {
        try {
            const response = await api.get('/buddies');
            setBuddies(response.data.data)
            console.log("ici, response.data : ", response.data.data)
        } catch (error) {
            setError('Erreur de récup API');
        }
    };

    useEffect(() => {
        fetchBuddies()
    }, []);

    return { buddies, error };
}