import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css';

// NavLink is used just like Link but NavLink helps us to show currently active link
// In NavLink className prop takes a fuction as input and return class name that should be applied
// isActive provided by react-router-dom

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/' className={({isActive}) => (isActive ? classes.active: undefined)} end>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/products' className={({isActive}) => (isActive ? classes.active: undefined)} end>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}