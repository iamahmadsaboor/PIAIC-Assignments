import Image from "next/image";
import client from "@/lib/contentfulClient";
import { slugify } from "@/lib/slugify";
import { parseISO, format } from "date-fns";
import Link from "next/link";

const fetchBlogData = async () => {
  const blogData = await client.getEntries({ content_type: "blogs" });

  return blogData.items.map((item: any) => {
    const { image, author, publishat, tags, title, description } = item.fields;
    return {
      id: item.sys.id,
      title,
      description,
      image: image?.fields?.file?.url,
      date: publishat
        ? format(parseISO(publishat), "yyyy-MM-dd h:mm a")
        : "Invalid Date",
      slug: slugify(title),
      tagList: tags,
      authorName: author,
    };
  });
};

export default async function Blogs({ params }: { params: { slug: string } }) {
  const data = await fetchBlogData();
  const post = data.find((p: any) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl font-light text-gray-600">Post not found</p>
          <p className="mt-4 mb-8 text-lg text-gray-600">
            The post you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link
            className="mt-12 px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 transition duration-300"
            href="/"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        src={`https://${post.image}`}
        alt={post.title}
        width={1000}
        height={1000}
        className="object-cover object-center w-screen max-h-[76vh]"
      />
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{post.description}</p>
        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <p>
            <strong className="font-semibold">Posted on:</strong> {post.date}
          </p>
          <p>
            <strong className="font-semibold">Tags:</strong> {post.tagList}
          </p>
          <p>
            <strong className="font-semibold">By:</strong> {post.authorName}
          </p>
        </div>
      </div>
    </div>
  );
}
