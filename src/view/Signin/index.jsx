import { IconButton, InputAdornment, TextField } from '@mui/material';
import { EmailOutlined as EmailOutlinedIcon, LockOutlined as LockOutlinedIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { logIn } from '../../Config/firebase';

export default function Signin() {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [clickBtn, setclickBtn] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const backgroundColor = 'linear-gradient(to bottom right, #5F99E2, #5C9FE1,#A050ED,#C53CF1,#915BEA)'
console.log(email,password);
    const signIn = async() => {
        setclickBtn(true)
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Email & Password!",
            });
            setclickBtn(false)
            return
        }
        try {
            await logIn({ email, password })
            navigate('/')
        }
        catch (e) {
            alert(e.message)
        }
    }
    return (
        <>
            <div style={{ background: backgroundColor }} className="w-screen h-screen flex items-center justify-center">
                <div className="border-2 w-[30%] bg-[#FFFFFF] rounded-lg px-8 py-4 space-y-3">
                    <h1 className="text-[#2D2E2D] font-bold text-3xl text-center">Login</h1>
                    <div className=''>
                        <TextField
                            sx={{ width: '100%', marginTop: '10px', fontFamily: 'sans-serif' }}
                            placeholder='Enter Your Email'
                            onChange={(e) => setemail(e.target.value)}
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
                            onChange={(e) => setpassword(e.target.value)}
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
                        <span className='flex font-sans justify-end mt-2 font-semibold text-[#26282B]'><p>Forget Password?</p></span>
                        {!clickBtn ? <button onClick={signIn} className='bg-gradient-to-r from-[#5CCBDC] via-[#7894E7] to-[#C83BF0] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                            Log In
                        </button> :
                            <button className='bg-gradient-to-r from-[#5CCBDC] via-[#7894E7] to-[#C83BF0] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                                <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                            </button>}
                        <p className='mt-12 text-center'>
                            Don't Have An Account? <span onClick={() => navigate('/signup')} className='font-semibold pb-1 text-blue-500 ml-2 cursor-pointer hover:border-b-4 hover:text-[#B74EEE]'>Sign Up</span>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}