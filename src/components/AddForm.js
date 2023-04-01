import React, {useContext, useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {EmployeeContext} from "../context/EmployeeContext";

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "", phone: ""
    })

    const {name, email, address, phone} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }
    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    };


    return (
        <Form onSubmit={handleSubmit}>


            <Form.Group>
                <Form.Control type={"text"} placeholder={"Name * "} required name={"name"} value={name}
                              onChange={e => onInputChange(e)}>
                </Form.Control>
            </Form.Group>


            <Form.Group>
                <Form.Control type={"email"} placeholder={"Email * "} required name={"email"} value={email}
                              onChange={e => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control as={"textarea"} placeholder={"Address * "} rows={3} name={"address"} value={address}
                              onChange={e => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control type={"text"} placeholder={"phone * "} required name={"phone"} value={phone}
                              onChange={e => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Button variant={"success"} type={"submit"}>Add New Employee</Button>
        </Form>
    );
};

export default AddForm;