import Header from "./components/Header/Header"
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"


import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>

          <Route path="/portfolio" component={Portfolio} />

          <Route exact path="/" component={Home} />

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
