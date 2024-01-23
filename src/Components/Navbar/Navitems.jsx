import Nav from "./Nav";


const Navitems = () => {
    const routes = [
        { id: 1, path: "/home", label: "Home" },
        { id: 2, path: "/about", label: "About" },
        { id: 3, path: "/products", label: "Products" },
        { id: 4, path: "/contact", label: "Contact" },
        { id: 5, path: "/services", label: "Services" }
      ];
      
    return (
        <nav>
            {
                routes.map((route) =><Nav key={route.id} route={route} ></Nav>)
            }
        </nav>
    );
};

Navitems.propTypes = {
    
};

export default Navitems;