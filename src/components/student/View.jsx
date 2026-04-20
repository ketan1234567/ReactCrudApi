import React from 'react'
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios'

import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

import { useParams,useNavigate } from 'react-router-dom';




export const View = () => {
  const{id}=useParams()
  console.log(id);

  const [student,SetStudent]=useState([]);

const navigate= useNavigate ()

   useEffect(()=>{
      getStudent();
        },[id])
      
        async function getStudent() {
          try {
      
            const student=await axios.get(`http://localhost:3000/students/${id}`);
            //console.log(students.data);
            SetStudent(student.data)
            
          } catch (error) {
            console.log("something is going wrong");
            
            
          }
          
        }

     function handleClick(){
      history.push("/")
     }

  
  return (
   <>
    <Paper elevation={3}>

            <Box sx={{ backgroundColor: "#FFA000", p: 2 }}>
              <Typography variant="h6" color="white">
                Student List
              </Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#424242" }}>
                    <TableCell sx={{ color: "white" }}>No</TableCell>
                    <TableCell sx={{ color: "white" }}>Name</TableCell>
                    <TableCell sx={{ color: "white" }}>Email</TableCell>
         
                  </TableRow>
                </TableHead>

                <TableBody>
               

                            <TableRow >
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.stuname}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>

                      

                     
                    </TableCell>
                  </TableRow>


                   
                    
                                  </TableBody>

              </Table>
            </TableContainer>
          

       

          </Paper>
     <Box m={4} textAlign="center"> 
              <Button variant='contained' color="primary" onClick={()=>navigate('/')}>Back to Home</Button>

                </Box>
    
    </>
  )
}
