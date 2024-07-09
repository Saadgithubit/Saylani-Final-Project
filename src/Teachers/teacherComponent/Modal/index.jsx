import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null); // to store the selected file

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handlePost = () => {
        // Prepare form data
        const formData = new FormData();
        formData.append('title', title);
        
        formData.append('description', description);
        formData.append('content', file);
        formData.append('courseId', "668a8cbdf583e7e93af546fb");
        formData.append('teacherId', "668a8a97314c28e9c88627d4");

        // Make POST request using Axios
        axios.post('http://localhost:3005/assignment/post-assignment', formData)
            .then(response => {
                console.log('Success:', response.data);
                // Close the modal or handle success as needed
                props.handleClose();
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error as needed
            });
    };

    const { handleOpen, handleClose, openModal } = props;

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='p-4 flex justify-end'>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <TextField
                        sx={{ width: '100%' }}
                        id="filled-basic"
                        label="Title"
                        variant="filled"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        sx={{ width: '100%', mt: 4 }}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Box>
                        <Button
                            sx={{ mt: 2, gap: 2 }}
                            variant="contained"
                            component="label"
                        >
                            Upload File <FileUploadIcon />
                            <input
                                type="file"
                                hidden
                                onChange={handleFileChange}
                            />
                        </Button>
                    </Box>
                    <Button
                        sx={{ mt: 2 }}
                        variant="contained"
                        color='secondary'
                        onClick={handlePost}
                    >
                        Post
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
