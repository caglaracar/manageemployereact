import React, {useContext, useEffect, useState} from "react";
import {EmployeeContext} from "../context/EmployeeContext";
import {Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({employee}) => {
    const {deleteEmployee, editEmployee} = useContext(EmployeeContext);
    const {id, name, email, address, phone} = employee;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [editEmployee])
    return (
        <>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                    <Tooltip id={`tooltip-top`}>
                        Edit
                    </Tooltip>

                }>
                    <button onClick={handleShow} className="btn text-warning btn-act " data-toggle="modal"><i
                        className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={
                    <Tooltip id={`tooltip-top`}>
                        Delete
                    </Tooltip>

                }>
                    <button onClick={() => deleteEmployee(id)} className="btn text-danger btn-act " data-toggle="modal"><i
                        className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>


            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm employee={employee} editEmployee={editEmployee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}
export default Employee;