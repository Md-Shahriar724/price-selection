import Nav from "./Nav";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navitems = () => {
   const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/home", label: "Home" },
        { id: 2, path: "/about", label: "About" },
        { id: 3, path: "/products", label: "Products" },
        { id: 4, path: "/contact", label: "Contact" },
        { id: 5, path: "/services", label: "Services" }
      ];
      
    return (
        <nav  className="bg-green-200 sticky top-0 ">
        <div className="md:hidden text-2xl py-4 px-3" onClick={()=>{setOpen(!open)}}>
            {
                open === true  ? <AiOutlineClose className="" /> : <AiOutlineMenu></AiOutlineMenu>
            }
        </div>
        <ul className={`md:flex justify-center items-center absolute md:static bg-green-200 px-6 py-4 ${open ? "top-12" : "-top-40"} duration-1000 rounded-lg `}>
            {
                routes.map((route) =><Nav key={route.id} route={route} ></Nav>)
            }
        </ul>
        </nav>
    );
};

Navitems.propTypes = {
    
};

export default Navitems;