import Header from "./components/Header/Header"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"


import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>          
          <Route path="/portfolio">
            <Portfolio/>
          </Route>         
          <Route path="/contact">
            <Contact/>
          </Route>          
          <Route path="/">
            <Home/>
          </Route>                   
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
