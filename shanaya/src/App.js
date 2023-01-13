import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
