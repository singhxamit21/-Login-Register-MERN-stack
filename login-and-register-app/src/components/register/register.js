import axios from 'axios'
import React,{useState} from 'react'
import "./register.css"
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
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

    const register = () => {
        const {name,email,password,reEnterPassword} = user;
        if(name && email && password && (password === reEnterPassword)){
            // alert("Posted")
            axios.post("http://localhost:9002/register",user)
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
    }
    return(
        <div className="register">
            {console.log("User",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="your Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="your Passwoed" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Passwoed" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>Login</div>
    </div>
    )
}

export default Register;