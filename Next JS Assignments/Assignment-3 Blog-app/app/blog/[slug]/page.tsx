import Image from "next/image";
import myBlogs from "../blogData";

export default function Page({ params }: { params: { slug: string } }) {
  const filteredBlogs = myBlogs.filter((item) => params.slug === item.slug);

  return (
    <div>
      {filteredBlogs.map((blog) => {
        return (
          <div key={blog.id}>
            <Image
              src={blog.img}
              alt={blog.title}
              height={1000}
              width={1000}
              // layout="responsive"
              className="w-full h-[70vh] object-fill"
            />
            <h2 className="text-2xl font-semibold text-center capitalize py-12">
              {blog.title}
            </h2>
            <p className="text-md mx-32 text-gray-700 ">{blog.description}</p>
          </div>
        );
      })}
    </div>
  );
}
