
import './App.css';
import {Route,Switch} from "react-router-dom";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import About from './components/about/About';
function App() {
  return (
    <div >
      <Header />
      <Switch>
      
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/" component={Home} />
      </Switch>
    
    </div>
  );
}

export default App;
