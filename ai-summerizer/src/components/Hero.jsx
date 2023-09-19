import { copy } from "../assets";

const Hero = () => {
  return (
    <header className="w-full  justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={copy} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/JoseOgam", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize your Articals with <br className="max-md: hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        simplify your reading with summarizer, lengthy articles are transformed
        in clear and concise summary
      </h2>
    </header>
  );
};

export default Hero;
