import React, {Component, useState} from 'react';
import {gql} from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

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

const CREATE_NOTE = gql`
    mutation notaCreate2($titulo: String!, $descripcion: String!, $persona: Int!) {
        notaCreate2(input:{
            titulo: $titulo,
            descripcion: $descripcion,
            persona: $persona
        }) {
                nota{
                    id
                }
            }
            
    }
`;


const MessageList = () => {
    const [descripcion, setDescripcion] = useState('')
    const [titulo, setTitulo] = useState('')
    const [persona, setPersona] = useState('')
    const [createNote] = useMutation(CREATE_NOTE)

    const { loading, error, data } = useQuery(GET_PERSONAS)

    if(loading) return <p>Loading</p>
    if(error) {
        return <p>Loading</p>
    }

    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Crear Nota</h4>
                {/* SELECT USER*/}
                <div className="form-group">
                    <select className="form-control" name="persona" onChange={e => setPersona(e.target.value)} value={persona} >
                        {
                             data.personas.edges.map(user => 
                             <option key={user.node.id} value={user.node.id}>
                                {user.node.nombre}
                             </option>)          
                        }
                    </select>
                </div>

                <div className = "form-group">
                    <input type="text" className="form-control" placeholder="Titulo" name="titulo" required onChange={e => setTitulo(e.target.value)} value={titulo} />                    
                </div>
                <div className = "form-group">
                    <textarea name="descripcion" className="form-control" placeholder="Descripción" required onChange={e => setDescripcion(e.target.value)} value={descripcion} >
        
                    </textarea>        
                </div>

                 <form onSubmit={  e => {
                     e.preventDefault();
                     createNote({variables: {titulo, descripcion, persona}})
     
                 } }>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>                

              
            </div>
        </div>
    )
}



export default MessageList;

