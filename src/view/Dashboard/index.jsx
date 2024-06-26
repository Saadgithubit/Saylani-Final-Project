import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../Store/themeSlice'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useSelector(state => state.themeReducer.theme)
  const [count, setCount] = useState(0)
  const [toggleTheme , settoggleTheme] = useState(false)
  const [color , setcolor] = useState()

  const changeTheme = () => {
    settoggleTheme(!toggleTheme)
    dispatch(toggleTheme?setTheme('black'):setTheme('White'))
    {theme === 'black'? setcolor('Black'): setcolor('White')}

  }

    return(
        <>
        <div style={{backgroundColor: theme, color: color}}>
         <div>
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> 
      </div>
      <h1>Vite + React</h1>
      <h2 className='text-blue-600 text-2xl'>Check Content</h2>
      <div className="card">
        <button className='text-black' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className='text-black' onClick={changeTheme}>Change Theme</button>
        <button onClick={() => navigate('/signin')}>Go To Sign In</button>
        <button onClick={() => navigate('/signup')}>Go To Sign Up</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      </div>
        </>
    )
}