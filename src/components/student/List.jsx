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


export const List = () => {
      const [student,SetStudents] =useState([]);

      useEffect(()=>{
      getAllstudent();
        })
      
        async function getAllstudent() {
          try {
      
            const students=await axios.get("http://localhost:3000/students");
            //console.log(students.data);
            SetStudents(students.data)
            
          } catch (error) {
            console.log("something is going wrong");
            
            
          }
          
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
                    <TableCell sx={{ color: "white" }}>Action</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {student.map((student,i)=>{
                        return(

                            <TableRow key={i}>
                    <TableCell>{i}</TableCell>
                    <TableCell>{student.stuname}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>

                      <IconButton>
                        <VisibilityIcon color="primary" />
                        <Link/>
                        
                      </IconButton>

                      <IconButton>
                        <EditIcon color="secondary" />
                      </IconButton>

                      <IconButton>
                        <DeleteIcon color="error" />
                      </IconButton>

                    </TableCell>
                  </TableRow>


                        )

                    } )}
                    
                                  </TableBody>

              </Table>
            </TableContainer>

          </Paper>

    
    </>
  )
}
