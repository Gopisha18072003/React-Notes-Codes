import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/userProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    function handleOpenCart() {
        userProgressCtx.showCart();
    }

    const totalCartItem = cartCtx.items.reduce((totalNumber, item) => {return totalNumber + item.quantity}, 0);
    return (
         <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="website Logo" />
                <h1>ReactFoods</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleOpenCart} >Cart({totalCartItem})</Button>
            </nav>
         </header>
    )
}