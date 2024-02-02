import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from 'shared/interfaces';

export const useGetUserData = (username: string) => {
    const { data: user, isLoading, isError } = useQuery<User>({
        queryKey: ['user', username],
        staleTime: 60000,
        queryFn: async () =>
            await axios.get(`https://api.github.com/users/${username}`)
                .then((response) => response.data)
    });
    return { user, isLoading, isError };
};