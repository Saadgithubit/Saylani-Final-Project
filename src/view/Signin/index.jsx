import { IconButton, InputAdornment, TextField } from '@mui/material';
import { EmailOutlined as EmailOutlinedIcon, LockOutlined as LockOutlinedIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../Components/CustomAlert';
import { studentLogin } from '../../Config/mongodb.jsx';
import { setUser } from '../../Store/userSlice.jsx';

export default function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clickBtn, setclickBtn] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const [emailOrCnic, setEmailOrCnic] = useState();
    const [password, setPassword] = useState();
    const [errMsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();

    const signIn = async (e) => {
        e.preventDefault();
        setclickBtn(true);
        setErrMsg();

        if (!emailOrCnic || !password || password.length < 6) {
            setclickBtn(false);
            if (!emailOrCnic) {
                setErrMsg("Please fill email or cnic field");
                setTimeout(() => {
                    setErrMsg();
                }, 2000);
            } else {
                setErrMsg("Please fill password fields");
                setTimeout(() => {
                    setErrMsg();
                }, 2000);
            };
            if (password && password.length < 6) {
                setErrMsg("Please fill password minimim 8 character");
                setTimeout(() => {
                    setErrMsg();
                }, 2000);
            };
        } else {
            try {
                const res = await studentLogin(emailOrCnic, password);
                if (res?.msg) {
                    setSuccessMsg("Login successfully");

                    dispatch(setUser(res?.std));
                } else {
                    setErrMsg(res.err);
                    setclickBtn(false);
                };
            }
            catch (e) {
                console.log(e);
                setErrMsg(e.message);
                setclickBtn(false);
            };
        };
    };

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="border-2 w-[40%] bg-[#FBFBFB] shadow-lg rounded-lg px-8 py-4 space-y-3">
                    <div className='flex justify-center'>
                        <img width={100} src='https://student.saylaniwelfare.com/assets/logo-OpazD70S.png' />
                    </div>
                    <div className=''>
                        <form onSubmit={signIn}>
                            <TextField
                                required
                                sx={{ width: '100%', marginTop: '10px', fontFamily: 'sans-serif' }}
                                placeholder='Enter Your Email / Cnic'
                                onChange={(e) => setEmailOrCnic(e.target.value)}
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
                                sx={{ width: '100%', marginTop: '20px' }}
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter Your Password'
                                onChange={(e) => setPassword(e.target.value)}
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
                            Don't Have An Account? <span onClick={() => navigate('/signup')} className='font-semibold pb-1 text-blue-500 ml-2 cursor-pointer hover:border-b-4 hover:text-[#B74EEE]'>Sign Up</span>
                        </p>
                    </div>
                </div>
                {successMsg && <CustomAlert txt={successMsg} isErrMsg={false} />}
                {errMsg && <CustomAlert txt={errMsg} isErrMsg={true} />}
            </div >
        </>
    );
};