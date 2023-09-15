

import { useEffect } from "react"
import { PostUserCompTypes } from "../../types"




export default function PostUser({post}:PostUserCompTypes){

  useEffect(()=>{

    const video=document.getElementById(`video-${post?.id}` as HTMLVideoElement)
    const postMainElement = document.getElementById(`PostMain-${post?.id}`)

    if(postMainElement){
        let observer=new IntersectionObserver((entries)=>{
           entries[0].isIntersecting ? video?.play() : video?.pause() 
        },{threshold:[0.6]})
        observer.observe(postMainElement)
    }
},[])

 

    return(
        <>
        <div className="relative brightness-95 hover:brightness-[1.1] cursor-pointer">
       

        </div> 
        </>
    )
}