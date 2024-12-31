// import { useState, useEffect } from 'react';
// import { api } from './../../src/api/config'

// export function useFetchFakeProducts() {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     const fetchProducts = async () => {
//         try {
//             const response = await api.get('/breeds');
//             setProducts(response.data)
//         } catch (error) {
//             setError('Erreur de récup API');
//         }
//     };

//     useEffect(() => {
//         fetchProducts()
//     }, []);

//     return { products, error };
// }

