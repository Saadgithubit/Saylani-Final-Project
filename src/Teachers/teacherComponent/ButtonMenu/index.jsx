import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalForm from '../Modal';

export default function ButtonMenu() {
    const [openModal, setopenModal] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpen = (e) => {
        setopenModal(true)

    };
    const handleClose = (e) => {
        setopenModal(false)

    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white', background: '#007B83', py: 2, px: 6, borderRadius: '20px', ":hover": { background: '#007B83' } }}
            >
                Create <AddRoundedIcon />
            </Button>
            <Menu
                sx={{ '& .MuiPaper-root': { px: 4 } }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={(e) => handleOpen(e)}>Assignment</MenuItem>
                <MenuItem onClick={handleOpen}>Material</MenuItem>
                <ModalForm handleModal={handleOpen} handleClose={handleClose} openModal={openModal} />
            </Menu>
        </div >
    );
}
