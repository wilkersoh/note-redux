import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Product from "./components/Product";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className='App'>
      <Header />
      {showCart && <Cart />}
      <Auth />
      <Counter />
      <Product />
    </div>
  );
}

export default App;
