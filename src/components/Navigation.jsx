import { NavLink } from "react-router-dom";

function getNavLinkClass({ isActive }) {
    return isActive
        ? "py-2 px-4 rounded-md bg-[#0FFCBE] text-slate-900 font-medium"
        : "py-2 px-4 rounded-md bg-slate-700 text-slate-200 font-medium hover:bg-slate-600 transition-colors";
}

export function Navigation() {
    return (
        <nav className="flex justify-center gap-4 bg-slate-800 p-4 rounded-lg">
            <NavLink to="/" className={getNavLinkClass}>
                Todas
            </NavLink>
            <NavLink to="/pending" className={getNavLinkClass}>
                Pendentes
            </NavLink>
            <NavLink to="/completed" className={getNavLinkClass}>
                Completadas
            </NavLink>
        </nav>
    );
}