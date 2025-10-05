import React from "react";
import { CiStar } from "react-icons/ci";

const ShowBook = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="">
          <img className="h-60" src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.bookName}</h2>
          <p>by: {data.author}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{data.category}</div>
            <div className="badge badge-outline">
              <CiStar /> {data.rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBook;
