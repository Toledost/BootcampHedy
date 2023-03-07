import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Label, Input} from 'reactstrap'
import React, { useState } from 'react';
import axios from 'axios';

const data = [
    {id: 1, marca: "Ford", color: "azul", kilometros: 52000},
    {id: 2, marca: "Fiat", color: "rojo", kilometros: 80000},
    {id: 3, marca: "Renault", color: "gris", kilometros: 100000}
  ]

class Crud extends React.Component{
    state={
        data: data,
        form:{
            id:"",
            marca: "",
            color: "",
            kilometros: "",
        },
        modalInsertar: false
    };

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar = () =>{
        this.setState({modalInsertar:true});
    }

    ocultarModalInsertar = () =>{
        this.setState({modalInsertar:false})
    }

    insertar = () => {
        let valorNuevo = {...this.state.form};
        valorNuevo.id = this.state.data.length+1;
        let lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({data: lista, modalInsertar: false})
    }

    render(){
        return(
            <>
            <Container>
                <br />
                <Button color='success' onClick={()=>this.mostrarModalInsertar()}>
                    Insertar nuevo auto
                </Button>
                <br />

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Color</th>
                            <th>Kilometros</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento) =>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.marca}</td>
                                <td>{elemento.color}</td>
                                <td>{elemento.kilometros}</td> 
                                <td>
                                    <Button color='primary'>Editar</Button>
                                    {"  "}
                                    <Button color='danger'>Eliminar</Button>
                                </td>                          
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>


            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Insertar Nuevo Registro</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label htmlFor="">Id: </Label>
                        <Input type="text" className='from-control' name='id' readOnly value={this.state.data.length+1} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Marca</Label>
                        <Input type="email" name="marca" onChange={this.handleChange}  />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="">Color:</Label>
                        <Input type="text" className='from-control' name='color' onChange={this.handleChange}  />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="">Kilometros:</Label>
                        <Input type="number" className='from-control' name='kilometros' onChange={this.handleChange}  />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color='primary' onClick={()=>this.insertar()}>Insertar</Button>
                    <Button color='danger' onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Crud; 