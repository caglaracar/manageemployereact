import React, {useContext, useEffect, useState} from 'react';
import Employee from './Employee';
import {EmployeeContext} from "../context/EmployeeContext";
import {Button, Modal,Alert} from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";
import '../index.css'
const EmployeeList = () => {


    const {employees} = useContext(EmployeeContext)

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage,setEmployeesPerPage] = useState(2)
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(employees.length /employeesPerPage)

    const totalEmployee=employees.length;

    const totalCurrentEmployees=currentEmployees.length;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // employees bir eleman eklendiğinde kendini otomatik kapatacak form
    useEffect(() => {
        handleClose();
        return ()=>{
            handleShowAlert();
        }
    }, [employees])

    const handleShowAlert= ()=>{
        setShowAlert(true);
        setTimeout( ()=>{

            setShowAlert(false)
        },3000 )
    }
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>
                <Alert show={showAlert}  variant={"success"}>
                    Employee List successfully updated!
                </Alert>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    <th className={"th-button"}  onClick={ ()=>{setEmployeesPerPage(prev=>prev+1)}}> + </th>
                </tr>
                </thead>
                <tbody>
                {
                    // sort :  a dan z ye sıralama yapıyor

                    currentEmployees.sort( (a,b)=>a.name.localeCompare(b.name)).map( (employee)=>(
                        <tr key={employee.id}>
                            <Employee employee={employee}/>
                        </tr>
                    ))
                }

                </tbody>
            </table>
            <Pagination currentEmployee={totalCurrentEmployees} totalEmployee={totalEmployee} pages = {totalPagesNum} setCurrentPage={setCurrentPage} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default EmployeeList;