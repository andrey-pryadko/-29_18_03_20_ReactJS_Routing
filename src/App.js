import React from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="container">
      {/* <Route path='/' exact render={() => (<h1>Main</h1>)}/>
      <Route path='/about' render={()=>(<h1>About</h1>)} /> */}
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none"
          }}
        >
          <li style={{ marginRight: 10 }}>
            {/* <a href="/">Home</a> */}
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li style={{ marginRight: 10 }}>
            {/* <a href='/about'>About</a> */}
            {/* <Link to='/about'>About</Link> */}
            <NavLink
              to={{
                pathname: "/about",
                search: "?a=10&b=20",
                hash: "telran"
              }}
              activeClassName="my-active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeStyle={{ color: "blue" }}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" render={() => <div>Contacts</div>} />
        <Route
          path="*"
          render={() => <h1 style={{ color: "red" }}>404 Not Found</h1>}
        />
      </Switch>
    </div>
  );
}

export default App;


const conatct = {
  id:'12214342332432',
  name:'Vasya',
  lastName:'Pupkin',
  email:'vasya@mail.com',
  phone:'055555555',
  address:'Tel Aviv',
  description:'My Best Friend'
};