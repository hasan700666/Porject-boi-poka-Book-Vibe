import { Suspense } from "react";
import Book from "./Book";

const Books = () => {
  const Data = fetch("../../../public/booksData.json").then((res) =>
    res.json()
  );

  return (
    <>
      <Suspense fallback="loading....">
        <Book Data={Data}></Book>
      </Suspense>
    </>
  );
};

export default Books;
