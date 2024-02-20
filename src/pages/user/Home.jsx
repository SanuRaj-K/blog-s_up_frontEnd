import React from "react";
import BlogCard from "../../components/BlogCard";

const contents = [
  {
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
];

const Home = () => {
  return (
    <div>
      <section className="container mx-auto px-8 py-10 lg:py-28">
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {contents.map(({ img, title, desc }) => (
            <BlogCard key={title} img={img} title={title} desc={desc} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;