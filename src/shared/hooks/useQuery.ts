import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * This function is a custom hook that fetches starship data from the SWAPI.
 *
 * @return {object} An object containing starships data, loading state, and error state
 */
export const useGetStarhips = () => {
    const { data: starships, isLoading, isError } = useQuery({
        queryKey: ['starships'],
        staleTime: 60000,
        queryFn: async () =>
            await axios.get('https://swapi.dev/api/starships/')
                .then((response) => response.data)
    });
    return { starships, isLoading, isError };
};

/**
 * Fetches a starship by its ID using SWAPI and returns the ship data along with loading and error status.
 *
 * @param {number} id - The ID of the starship to fetch
 * @return {object} An object containing the ship data, loading status, and error status
 */
export const useGetStarhipById = (id: number) => {
    const { data: ship, isLoading, isError } = useQuery({
        queryKey: ['starship'],
        staleTime: 60000,
        queryFn: async () =>
            await axios.get(`https://swapi.dev/api/starships/${id}`)
                .then((response) => response.data)
    });
    return { ship, isLoading, isError };
};