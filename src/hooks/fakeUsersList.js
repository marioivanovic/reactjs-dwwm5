import { useState, useEffect } from 'react';
import { api } from './../../src/api/config'

export function useFetchAgents() {
    const [agents, setAgents] = useState([]);
    const [error, setError] = useState(null);

    const fetchAgents = async () => {
        try {
            const response = await api.get('/agents');
            setAgents(response.data.data)
            console.log("ici, response.data : ", response.data.data)
        } catch (error) {
            setError('Erreur de récup API');
        }
    };

    useEffect(() => {
        fetchAgents()
    }, []);

    return { agents, error };
}