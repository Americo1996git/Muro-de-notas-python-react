import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const GET_MESSAGES = gql `
        {
            notas{
              edges{
                node{
                  id
                  titulo
                  descripcion,
                  persona{
                    id
                    nombre
                  }
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
         
              {
                data.notas.edges.map( nota =>(
                  <div className="col-md-4 p-2"  key={nota.node.id} >
                      <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <h5>{nota.node.titulo}</h5>
                            <Link className="btn btn-secondary" to="/" >Editar</Link>
                          </div>
                          <div className="card-body">
                            <p> {nota.node.descripcion} </p>
                            <span className="badge badge-pill badge-dark">{nota.node.persona.nombre}</span>
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-danger" >Eliminar</button>
                          </div>
                      </div>
                  </div>
                ))
              }
          
        </div>
    )
}

export default MessageLIste;