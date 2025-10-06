import React from "react";
import Book from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center h-120 p-15 bg-gray-100 rounded-3xl my-5">
      <div className="m-10 text-start">
        <p className="text-4xl font-bold">Books to freshen up your bookshelf</p>
        <br />
        <br />
        <button className="bg-green-600 rounded-2xl px-5 py-2 font-extrabold text-neutral-50">
          View The List
        </button>
      </div>
      <div className="m-10">
        <img className="rounded-3xl" src={Book} alt="" />
      </div>
    </div>
  );
};

export default Banner;
