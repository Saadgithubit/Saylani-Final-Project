import { IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { EmailOutlined as EmailOutlinedIcon, LockOutlined as LockOutlinedIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentsignup, teachersignup } from '../../Config/mongodbmain';
import Swal from 'sweetalert2'


export default function Signup() {

    const navigate = useNavigate()
    const [fullName, setfullName] = useState()
    const [email, setemail] = useState()
    const [cnic, setcnic] = useState()
    const [contact, setcontact] = useState()
    const [password, setpassword] = useState()
    const [conPassword, setconPassword] = useState()
    const [showPassword, setshowPassword] = useState(false)
    const [showconPassword, setshowconPassword] = useState(false)
    const [clickBtn, setclickBtn] = useState(false)
    const api = 'https://links-ehps.onrender.com'

    const signUp = async () => {
        setclickBtn(true)
        if (!fullName || !email || !password || !conPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Fill All Fields!",
            });
            setclickBtn(false)

            return
        }
        if (password !== conPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Both Passwords Are Not Same!",
            });
            setclickBtn(false)
            return
        }
        if (password.length < 6 || conPassword.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Atleast 6 digits password!",
            });
            setclickBtn(false)
            return
        }

        console.log(window.location.pathname);
        if (window.location.pathname == '/signup') {
            const res = await studentsignup({ username: fullName, email, cnic, phone: contact, password })
            { res.msg === "student added successfully" ? navigate('/signin') : setclickBtn(false) }
        } else {
            await teachersignup({ username: fullName, email, cnic, phone: contact, password })
        }
    }
    return (
        <>
            <div className="w-screen p-4 flex items-center justify-center">
                <div className="border-2 w-[40%] h-auto m-4 bg-[#FBFBFB] shadow-lg rounded-lg px-8 py-4 space-y-4">
                    <div className='flex justify-center'>
                        <img width={100} src='https://student.saylaniwelfare.com/assets/logo-OpazD70S.png' />
                    </div>
                    <div>
                        <TextField
                            sx={{ width: '100%', marginTop: '20px', fontFamily: 'sans-serif' }}
                            placeholder='Enter Your Name'
                            onChange={(e) => setfullName(e.target.value)}
                            id="input-with-icon-textfield"
                            label="UserName"
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
                            sx={{ width: '100%', marginTop: '20px', fontFamily: 'sans-serif' }}
                            placeholder='Enter Your CNIC'
                            type='number'
                            onChange={(e) => setcnic(e.target.value)}
                            id="input-with-icon-textfield"
                            label="CNIC"
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
                            sx={{ width: '100%', marginTop: '20px', fontFamily: 'sans-serif' }}
                            placeholder='Enter Your CNIC'
                            type='number'
                            onChange={(e) => setcontact(e.target.value)}
                            id="input-with-icon-textfield"
                            label="Contact Number"
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
                            sx={{ width: '100%', marginTop: '20px', fontFamily: 'sans-serif' }}
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
                            id="input-with-icon-textfield"
                            onChange={(e) => setpassword(e.target.value)}
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
                        <TextField
                            sx={{ width: '100%', marginTop: '20px' }}
                            type={showconPassword ? 'text' : 'password'}
                            placeholder='Confirm Password'
                            onChange={(e) => setconPassword(e.target.value)}
                            id="input-with-icon-textfield"
                            label="Confirm Password"
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
                                            onClick={() => setshowconPassword(!showconPassword)}
                                        >
                                            {showconPassword ? <VisibilityOff /> : <Visibility />}

                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            variant="standard"
                        />
                        {!clickBtn ? <button onClick={signUp} className='bg-[#376ABE] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                            Sign Up
                        </button> :
                            <button className='bg-[#376ABE] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                                <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                            </button>}
                        <p className='mt-12 text-center'>
                            Already Have An Account? <span onClick={() => navigate('/signin')} className='font-semibold pb-1 text-blue-500 ml-2 cursor-pointer hover:border-b-4 hover:text-[#B74EEE]'>Sign In</span>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}