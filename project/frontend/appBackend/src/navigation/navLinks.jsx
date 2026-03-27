import { NavLink } from "react-router-dom";
import Logo from "./logo";

function NavLinks() {
    return (
        <nav className="p-5 border-b-4 border-gray-500">
            <ul className="flex gap-10 justify-end text-lg">
                <li className="mr-auto"><Logo /></li>
                <li><NavLink to='/' className={({isActive}) =>`items-center px-4 py-2  rounded-lg ${isActive ? 'is_active' : ''}`}>Scan</NavLink></li>
                <li><NavLink to='/dashboard/:id' className = {({isActive}) =>`items-center px-4 py-2  rounded-lg ${isActive ? 'is_active' : ''}`}>Dashboard</NavLink></li>
                <li><NavLink to='/scanHistory' className={({isActive}) =>`items-center px-4 py-2  rounded-lg ${isActive ? 'is_active' : ''}`}>History</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavLinks