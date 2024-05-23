import { createContext, useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from './UI/Button';
import UserProgressContext from "../store/userProgressContext";


export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleOpenCheckout() {
        userProgressCtx.showCheckout();
    }

    const cartTotal = cartCtx.items.reduce((totalPrice, item)=> totalPrice + item.quantity * item.price ,0);

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? userProgressCtx.hideCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {
                cartCtx.items.map((item) => (
                    <li key={item.id} className="cart-item">
                        <p>
                            {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
                        </p>
                        <p>
                            <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
                            <span>QTY</span>
                            <button onClick={() => cartCtx.addItem(item)}>+</button>
                        </p>
                    </li>
                    )
                )
            }
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleOpenCheckout}>Go to checkout</Button>}
        </p>

    </Modal>
}
