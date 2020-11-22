import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_MESSAGES = gql `
        {
            
          
            notas{
             edges {
               node {
                 id
                 titulo
                 descripcion
                 
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

    return(
        <div className="row" >
          <div className="col-md-4 p2">
              {
                data.notas.edges.map( nota =>(
                  <div key={nota.node.id} className="card">
                    <div className="card-body">
                      <h4> {nota.node.titulo} </h4>
                      <p> {nota.node.descripcion} </p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
    )
}

export default MessageLIste;