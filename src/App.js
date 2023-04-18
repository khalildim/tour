import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/service", component: Service },
  { path: "/contact", component: Contact },
];

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
