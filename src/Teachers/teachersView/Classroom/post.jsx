import React, { useState } from "react";
import { Box, Button, Modal, FormControl, InputLabel, Input, styled, Collapse, List, ListItem, ListItemText, Card, CardContent, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function PostAssignment() {
  const [open, setOpen] = useState(false);
  const [showDateField, setShowDateField] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setShowDateField(false)

  };
  const assingmentClick = () => {
    setOpen(!open);
    setShowDateField(true)
  };

  return (
    <Box sx={{ mt: 2, ml: 2 }}>
      <Button variant="contained" sx={{ borderRadius: "100px" }} onClick={handleClick}>
        <AddIcon />
        Create
      </Button>
      <Button variant="contained" sx={{ borderRadius: "100px" }} onClick={assingmentClick}>
        <AddIcon />
        Assignment
      </Button>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ position: "absolute", top: { xs: "20%", sm: "30%" }, left: { sm: "40%", xs: "12%" } }}>
          <Card sx={{ maxWidth: { xs: 250, sm: 300 }, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h5">Post Assignment</Typography><br />
              <FormControl>
                <InputLabel htmlFor="email-input">Title</InputLabel>
                <Input
                  aria-describedby="email-helper-text"
                />
              </FormControl><br /><br />
              {/* <TextField type="file" variant="standard"/><br /><br /> */}
              <FormControl>
                <InputLabel sx={{ position: "relative", bottom: 40, mr: 30 }} htmlFor="email-input">Upload Image</InputLabel>
                <Input
                  sx={{ width: 220, ml: 4 }}
                  aria-describedby="email-helper-text"
                  type="file"
                />
              </FormControl>
              {showDateField && (
                <FormControl>
                  <InputLabel sx={{ position: "relative", bottom: 20, mr: 30 }} htmlFor="email-input">Due date</InputLabel>
                  <Input
                    sx={{ width: 220, ml: 4 }}
                    aria-describedby="email-helper-text"
                    type="date"
                  />
                </FormControl>
              )}
            </CardContent>
          </Card>

        </Box>
      </Modal>
    </Box>
  );
}

export default PostAssignment;
