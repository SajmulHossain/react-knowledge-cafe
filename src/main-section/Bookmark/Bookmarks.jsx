import React from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ data, spentTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-blue-300 border-2 rounded-md border-blue-700 text-center text-blue-800 font-bold py-3">
        Spent time on read: {spentTime.toString().padStart(2, 0)} min
      </div>

      <div className="mt-5 bg-gray-300 rounded-md px-4 py-5">
        <h3 className="font-bold text-xl">Bookmarked Blogs: {data.length}</h3>

        <div className="space-y-4 mt-5">
          {data.map((elem, i) => (
            <Bookmark key={i} info={elem.title}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
