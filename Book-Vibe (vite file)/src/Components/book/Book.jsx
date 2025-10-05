import React, { use } from "react";
import ShowBook from "./ShowBook";

const Book = ({ Data }) => {
  const data = use(Data);
  //console.log(data);

  return (
    <div className="grid grid-cols-3 m-10 gap-5">
      {data.map((data) => (
        <ShowBook key={data.bookId} data={data}></ShowBook>
      ))}
    </div>
  );
};

export default Book;
