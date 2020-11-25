import React, {Component, useState} from 'react';
import {gql} from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

const GET_PERSONAS = gql `
        {
            personas{
              edges{
                node{
                  id
                  nombre
                }
              }
            }              
        }
`;


const ListaUsuarios = () => {

    const { loading, error, data } = useQuery(GET_PERSONAS)
    if(loading) return <p>Loading</p>
    if(error) {
        return <p>Loading</p>
    }

    return (
        <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Usuario</h3>
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>

                    </div>
                </div>
                <div className="col-md-8">
                <h3>Usuarios</h3>
                    <ul className="list-group">
                        {
                               data.personas.edges.map(user => 
                                (<li className="list-group-item list-group-item-action" key={user.node.id} >
                                   {user.node.nombre} 
                                </li>)
                                )
                        }
                    </ul>
                </div>
        </div>
    )
}



export default ListaUsuarios;



