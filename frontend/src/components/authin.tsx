import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { TypewriterEffect } from "./ui/typewriter-effect";
import {SigninInput} from "@yashas40/modules"

export const Authin = () => {
  const [userDetails, setuserDetails]=useState<SigninInput>({
      email:"",
      password:""
    })
    const navigate= useNavigate()
    return (
      <section className="bg-stone-800 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full px-6 py-8 mx-auto ">
          <div><TypewriterEffect words={[{text: `Welcome${" "}to${" "}ExTra`, className:"text-cyan-600 pb-2"}]}/></div>
        <div className=" flex justify-center w-full max-w-[600px] bg-cyan rounded-lg shadow bg-stone-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8]">
              <div  className="flex justify-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-cyan-600 md:text-3xl">
                Login
              </h1>
              </div>  
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-cyan-600">Email</label>
                  <input
                    placeholder="johndoe@gmail.com"
                    className="bg-stone-600 border border-gray-300 text-cyan-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5"
                    onChange={(e)=>{
                      setuserDetails(c=>({
                        ...c,
                        email: e.target.value
                      }))
                    }}/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-cyan-600">Password</label>
                  <input
                    placeholder="••••••••"
                    className="bg-stone-600 border border-gray-300 text-cyan-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5"
                    onChange={(e)=>{
                      setuserDetails(c=>({
                        ...c,
                        password: e.target.value
                      }))
                    }}/>
                </div>
                <div className="flex justify-center">
                <button
                  className=" w-[300px] text-black bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                  onClick={async(e)=>{
                    e.preventDefault()
                    try{
                            const response= await axios.post(`${BACKEND_URL}/api/v1/user/signin`,userDetails)
                            const jwt=response.data.token
                            if(jwt){
                              localStorage.setItem('token',jwt)
                              navigate('/dashboard')
                            }
                        }
                        catch(e){
                          alert("login failed")
                        }
                  }}>
                  Login
                </button>
                </div>
                <div className="flex justify-center"> 
                <p className="text-sm font-light text-cyan-600 hover">
                  Don't have an account? <Link to={"/Signup"} className="no-underline hover:underline">Signup</Link> 
                </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
    
  };
  