import "./App.css";
import { NavLink, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <nav id="Navbar">
          <NavLink to="/soda">Soda</NavLink>
          <NavLink to="/chips">Chips</NavLink>
          <NavLink to="/freshsardines">Fresh Sardines</NavLink>
        </nav>
      </header>

        <Outlet />
    </>
  );
}

export default App;
