
import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"
import Link from "next/link"
import ClientOnly from "@/app/components/ClientOnly"
import MenuItemFollow from "./MenuItemFollow"



export default function SideNavMain(){
  
    const pathname=usePathname()

    return(
        <>
        <div
        id="SideNavMain"
        className={`fixed bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto ${pathname==="/" ? "lg:w-[310px]"  : "lg:w-[220px]"}`}
        >
            <div className="lg:full w-[55px] ml-2">
                </div>
            <Link href="/">
                <MenuItem
                iconString="For You"
                colorString={pathname=="/" ? "#F2C56" : ""}
                sizeString="25"
                />
                </Link>

                <MenuItem
                iconString="Following"
                colorString={pathname=="/" ? "#F2C56" : ""}
                sizeString="25"
                />
                 <MenuItem
                iconString="Live"
                colorString={pathname=="/" ? "#F2C56" : ""}
                sizeString="25"
                />
                <div className=" border-b lg:ml-2 mt-2" />
                <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                    Suggested Accounts
                </h3>
                <div  className="lg:hidden block pt-3" />
                <ClientOnly>
                    <div className="cursor-pointer">
                        <MenuItemFollow user={{id:"1" , name:"Test User" , image:"https://placehold.co/50"}} />
                    </div>
                </ClientOnly>

                <button
                className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px] "
                >
                    See All
                </button>
                {true ? (
                    <div>
                          <div className=" border-b lg:ml-2 mt-2" />
                <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                    Following Accounts
                </h3>
                <div  className="lg:hidden block pt-3" />
                <ClientOnly>
                    <div className="cursor-pointer">
                        <MenuItemFollow user={{id:"1" , name:"Test User" , image:"https://placehold.co/50"}} />
                    </div>
                </ClientOnly>

                <button
                className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px] "
                >
                    See More
                </button>
                    </div>
                ) : ""}
                <div className="lg:block hidden border-b lg:ml-2 mt-2" />
                
            <div className="lg:block hidden text-[11px] text-gray-500 ">
                        <p className="pt-4 px-2"> About Newsroom ZuZu Shop Contact Careers BytheDance</p>
                        <p className="pt-4 px-2"> ZuZu for Good Arvertise Developers Transparency ZuZu Rewards ZuZu Browse ZuZu Embeds</p>
                        <p className="pt-4 px-2"> Help Safety Terms Privacy Creator Portal Community GuideLines</p>
                        <p className="pt-4 px-2"> 2023 ZuZu</p>
                </div>
        </div>
    </>
    )

}