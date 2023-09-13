import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {BiSearch, BiUser} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import {BsThreeDotsVertical } from "react-icons/bs"

export default function TopNav(){
    const router = useRouter()
    const pathname=usePathname()

    const handleSearchName=(e:{target:{value:string}})=>{
console.log(e.target.value)
    }
    const goTo=()=>{
        console.log("here")
    }
    return(
        <>
        <div id="TopNav" className="fixed bg-white z-30 flex items-center  w-full border-b h-[60px]">
            <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname=="/" ? "max-w-[1150px]" :  "" }`}>
            
                <Link href={"/"}>
                    <img className="min-w-[115px] w-[115px]" src={"/images/tiktok-logo.png"} alt="" />
                </Link>
                <div className="relative hidden md:flex items-center justify-end bg-[#F1F1F2] p-1 rounded-full max-w-[430px] w-full">
                    <input type="text"
                    onChange={handleSearchName}
                    className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                    placeholder="Search accounts"
                    />
                    <div className="absolute bg-white max-w-[910px]  h-auto w-full z-20 left-0 top-12 p-1">
                        <div className="p-1 border">
                         <Link 
                         href={`/profile/1`}
                         className="flex items-center jsutify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white "
                         >
                              <div className="flex items-center">
                                <img 
                                src="https://placehold.co/40" 
                                width={40}  
                                alt="" 
                                className="rounded-md"
                                />
                                <div className="truncate ml-2"> Burhan Yucel Dev</div>
                              </div>  
                         </Link>
                        </div>
                    </div>

                    <div className="px-3 py-1 flex items-center border-l border-l-gray-300">

                        <BiSearch color="#A1A1A7" size="22" />
                    </div>
             </div>
                    <div className="flex items-center gap-3">
                        <button
                        onClick={()=>goTo()}
                        className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5"
                        >
                                <AiOutlinePlus color="#000000" size="22" />
                                <span className="px-2 font-medium text-[15px]">Upload</span>
                        </button>
                    </div>
            
                {true ? (
                    <div className="flex items-center">
                    <button
                    className="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"
                    >
                        <span className="whitespace-nowrap mx-4  font-medium text-[15px] ">
                            Log In

                        </span>
                    </button>
                    <BsThreeDotsVertical color='#161724' size="25" />
                </div>
                ):
                    (
                        <div className="flex items-center">
                                <div className="relative">
                                    <button
                                    className="mt-1 border border-gray-200 rounded-full"
                                    >
                                        <img 
                                        src="https://placehold.co/40" 
                                        alt="" 
                                        className="rounded-full w-[35px] h-[35px]"
                                        />
                                    </button>
                                    <div
                                    className="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[40px] right-0" 
                                    >
                                        <button
                                        className="flex items-center w-full  py-3 px-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <BiUser size="20" /> 
                                            <span className="pl-2 font-semibold text-sm">Profile</span>
                                        </button>
                                        <button
                                        className="flex items-center w-full  py-3 px-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <FiLogOut size="20" /> 
                                            <span className="pl-2 font-semibold text-sm">Log Out</span>
                                        </button>
                                         
                                    </div>
                                </div>
                        </div>
                    )
                }

            </div>
        </div>
        </>
    )

}