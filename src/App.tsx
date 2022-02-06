import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProductList from "./features/product/components/ProductList";
import ProductDetail from "./features/product/components/ProductDetail";
import Cart from "./features/cart/components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Checkout from "./features/checkout/components/Checkout";

function App() {
  return (
    <ChakraProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
