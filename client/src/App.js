import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Form from "./Component/Form";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Form} />
        </Switch>
        <Redirect to='/' />
      </div>
    </BrowserRouter>
  );
};

export default App;
