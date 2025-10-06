import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const ShowBook = ({ data }) => {
  console.log(data);

  return (
    <>
      <Link to={`about/book/${data.bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 rounded-3xl">
          <figure className="bg-gray-100 rounded-4xl mx-10 my-3">
            <img className="h-60" src={data.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex w-50 text-center">
              <p className="bg-green-200 rounded-3xl text-green-600 font-extrabold mx-2">
                {data.tags[0]}
              </p>
              <p className="bg-green-200 rounded-3xl text-green-600 font-extrabold ">
                {data.tags[1]}
              </p>
            </div>
            <h2 className="card-title">{data.bookName}</h2>
            <p className="mb-5">by: {data.author}</p>
            <div className="border border-gray-200"></div>
            <div className="card-actions justify-between">
              <div className="badge border border-gray-300">
                {data.category}
              </div>
              <div className="badge border border-gray-300">
                <CiStar /> {data.rating}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShowBook;
