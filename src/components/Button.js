import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 m-3 px-3  shadow-lg border bg-gray-300 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
