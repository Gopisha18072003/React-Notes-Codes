import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/userProgressContext";
import Checkout from "./components/Checkout";
import Cart from './components/Cart';
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
