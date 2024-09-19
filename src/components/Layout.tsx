import { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";




export default function Layout(props: {children: ReactNode}) {
    return(
            <div className=" flex bg-[#F0F8F5] w-[100vw] h-[100vh] overflow-hidden">
                <div className="w-[240px] h-full layout-shape px-[16px] py-[24px] border-r-[1.5px] borer-r-[#D9DADC]">
                    <SideBar/>
                </div>
                <section className="">
                    <div className="h-[64px] w-[calc(100vw-240px)] layout-shape py-[20px] px-[24px] border-b-[1.5px] borer--b[#D9DADC]">
                        <NavBar/>
                    </div>
                    <div className="h-[calc(100vh-64px)] px-[18px] overflow-y-auto py-[24px] w-[calc(100vw-240px)] layout-shape">
                            {props.children}
                    </div>
                </section>

            </div>
    )
}
