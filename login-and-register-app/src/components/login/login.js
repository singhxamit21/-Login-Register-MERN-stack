import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'

const Login = ({setLoginUser}) => {
    const history = useHistory()

    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        // console.log(e.target)
        const {name,value} = e.target
        // console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Passwoed"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>

    )
}

export default Login;