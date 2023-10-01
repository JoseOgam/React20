import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
import ListTodos from "./components/ListTodos";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <ListTodos />
        <Footer />
      </div>
    </main>
  );
};

export default App;
