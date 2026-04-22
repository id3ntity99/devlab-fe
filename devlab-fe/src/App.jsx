import "./App.css";
import NavigationBar from "./components/landing/Navigation";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import FeaturedKits from "./components/landing/FeaturedKits";
import Action from "./components/landing/Action";
import Footer from "./components/landing/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <FeaturedKits />
      <Action />
      <Footer />
    </>
  );
}

export default App;
