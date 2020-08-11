import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import requests from './requests'
import RenderNews from './RenderNews'
import Footer from "./Footer";
import About from './About'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Country from './Country'
import './App.css';
import countries from './countryDetails';

function App() {
  return (
    <div className="App">
    <div id="brand">OVER THE WORLD</div>
      <BrowserRouter>
        <Navbar bg="light" expand="lg" sticky="top" className="box-shadow">
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className=".nav-item">
            <Nav className="ml-auto mr-auto">
              <Link to="/home" className="mb-auto mt-auto mr-3">Home</Link>
              <Link to="/tech" className="mb-auto mt-auto mr-3">Technology</Link>
              <Link to="/business" className="mb-auto mt-auto mr-3">Business</Link>
              <Link to="/sports" className="mb-auto mt-auto mr-3">Sports</Link>
              <Link to="/entertainment" className="mb-auto mt-auto mr-3">Entertainment</Link>
              <Link to="/health" className="mb-auto mt-auto mr-3">Health</Link>
              <Link to="/tnb" className="mb-auto mt-auto mr-3">The Next Web</Link>
              <Link to="/gnews" className="mb-auto mt-auto mr-3">Google News</Link>
              <NavDropdown title="Country" className="mr-60" id="country-dropdown">
                <Country />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <Route path="/home" component={() => <RenderNews title="HOME" fetchUrl={requests.general} />} />
          <Route path="/tech" component={() => <RenderNews title="TECHNOLOGY" fetchUrl={requests.tech} />} />
          <Route path="/tnb" component={() => <RenderNews title="THE NEXT WEB" fetchUrl={requests.tnb} />} />
          <Route path="/business" component={() => <RenderNews title="BUSINESS" fetchUrl={requests.business} />} />
          <Route path="/health" component={() => <RenderNews title="HEALTH" fetchUrl={requests.health} />} />
          <Route path="/sports" component={() => <RenderNews title="SPORTS" fetchUrl={requests.sports} />} />
          <Route path="/entertainment" component={() => <RenderNews title="ENTERTAINMENT" fetchUrl={requests.entertainment} />} />
          <Route path="/gnews" component={() => <RenderNews title="GOOGLE NEWS" fetchUrl={requests.gnews} />} />
          <Route path="/about" component={() => <About title="ABOUT" />} />
          {countries.map((country) => (
            <Route key={country.id} path={"/" + country.code} component={() => <RenderNews title={country.name} fetchUrl={requests[country.code]} />} />
          ))}
          <Redirect to="/home" />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
