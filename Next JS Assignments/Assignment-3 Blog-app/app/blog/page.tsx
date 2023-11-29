import Link from "next/link";
import rndmImg from "/public/rndm.jpg";
import Image from "next/image";

const myBlogs = [
  {
    id: 1,
    title: "My first blog",
    slug: "My-first-blog",
    description: "Click to Read",
    img: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "My Second blog",
    slug: "My-second-blog",
    description: "Click to Read",

    img: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    title: "My Third blog",
    slug: "My-third-blog",
    description: "Click to Read",

    img: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    title: "My-fourth-blog",
    slug: "My-fourth-blog",
    description: "Click to Read",

    img: "https://source.unsplash.com/random",
  },
  {
    id: 5,
    title: "My fifth blog",
    slug: "My-fifth-blog",
    description: "Click to Read",
    img: "https://source.unsplash.com/random",
  },
];
const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center hover:underline-offset-2 hover:underline	">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myBlogs.map((blog) => (
          <Link
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            href={`/blog/${blog.slug}`}
          >
            <Image
              src={blog.img}
              alt={blog.title}
              height={1000}
              width={1000}
              // layout="responsive"
              className="object-cover w-full h-48 md:h-64"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
