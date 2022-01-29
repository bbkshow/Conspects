import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    exact
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    to="/shows"
                >
                    Shows
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    to="/about"
                >
                    About
                </NavLink>
            </li>
        </ul>
    );
}

// export default function Navigation() {
//     return (
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/shows">Shows</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//         </ul>
//     );
// }
