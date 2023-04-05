import React from 'react';
import {Button, Form } from 'react-bootstrap';
//import { Component, useState } from 'react';
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
const event_id = 1;

class PruebaApi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            date: "",
            url: "",
            min: "",
            max: "",
        };
        
        axios.get(`${API_URL}/api/events/${event_id}`).then((response) => {
            console.log(response.data);
            this.setState({ 
                name: response.data.event.name, 
                date: response.data.event.date, 
                url: response.data.event.url, 
                min: response.data.event.min, 
                max: response.data.event.max });
        }); 

        this.textNameHandler = this.textNameHandler.bind(this);
        this.textDateHandler = this.textDateHandler.bind(this);
        this.textURLHandler = this.textURLHandler.bind(this);
        this.textMaxHandler = this.textMaxHandler.bind(this);
        this.textMinHandler = this.textMinHandler.bind(this);

    }            
    
    textNameHandler(e){
        this.setState({name: e.target.value});
    }
    textDateHandler(e){
        this.setState({date: e.target.value});
    }
    textURLHandler(e){
        this.setState({url: e.target.value});
    }
    textMaxHandler(e){
        this.setState({max: e.target.value});
    }
    textMinHandler(e){
        this.setState({min: e.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
        axios({
            method: "PUT",
            url: `${API_URL}/api/events/${event_id}`,
            data: {
                              
                /* name: "DTD",
                date: "2023-05-04",
                url: "http:/zoom.com",
                max: 6,
                min: 4 */

                name: this.state.name,
                date: this.state.date,
                url: this.state.url,
                max: this.state.max,
                min: this.state.min
       
            },
        })
        .then((res) =>
            console.log(res.data)
            
        )

        console.log(this.state);
    };


render() {    

  return (
    <>
        <h2>Editar Evento</h2>
        <Form className='' onSubmit={this.handleSubmit.bind(this)}>

            <Form.Group className="mb-3">
                <Form.Label>nombre_cliente</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Nombre" name="name" id="name" value={this.state.name} onChange={this.textNameHandler} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Fecha" id="date" name="date" value={this.state.date} onChange={this.textDateHandler}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>URL</Form.Label>
                <Form.Control required type="text" placeholder="Entre la URL" id="url"  name="url" value={this.state.url} onChange={this.textURLHandler}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Maximo</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Máximo" id="max" name="max" value={this.state.max} onChange={this.textMaxHandler}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Minimo</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Mínimo" id="min" name="min" value={this.state.min} onChange={this.textMinHandler}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Actualizar
            </Button>
        </Form>
    </>
  )}


}

export default PruebaApi