import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductListComponent from "../components/productList/ProductListComponent";
import Navbar from "../components/navbar/Navbar";

const ProductList = () => {
  return (
    <div className="container mx-auto">
      <div className="max-lg:hidden">
        <Header />
      </div>
      <ProductListComponent />
      <Footer />
      <Navbar />
    </div>
  );
};

export default ProductList;
