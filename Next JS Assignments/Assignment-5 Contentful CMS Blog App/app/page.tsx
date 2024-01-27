import Image from "next/image";
import { parseISO, format } from "date-fns";
import { BlogEntry } from "@/types/blogEntry";
import client from "@/lib/contentfulClient";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

// Blogs Fetching
const fetchBlogs = async (): Promise<BlogEntry[]> => {
  const response = await client.getEntries({
    content_type: "blogs",
  });
  console.log("Blogs", response.items);
  return response.items as BlogEntry[];
};

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="">
      <section className="text-gray-600 body-font flex justify-center items-center ">
        {blogs.map((blog, index) => {
          const { image, author, publishat, tags, title, description } =
            blog.fields;
          const imageUrl = image?.fields?.file?.url;
          const parsedDate = publishat
            ? format(parseISO(publishat), "yyyy-MM-dd h:mm a")
            : "Invalid Date";
          const shortenedDescription =
            description.length > 100
              ? `${description.substring(0, 100)}...`
              : description;

          const slug = slugify(title);

          return (
            <div key={index} className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 w-fit">
                  <Link href={`/${slug}`}>
                    <span className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={`https:${imageUrl}`}
                        alt="blog"
                        width={1000}
                        height={1000}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {tags}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {shortenedDescription}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Author: {author}
                          </span>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            Date: {parsedDate}
                          </span>
                        </div>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
