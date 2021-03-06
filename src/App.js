import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <>
      <h1>Hello from Rohik</h1>
      <p>I am a Software developer who develop cool web apps!</p>
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <img
        alt="camaras"
        src="hd-image.jpg"
        style={{ height: "600px", width: "800px" }}
      />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>New Change</h2>
    </div>
  );
}
