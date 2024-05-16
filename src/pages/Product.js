import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductComponent from "../components/product/ProductComponent";
import Navbar from "../components/navbar/Navbar";

const Product = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ProductComponent />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Product;
