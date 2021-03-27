
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Flavours from './pages/flavours';
import Events from './pages/events';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/#about" component={Home} exact/>
        <Route path="/flavours" component={Flavours} exact/>
        <Route path="/events" component={Events} exact/>
      </Switch>
    </Router>
  );
}

export default App;
