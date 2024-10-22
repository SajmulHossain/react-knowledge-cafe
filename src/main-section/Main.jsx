import React, { useState } from "react";
import Blogs from "./Blog/Blogs";
import Bookmarks from "./Bookmark/Bookmarks";

const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [spenTime, setSpentTime] = useState(0);

  const handleSpentTime = (time, id) => {
    setSpentTime(spenTime + time);

    const remainigBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainigBookmarks);
  };

  const handleBookMarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <section className="md:flex gap-5">
        <Blogs func1={handleSpentTime} func={handleBookMarks}></Blogs>
        <Bookmarks spentTime={spenTime} data={bookmarks}></Bookmarks>
      </section>
    </main>
  );
};

export default Main;
