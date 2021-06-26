import About from "./About/About";
import "./App.css";
import Education from "./Education/Education";
import NavBar from "./header/NavBar";
import Main from "./Main/Main";
import Proj from "./Prodjects/prodjects";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <hr/> */}
      <Main/>
      <About/>
      <Proj/>
      <Education/>
      <Contacts/>
    </div>
  );
}

export default App;
