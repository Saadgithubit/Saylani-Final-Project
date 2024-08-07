import { IconButton, InputAdornment, TextField } from '@mui/material';
import { EmailOutlined as EmailOutlinedIcon, LockOutlined as LockOutlinedIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { studentLogin, teacherLogin } from '../../Config/mongodbmain.jsx'
import { setUser } from '../../Store/userSlice.jsx';

export default function Signin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [emailOrCnic, setemail] = useState()
    const [password, setpassword] = useState()
    const [clickBtn, setclickBtn] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const api = 'https://back-end-mocha-alpha.vercel.app'

    const signIn = async (e) => {
        e.preventDefault()
        setclickBtn(true)
        if (!emailOrCnic || !password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Email & Password!",
            });
            setclickBtn(false)
            return
        }
        if (window.location.pathname == '/signin') {

            const res = await studentLogin(emailOrCnic, password)
            console.log(res);
            if (res.msg === 'User login successfully') {
                dispatch(setUser(res.std))
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            } else {
                alert(res)
                setclickBtn(false)
            }

        } else {

            const res = await teacherLogin(emailOrCnic, password)
            console.log(res);
            if (res.msg === 'User login successfully') {
                dispatch(setUser(res.teacher))
                setTimeout(() => {
                    navigate('/teacher')
                }, 3000);
            } else {
                alert(res)
                setclickBtn(false)
            }
        }
    }
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className='w-full flex justify-center absolute top-[15%] font-bold'>
                    {window.location.pathname === '/signin' ? <span><p>StudentEmail: saad@gmail.com</p><p>password: 123456</p></span>
                        : <span><p>TeacherEmail: abdullah@gmail.com</p><p>password: 123456</p></span>}
                </div>
                <div className="border-2 w-full md:w-[80%] lg:w-[40%] bg-[#FBFBFB] shadow-lg rounded-lg px-8 py-4 space-y-3">
                    <div className='flex justify-center'>
                        <img width={100} src='https://student.saylaniwelfare.com/assets/logo-OpazD70S.png' />
                    </div>
                    <div className=''>
                        <form onSubmit={signIn}>
                            <TextField
                                required
                                sx={{ width: '100%', marginTop: '10px', fontFamily: 'sans-serif' }}
                                placeholder='Enter Your Email / Cnic'
                                onChange={(e) => setemail(e.target.value)}
                                id="input-with-icon-textfield"
                                label="Email / Cnic"
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
                                required
                                sx={{ width: '100%', marginTop: '20px', fontFamily: 'sans-serif' }}
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
                            {!clickBtn ? <button className='bg-[#376ABE] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                                Log In
                            </button> :
                                <button className='bg-[#376ABE] w-full p-3 mt-4 rounded-xl text-white font-bold'>
                                    <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                                </button>}
                        </form>
                        <p className='mt-12 text-center'>
                            Don't Have An Account? <span onClick={() => navigate(window.location.pathname == '/signin' ? '/signup' : '/teachersignup')} className='font-semibold pb-1 text-blue-500 ml-2 cursor-pointer hover:border-b-4 hover:text-[#B74EEE]'>Sign Up</span>
                        </p>
                    </div>
                </div>
                {/* {successMsg && <CustomAlert txt={successMsg} isErrMsg={false} />}
                {errMsg && <CustomAlert txt={errMsg} isErrMsg={true} />} */}
            </div >
        </>
    );
};