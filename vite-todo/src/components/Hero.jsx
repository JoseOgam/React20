import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex-col">
      <nav className="flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="todo logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/JoseOgam", "_blank")}
          className="black_btn"
        >
          github
        </button>
      </nav>
      <div>
        <h1 className="head_text">
          Simplify your <br className="max-md: hidden" />
          <span> daily Schedule</span>
        </h1>
      </div>
    </header>
  );
};

export default Hero;
