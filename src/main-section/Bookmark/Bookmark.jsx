import React from "react";

const Bookmark = ({ info }) => {
  return (
    <div className="p-3 bg-white rounded-md">
      <h3 className="font-bold">{info}</h3>
    </div>
  );
};

export default Bookmark;
