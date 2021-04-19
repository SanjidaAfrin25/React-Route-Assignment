import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/Nomatch/NoMatch';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/About/:PostId">
          <PostDetails></PostDetails>

        </Route>
        <Route  exact path="/">
          <Home/>
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>





    </Router>
      
    
   
  );
}

export default App;
