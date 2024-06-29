import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from '../components/MainNavigation'
export default function Root() {
    const navigate = useNavigation()
    return <div>
        <MainNavigation/>
        {navigate.state === 'loading' && <p>Loading....</p>}
        <Outlet />
    </div>
}