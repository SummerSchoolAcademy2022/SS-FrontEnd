import Home from "../Home/index";
import "./style.css";
import Navbar from "../../components/NavigationBar/NavigationBar";
import '../../components/NavigationBar/BurgerMenu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* Routing for all pages */}
        <Home />
        {/* Footer */}
      </header>
    </div>
  );
}

export default App;