import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import store from './redux/store/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './utilities/Normalize.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
