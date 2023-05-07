import React from 'react'
import { FormGroup,FormControl, InputLabel, Input,styled} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
const defaultvalue={
name:"",
id:"",
TeamNumber:"",
subj:"",
pname:"",
startdate:"",
status:""
}
const Container =styled(FormGroup)`
width:50%;
margin:5% auto ;
`
function AddUser() {
    const [user,SetUser]=useState(defaultvalue);
    const onValueChange=(e)=>{
        SetUser({ ...user,[e.target.name]:e.target.value});
        // console.log(user);
    }
    const addUserDetails=()=>{
        
    }
  return (
    <div>
        <Container>
        <h1>ADD USER</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="id"/>
            </FormControl>
            <FormControl>
                <InputLabel>Team Number</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="TeamNumber"/>
            </FormControl>
            <FormControl>
                <InputLabel>MSWD/PFSD</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="subj"/>
            </FormControl>
            <FormControl>
                <InputLabel>Project Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="pname"/>
            </FormControl>
            <FormControl>
                <InputLabel>StartDate</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="startdate"/>
            </FormControl>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="status"/>
            </FormControl>
            <FormControl>
                <Button varient="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    </div>
  )
}

export default AddUser