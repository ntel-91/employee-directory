import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import {
    Form,
    Input,
    Select,
    TextArea,
    Container
  } from 'semantic-ui-react'


const Employee = ({employee, departmentList, jobTitleList}) => {
    const { employeeId } = useParams();
    // const newEmployee = {first_name: '', last_name: '', photo: '', bio: '', department_id: '', job_title_id: '', location_id: ''}

    const [currentEmployee, setCurrentEmployee] = useState(employee);

    // handle all form values (except photo)
    const handleChange = (e, { name, value }) => {
        setCurrentEmployee({...currentEmployee, [name]: value })
    };

    // // submit updated employee data
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/api/v1/employees/${employeeId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
              "Cookie": "user_id=5"
            },
            body: JSON.stringify({currentEmployee})
          })
          .then(function(res){      
            if (res.status !== 200){
              alert("Not updated")
            }
            return res.json()
        })
        .then(function(data){
            debugger
            console.log(data)
          })
          .catch(function(error){
            alert(error)
          })
        
    }

    const renderEmployee = () => {
        return (
            <Container text style={{ marginTop: '4em', marginLeft: '4em' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='First name'
                            name='first_name'
                            placeholder='First name'
                            defaultValue={currentEmployee.first_name}
                            onChange={handleChange}
                        />
                        <Form.Field
                            control={Input}
                            label='Last name'
                            name='last_name'
                            placeholder='Last name'
                            defaultValue={currentEmployee.last_name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Select}
                            label='Job Title'
                            name='job_title_id'
                            options={jobTitleList}
                            placeholder='Job Title'
                            defaultValue={currentEmployee.job_title_id}
                            onChange={handleChange}
                        />
                        <Form.Field
                            control={Select}
                            label='Department'
                            name='department_id'
                            options={departmentList}
                            placeholder='Department'
                            defaultValue={currentEmployee.department_id}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='About'
                        placeholder='Tell us more about you...'
                    />
                    <Form.Button content='Update'/>
                    {/* <Form.Field control={Button}>Submit</Form.Field> */}
                </Form>
            </Container>
        )
    }

	return (
        <div>
            {renderEmployee()}
        </div>
        
    )
}

export default Employee;