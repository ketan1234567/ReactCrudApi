import React from "react";
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

import { List } from '../student/List'



export const Home = () => {


  

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
        
        {/* Left - Add Student */}
        <Grid item md={6} xs={12}>
          <Paper elevation={3}>
            
            <Box sx={{ backgroundColor: "#43A047", p: 2 }}>
              <Typography variant="h6" color="white">
                Add Student
              </Typography>
            </Box>

            <Box p={2}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                ADD
              </Button>
            </Box>

          </Paper>
        </Grid>

        {/* Right - Student List */}
        <Grid item md={6} xs={12}>
          <List/>
          
        </Grid>

      </Grid>
    </>
  );
};