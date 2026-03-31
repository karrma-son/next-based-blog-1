// import { useState } from "react";
import Link from "next/link";
import { House } from "lucide-react";
import { robotoMono } from "../app/ui/fonts";

const Navbar = () => {


return (
    <nav className = " bg-linear-to-br from-sky-800/60 to-slate-300/40 w-full h-16 z-40 text-3xl font-extrabold content-center text-center  ">
        <div>
            <ul>
                <li>
                    <Link
                
                    href = "/"
                    className={ `${robotoMono} hover:text-fuchsia-400 flex items-center gap-2`}>
                    <House size={22} className={ `${robotoMono}`}/> HOME    
                    </Link>
                </li>
                <li>

                </li>

            </ul>
        </div>



    </nav>
    
)
};

export default Navbar;