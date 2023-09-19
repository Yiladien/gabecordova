// import "./App.css";

// pages imports
import Home from "./pages/Home";

// component imports
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-dark min-vh-100">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
