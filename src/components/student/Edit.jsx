import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    stuname: "",
    email: ""
  });

  // ✅ Load student data
  useEffect(() => {
    loadStudent();
  }, [id]);

  const loadStudent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/students/${id}`
      );
      setStudent(res.data);
    } catch (error) {
      console.log("Error loading student");
    }
  };

  // ✅ Handle input change
  const ontextFiled = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Submit form (UPDATE)
  const onFormsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/students/${id}`,
        student
      );

      alert("Student Updated Successfully");

      navigate("/"); // redirect to home/list page
    } catch (error) {
      console.log("Error updating student");
    }
  };

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#7E57C2",
          color: "white",
          py: 2,
          mb: 3
        }}
      >
        <Typography variant="h4">
          React CRUD with API Call
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        
        {/* Form Section */}
        <Grid item md={6} xs={12}>
          <Paper elevation={3}>
            
            {/* Title */}
            <Box sx={{ backgroundColor: "#43A047", p: 2 }}>
              <Typography variant="h6" color="white">
                Update Student
              </Typography>
            </Box>

            {/* Form */}
            <form onSubmit={onFormsubmit}>
              <Box p={2}>

                <TextField
                  fullWidth
                  label="ID"
                  margin="normal"
                  name="id"
                  value={student.id}
                  disabled
                />

                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  name="stuname"
                  value={student.stuname}
                  onChange={ontextFiled}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  value={student.email}
                  onChange={ontextFiled}
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  type="submit"
                >
                  UPDATE
                </Button>

              </Box>
            </form>

          </Paper>
        </Grid>

      </Grid>
    </>
  );
};

