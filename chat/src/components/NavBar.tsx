import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        {navLinks.map((nav) => (
          <div>{nav.title}</div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
