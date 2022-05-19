import logo from "./logo.svg";
import Nav from "./components/commons/nav";
import Header from "./components/commons/header/Header";
import Formulario from "./components/form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div class="container col-6">
        <Formulario />
      </div>
    </div>
  );
}

export default App;
