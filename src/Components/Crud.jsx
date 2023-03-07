import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Label, Input} from 'reactstrap'
import React, { useState } from 'react';
import axios from 'axios';

const data = [
    {id: 1, marca: "Ford", color: "azul", kilometros: 52000},
    {id: 2, marca: "Fiat", color: "rojo", kilometros: 80000},
    {id: 3, marca: "Renault", color: "gris", kilometros: 64000},
    {id: 4, marca: "Logan", color: "blanco", kilometros: 100000},
    {id: 5, marca: "Chevrolet", color: "bordo", kilometros: 115000}
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
        modalInsertar: false,
        modalEditar: false,
    };

    // actualiza el estado del formulario con el valor ingresado por el usuario en cierto campo
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    //Insertar
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

    //Editar
    mostrarModalEditar = (registro) =>{ //es el dato que se va a editar
        this.setState({modalEditar:true, form: registro});
    }

    ocultarModalEditar = () =>{
        this.setState({modalEditar:false})
    }

    editar = (dato) =>{
        let contador = 0;
        let lista = this.state.data;
        lista.map((registro) => {
            if(dato.id == registro.id){
                lista[contador].marca = dato.marca;
                lista[contador].color = dato.color;
                lista[contador].kilometros = dato.kilometros;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false})
        
    }

    eliminar = (dato) => {
        let opcion = window.confirm("Realmente desea eliminar el registro: " + dato.id);
        if(opcion){
            let contador = 0;
            let lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id == dato.id){
                    lista.splice(contador, 1)
                }
                contador++
            })
            this.setState({data: lista})
        }

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
                                    <Button color='primary' onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
                                    {"  "}
                                    <Button color='danger' onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
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

            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Registro</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label htmlFor="">Id: </Label>
                        <Input type="text" className='from-control' name='id' readOnly value={this.state.form.id} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Marca</Label>
                        <Input type="email" name="marca" onChange={this.handleChange} value={this.state.form.marca} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="">Color:</Label>
                        <Input type="text" className='from-control' name='color' onChange={this.handleChange} value={this.state.form.color} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="">Kilometros:</Label>
                        <Input type="number" className='from-control' name='kilometros' onChange={this.handleChange} value={this.state.form.kilometros} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color='primary'onClick={()=>this.editar(this.state.form)} >Guardar</Button>
                    <Button color='danger' onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Crud; 