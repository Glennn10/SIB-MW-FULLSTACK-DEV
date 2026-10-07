import Header from "./components/Header";
import Home from "./components/Home";
import Book from "./components/Book";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Book />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
