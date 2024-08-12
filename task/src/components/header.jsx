import React from "react";

const Header = () => {
  return (
    <div>
      <h3>Keep track of our day!</h3>
      <div className="iputs">
        <div>
          <input placeholder="add your task" type="text" />
        </div>
        <div>
          <input placeholder="submit" type="button" />
        </div>
      </div>
    </div>
  );
};

export default Header;
