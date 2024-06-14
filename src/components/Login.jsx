import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setdata]=useState({
        "email":"",
        "password":""
    })

    const inputHandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8081/login",data).then(
            (response)=>{
                if(response.data.status == "success"){
                    alert("Successfull Login")
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("email", response.token)
                }
                else{
                    alert("Failed to Login")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    let navigate= useNavigate("/Home")
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="bg-tertiary p-3">
                    <div class="card">
                    <div class="card-body">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-success" type="button">Login</button>
                        </div>
                        </div>
                        <Link class="link-underline-info text-center" to="/signup">Sign Up</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login