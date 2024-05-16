import HomeComponent from "../components/home/HomeComponent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto relative">
      <Header />
      <HomeComponent />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Home;
