import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ func, func1 }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} func1={func1} func={func} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
