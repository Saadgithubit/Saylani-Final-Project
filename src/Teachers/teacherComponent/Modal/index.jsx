import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField } from '@mui/material';

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
    const { handleOpen, handleClose, openModal } = props
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
                    <TextField sx={{ width: '100%' }} id="filled-basic" label="Title" variant="filled" />
                    <TextField
                        sx={{ width: '100%', mt: 4 }}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
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
                            />
                        </Button>
                    </Box>
                    <Button sx={{ mt: 2 }} variant="contained" color='secondary'>
                        Post
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
