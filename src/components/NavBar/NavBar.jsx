
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";


const NavBar = () => {
    return(
        <nav className="nav">
            <Link>
            <h3>GamerShop</h3>
            </Link>    
            <div className="flex">
                <NavLink to={`/category/teclado`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Teclado </NavLink>
                <NavLink to={`/category/mouse`}   className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Mouse</NavLink>
                <NavLink to={`/category/monitor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>  Monitor    </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar; 