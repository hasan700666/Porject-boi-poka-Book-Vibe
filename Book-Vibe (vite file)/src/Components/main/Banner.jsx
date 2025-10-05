import React from "react";
import Book from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="m-10 text-center">
        <p>Books to freshen up your bookshelf</p>
      </div>
      <div className="m-10">
        <img src={Book} alt="" />
      </div>
    </div>
  );
};

export default Banner;
