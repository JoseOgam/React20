import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <section className=" grid gap-8 md:grid-cols-2 md:items-center md:text-left p-5 pt-2 sm:max-xl:bg-red-300">
        <div>
          <img
            src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg"
            alt="Section Image"
            height={200}
            width={1000}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className=" flex justify-center font-extrabold uppercase mb-2 text-4xl">
            Headline
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae
            dolorum debitis consectetur dolores, eos ad consequuntur soluta
            harum officia quasi praesentium delectus facilis quas a deleniti
            mollitia dolore nesciunt
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
