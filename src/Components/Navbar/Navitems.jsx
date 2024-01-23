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
        <>
        <div className="md:hidden text-2xl" onClick={()=>{setOpen(!open)}}>
            {
                open === true  ? <AiOutlineClose className="" /> : <AiOutlineMenu></AiOutlineMenu>
            }
        </div>
        <nav className="md:flex justify-center items-center">
            {
                routes.map((route) =><Nav key={route.id} route={route} ></Nav>)
            }
        </nav>
        </>
    );
};

Navitems.propTypes = {
    
};

export default Navitems;