import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper
} from "@mui/material";

import axios from "axios";
import { List } from "../student/List";

export const Home = () => {

  const [student, setStudent] = useState({
    stuname: "",
    email: ""
  });

  // handle input
  const ontextFiled = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const onFormsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/students", student);

      alert("Student Added Successfully");

      // ✅ clear form properly
      setStudent({
        stuname: "",
        email: ""
      });

    } catch (error) {
      console.log("something is going wrong");
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

      {/* CENTER WRAPPER */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        
       <Grid
    container
    spacing={4}
    justifyContent="center"
    alignItems="flex-start"
    sx={{ maxWidth: "1200px" }}   // 👈 important
  >
          {/* Left - Form */}
          <Grid item md={6} xs={12}>
            <Paper elevation={3}>
              
              <Box sx={{ backgroundColor: "#43A047", p: 2 }}>
                <Typography variant="h6" color="white">
                  Add Student
                </Typography>
              </Box>

              {/* FORM */}
              <form onSubmit={onFormsubmit}>
                <Box p={2}>
                  
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
                    ADD
                  </Button>

                </Box>
              </form>

            </Paper>
          </Grid>

          {/* Right - List */}
          <Grid item md={6} xs={12}>
            <List />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};