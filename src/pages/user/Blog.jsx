import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const [isFollow, setIsFollow] = useState("Follow");
  const [isFollowClicked, setIsFollowClicked] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [blog, setBlog] = useState({});

  const handleFollow = () => {
    setIsFollowClicked(!isFollowClicked);
  };

  const { blogId } = useParams();
  console.log(blogId);

  useEffect(() => {
    axios
      .get(`user/blog/${blogId}`)
      .then((res) => {
        setBlog(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isFollowClicked) {
      setIsFollow("Following");
    } else {
      setIsFollow("Follow");
    }
  }, [isFollowClicked]);

  return (
    <div className=" mx-[10px] mt-20 md:mx-[300px] min-h-[2600px] mb-5  ">
      <div className="  mt-5 flex ">
        <div
          className=" w-20 h-20  rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${blog.image})`,
          }}
        ></div>
        <div className="  ml-5 my-1 ">
          <div className=" flex gap-5">
            <p className=" text-lg">Kirill Rozov</p>
            <p
              onClick={handleFollow}
              className={` cursor-pointer ${
                isFollow === "Follow" ? "text-green-500" : "text-gray-500"
              }  text-lg`}
            >
              {isFollow}
            </p>
          </div>
          <p className=" text-[#616161] text-sm">Graphic Designer, educator</p>
          <p className=" text-[#616161] text-sm">Feb 20, 2024</p>
        </div>
      </div>
      <p className=" my-5 text-[42px] leading-tight font-Sohnia font-semibold">
        {blog.title}
      </p>
      <div className=" flex h-10 border-y border-gray-400">
        <div className=" flex-1  flex space-x-3 pl-3 items-center">
          <img
            className="  h-5"
            src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719787/1564513_comment_message_voice_icon_arai4d.svg"
            alt="Comment"
          />
          <span>100</span>
        </div>
        <div className=" flex-1 flex justify-evenly items-center">
          {!isSave ? (
            <img
              onClick={() => setIsSave(!isSave)}
              className=" h-5 cursor-pointer"
              src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719788/3994430_bookmark_label_ribbon_save_web_icon_lrv92h.svg"
              alt="save"
            />
          ) : (
            <img
              onClick={() => setIsSave(!isSave)}
              className=" h-7 cursor-pointer"
              src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719786/save_opmlal.svg"
              alt="save"
            />
          )}
          <img
            className=" h-5"
            src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719788/8666719_share_icon_fzsucc.svg"
            alt="share"
          />
          <img
            className=" h-5"
            src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719788/3844444_dot_menu_more_option_icon_wzhypk.svg"
            alt="options"
          />
        </div>
      </div>
      <div className="my-8 space-y-4 font-Georgia text-xl leading-relaxed  text-[#39393a]">
        <p>{blog?.content}</p>
        <p>
          I immediately asked myself, why hasn’t it been done before? And the
          answer is simple — Android didn’t allow to implement this, because
          Google was struggling with fragmentation and working on the
          possibility of an independent update of Android, it became a reality.
        </p>
      </div>
      <div>
        <img src={blog?.image} alt="android" />
        <p className="text-center">Image generated by Kandinsky 2.2</p>
      </div>
      <div className="my-8 space-y-4 font-Georgia text-xl leading-relaxed text-[#39393a]">
        <p>{blog.content}</p>
        <p>
          I immediately asked myself, why hasn’t it been done before? And the
          answer is simple — Android didn’t allow to implement this, because
          Google was struggling with fragmentation and working on the
          possibility of an independent update of Android, it became a reality.
        </p>
      </div>
      <div className=" my-10">
        <p className=" text-2xl font-bold font-Sohnia">
          Recommended from Blog’s Up
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-8 ">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => {
          return (
            <div className=" ">
              <img
                src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719787/1_laK-KCPGdxkkypNWjgUHrw_cufk96.jpg"
                alt="lsfj"
              />
              <div className=" flex my-3 items-center gap-2">
                <div
                  className=" h-6 w-6 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dunf6rko6/image/upload/v1709975821/937908_zuwv1p.jpg)",
                  }}
                ></div>
                <p className=" text-sm">Francesco Franco</p>
              </div>
              <p className=" my-2 text-lg font-extrabold">
                What is a Variational Autoencoder (VAE)?
              </p>
              <p className=" text-[#616161] line-clamp-2">
                Suppose that you have an image of a man with a mustache and one
                of mustache and one of...
              </p>
              <p className=" text-[#616161] text-sm my-2">Feb 12, 2024</p>
              <div className=" flex my-8 ">
                <div className=" flex-1 flex items-center space-x-2">
                  <img
                    className=" h-5 pl-1"
                    src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719787/1564513_comment_message_voice_icon_arai4d.svg"
                    alt=""
                  />
                  <p>100</p>
                </div>
                <div className=" flex-1 flex justify-end  space-x-5 items-center">
                  <img
                    className=" h-5 "
                    src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719788/3994430_bookmark_label_ribbon_save_web_icon_lrv92h.svg"
                    alt=""
                  />
                  <img
                    className=" h-5 pr-3"
                    src="https://res.cloudinary.com/dunf6rko6/image/upload/v1709719788/3844444_dot_menu_more_option_icon_wzhypk.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className=" border-gray-300 my-6" />
      <Link to={"/home#scrollElement"}>
        <button className=" text-sm border border-black rounded-full focus:outline-none py-2 px-4 mb-10">
          See more recommendation
        </button>
      </Link>
    </div>
  );
};

export default Blog;
