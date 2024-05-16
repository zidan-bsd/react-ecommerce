import CartComponent from "../components/cart/CartComponent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Cart = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <CartComponent />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Cart;
