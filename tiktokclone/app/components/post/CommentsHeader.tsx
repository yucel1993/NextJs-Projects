"use client"

import { CommentsHeaderCompTypes } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { BsChatDots, BsTrash3 } from "react-icons/bs";
import { ImMusic } from "react-icons/im";
import ClientOnly from "../ClientOnly";
import { AiFillHeart } from "react-icons/ai";

export default function CommentsHeader({post,params}:CommentsHeaderCompTypes){

    const router = useRouter()
    const [hasClickedLike , setHasClickedLike ] = useState<boolean>(false)
    const [isDeleting , setIsDeleting ] = useState<boolean>(false)
    const [userLiked , setUserLiked ] = useState<boolean>(false)
    
    const deletePost=()=>{
        console.log("fefwfw")
    }

    const likeOrUnlike=()=>{
        console.log("ewff")
    }
    return(
        <>
        <div className="flex items-center justify-between px-8 ">
        <div className="flex items-center">
        <Link href={`/profile/${post?.user_id}`}>
            {post?.profile.image ? (
                <img className="rounded-full lg:mx-0 mx-auto" width={40} src={post?.profile.image} alt="img" />
            ) : (
                <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"/>
            )}
        </Link>

        <div className="ml-3 pt-0.5">
                <Link href={`/profile/${post?.user_id}`}
                className="relative z-10 text-[17px] font-semibold hover:underline"
                >
                    {post?.profile.name}
                 </Link>
                 <div
                 className="relative z-10 test-[13px] -mt-5 font-light" 
                 >
                         {post?.profile.name}
                         <span className="relative -top-[2px] text-[30px] pl-1 pr-0.5" >.</span>
                         <span className="font-medium">{post?.created_at}</span>
                 </div>
        </div>
        </div>

         {true ? <div>
            {isDeleting ? (
                <BiLoaderCircle className="animate-spin" size="25"  />
            ):(
                <button
                disabled={isDeleting} 
                onClick={()=>deletePost()}
                >
                    <BsTrash3 className="cursor-pointer" size={25} />
                </button>
            ) }
            </div>  :null}
        </div>

        <p className="px-8 text-sm">{post?.text}</p>
        <p className="flex item-center gap-2 px-8 mt-4 text-sm font-bold">

            <ImMusic size="17" />
            original sound - {post?.profile.name}
        </p>
        <div className="flex items-center px-8 mt-8">
            <ClientOnly>
                <div className="pb-4 text-center flex items-center">
                    <button
                    disabled={hasClickedLike}
                    onClick={()=>likeOrUnlike()}
                    className="rounded-full bg-gray-200 p-2 cursor-pointer "
                    >
                        {!hasClickedLike ? (
                            <AiFillHeart size="25"  />
                        ) : (
                            <BiLoaderCircle className={"animate-spin"}  size="25" />
                        )}
                    </button>
                    <span className="text-xs pl-2 pr-4 text-gray-800 font-semibold">
                        123
                    </span>
                </div>
            </ClientOnly>
            <div className="pb-4 text-center flex items-center">
                            <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                            <BsChatDots size="25" />
                            </div>
                            <span
                            className="text-xs pl-2 text-gray-800 font-semibold"
                            >
                                3
                            </span>
            </div>
        </div>
        </>
    )
}