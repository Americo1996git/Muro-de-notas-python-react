import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_MESSAGES = gql `
        {
            
            allIngredients {
                edges {
                  node {
                    name
                    notes
                  }
                }
              }
              
        }
`;


const MessageLIste = () => {
    const { loading, error, data } = useQuery(GET_MESSAGES)
    if(loading) return <p>Loading</p>
    if(error) {
        return <p>Loading</p>
    }
console.log(data);
    return(
        <div>

        </div>
    )
}

export default MessageLIste;