"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Upload(){

    const router=useRouter()

    let [fileDisplay,setFileDisplay] =useState<string>("")
    let [caption,setCaption] =useState<string>("")
    let [file,setFile] =useState<File | null>(null)
    let [error,setError] =useState
}