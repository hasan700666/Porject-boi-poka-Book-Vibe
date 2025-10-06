import React from "react";
import { useLoaderData, useParams } from "react-router";

const ShowOneBook = () => {
  const data = useLoaderData();
  console.log(data);

  const { id } = useParams();
  console.log(id);

  const findBook = data.find((book) => book.bookId == id);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-gray-200 rounded-3xl flex justify-center items-center p-20">
            <img src={findBook.image} className="max-w-sm rounded-lg" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{findBook.bookName}</h1>
            <p className="py-6 text-2xl">by : {findBook.author}</p>
            <div className="border border-gray-300"></div>
            <p className="py-6 text-2xl">{findBook.category}</p>
            <div className="border border-gray-300"></div>
            <p className="py-6 ">
              <span className="font-extrabold">Review : </span>
              {findBook.review}
            </p>
            <br />
            <div className="py-6 flex ">
              <p className="mx-2 font-extrabold px-2">Tag </p>
              <p className="mx-2 px-2 bg-green-300 rounded-3xl">
                #{findBook.tags[0]}
              </p>
              <p className="mx-2 px-2 bg-green-300 rounded-3xl">
                #{findBook.tags[1]}
              </p>
            </div>
            <div className="flex justify-between mx-5">
              <div>Number of Pages:</div>
              <div className="pr-60 font-extrabold">{findBook.totalPages}</div>
            </div>
            <div className="flex justify-between mx-5">
              <div>Publisher:</div>
              <div className="pr-60 font-extrabold">{findBook.publisher}</div>
            </div>
            <div className="flex justify-between mx-5">
              <div>Year of Publishing:</div>
              <div className="pr-60 font-extrabold">
                {findBook.yearOfPublishing}
              </div>
            </div>
            <div className="flex justify-between mx-5">
              <div>Rating:</div>
              <div className="pr-60 font-extrabold">{findBook.rating}</div>
            </div>
            <button className="btn bg-green-300  mt-10 mx-5">Read</button>
            <button className="btn bg-green-300 mt-10 mx-5">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOneBook;
