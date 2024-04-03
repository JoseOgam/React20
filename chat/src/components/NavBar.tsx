import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <div>
        <h1> Logo </h1>
      </div>
      <div>
        {navLinks.map((nav) => (
          <div key={nav.id}>{nav.title}</div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
