import { IconButton, InputAdornment, TextField } from '@mui/material';
import { EmailOutlined as EmailOutlinedIcon, LockOutlined as LockOutlinedIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){

    const navigate = useNavigate()
    const [showPassword, setshowPassword] = useState(false)
    const backgroundColor = 'linear-gradient(to bottom right, #5F99E2, #5C9FE1,#A050ED,#C53CF1,#915BEA)'

    return(
        <>
<div style={{ background: backgroundColor }} className="w-screen h-screen flex items-center justify-center">
                <div className="border-2 w-[30%] bg-[#FFFFFF] rounded-lg px-8 py-4 space-y-3">
                    <h1 className="text-[#2D2E2D] font-bold text-3xl text-center">Sign Up</h1>
                    <div className=''>
                        <TextField
                            sx={{ width: '100%', marginTop: '10px', fontFamily: 'sans-serif' }}
                            placeholder='Enter Your Email'
                            id="input-with-icon-textfield"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '100%', marginTop: '20px' }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter Your Password'
                            id="input-with-icon-textfield"
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={() => setshowPassword(!showPassword)}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}

                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            variant="standard"
                        />
                        <button className='bg-gradient-to-r from-[#5CCBDC] via-[#7894E7] to-[#C83BF0] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                            Sign Up
                        </button>
                        <p className='mt-12 text-center'>
                            Already Have An Account? <span onClick={() => navigate('/signin')} className='font-semibold pb-1 text-blue-500 ml-2 cursor-pointer hover:border-b-4 hover:text-[#B74EEE]'>Sign In</span>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}