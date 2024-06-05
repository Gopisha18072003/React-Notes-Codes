import { Outlet } from "react-router-dom";
import MainNavigation from './MainNavigation'
export default function Root() {
    return <div>
        <MainNavigation/>
        <Outlet />
    </div>
}