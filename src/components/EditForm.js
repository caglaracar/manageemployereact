import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const EditForm = ({employee,editEmployee}) => {


    const [editEmployees, setEditEmployees] = useState(employee)
    const {name, email, address, phone} = editEmployees;


    const handleSubmit = (e) => {
        e.preventDefault();
        editEmployee(employee.id,editEmployees)
    }
    const onInputChange = (e) => {
        setEditEmployees({...editEmployees, [e.target.name]: e.target.value})
    };
    return (
        <div>
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

                <Button variant={"success"} type={"submit"}>Edit Employee</Button>
            </Form>
        </div>
    );
};

export default EditForm;