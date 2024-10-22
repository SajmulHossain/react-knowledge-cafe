import React from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, func, func1 }) => {
  return (
    <div className="mb-20">
      <div>
        <div>
          <img src={blog.cover} className="rounded-md w-full" />
        </div>

        <div className="my-5 flex justify-between">
          <div className="flex gap-3">
            <div>
              <img src={blog.author_img} className="h-12 w-12" alt="" />
            </div>

            <div>
              <h5 className="font-bold">{blog.author}</h5>
              <p>{blog.posted_date}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p>{blog.reading_time} mins to read</p>
            <button className="text-red-600" onClick={() => func(blog)}>
              <CiBookmark></CiBookmark>
            </button>
          </div>
        </div>

        <h2 className="font-bold text-3xl">{blog.title}</h2>

        <p className="mb-5">
          {blog.hashtags.map((hash, i) => (
            <span key={i}>
              <a href=""> #{hash}</a>{" "}
            </span>
          ))}
        </p>

        <button
          onClick={() => func1(blog.reading_time, blog.id)}
          className="underline text-blue-400"
        >
          Marks as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
