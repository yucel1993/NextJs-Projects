
"use client"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Login from "./auth/Login"
import Register from "./auth/Register"

export default function AuthOverlay(){
    const [isRegister , setIsRegister ] = useState<boolean>(false)
    
    return(
        <>
       <div
       id="AuthOverlay"
       className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"   
       >

        <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">
        <div className="w-full flex justify-end">
        <button
        className="p-1.5 rounded-full bg-gray-100">
        <AiOutlineClose size="26" />
        </button>
        </div>
        {isRegister ? <Register /> : <Login />}
        </div>
       </div>
        </>
    )
}