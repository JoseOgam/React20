const App = () => {
  return (
    <div>
      <nav className="flex w-full bg-teal-600 items-center justify-between px-5 py-5">
        <div>Logo</div>
        <div className="flex flex-row gap-10">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Contact</ul>
        </div>
      </nav>
      <section className="pt-5 flex">
        <div>
          <img
            src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg"
            alt="Section Image"
            height={200}
            width={1000}
            className=""
          />
        </div>
        <div>
          <h1 className=" font-extrabold uppercase">Headline</h1>
          <p>
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
