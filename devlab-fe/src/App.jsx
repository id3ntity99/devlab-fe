import "./App.css";
import NavigationBar from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedKits from "./components/FeaturedKits";
import Action from "./components/Action";
import Footer from "./components/Footer";

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
