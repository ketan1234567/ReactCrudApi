import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
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
import axios from "axios";
import { Link } from "react-router-dom";

export const List = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllstudent();
  }, []);

  const getAllstudent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      setStudents(res.data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    setStudents(students.filter((item) => item.id !== id));
  };

  return (
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
            {students.map((student, i) => (
              <TableRow key={student.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{student.stuname}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
                  <IconButton>
                    <Link to={`/view/${student.id}`}>
                      <VisibilityIcon color="primary" />
                    </Link>
                  </IconButton>

                  <IconButton>
                    <Link to={`/edit/${student.id}`}>
                      <EditIcon color="secondary" />
                    </Link>
                  </IconButton>

                  <IconButton onClick={() => handleDelete(student.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
};