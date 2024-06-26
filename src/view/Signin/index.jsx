import { useSelector } from "react-redux"

export default function Signin(){
    const theme = useSelector(state => state.themeReducer.theme)
    return(
        <>
        <div style={{backgroundColor: theme}}>
            Sign In
        </div>
        </>
    )
}