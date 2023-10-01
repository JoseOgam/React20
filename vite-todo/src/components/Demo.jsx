import React from "react";

const Demo = () => {
  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="flex justify-center items-center">
          <input type="text" placeholder="write your todo..." />
        </form>
      </div>
    </section>
  );
};

export default Demo;
