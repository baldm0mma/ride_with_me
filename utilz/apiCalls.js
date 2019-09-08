import { gql }from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'

export const fetchUsers = gql`
        {
            allUsers {
                id,
                username
            }
        }
    `;