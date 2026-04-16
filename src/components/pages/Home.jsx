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
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Sonam</TableCell>
                    <TableCell>sonam@example.com</TableCell>
                    <TableCell>

                      <IconButton>
                        <VisibilityIcon color="primary" />
                      </IconButton>

                      <IconButton>
                        <EditIcon color="secondary" />
                      </IconButton>

                      <IconButton>
                        <DeleteIcon color="error" />
                      </IconButton>

                    </TableCell>
                  </TableRow>
                </TableBody>

              </Table>
            </TableContainer>

          </Paper>
        </Grid>

      </Grid>
    </>
  );
};