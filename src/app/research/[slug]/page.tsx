import NotFound from "@/app/not-found";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import { formatTimestampCustom } from "@/helper/dateTime";
import Image from "next/image";
import { getResearchPostBySlug } from "../function";

export const revalidate = 0;
async function ReadResearches({ params }: { params: { slug: string } }) {
  const blog = await getResearchPostBySlug(params.slug);

  if (blog?.data.researchPosts?.length === 0) {
    return <NotFound />;
  }
  const post = blog?.data.researchPosts[0];
  return (
    <div>
      <Navbar />
      <div className="w-full md:h-96 h-44 relative overflow-hidden">
        <Image
          src={strApi + post?.previewImage?.url}
          width={2000}
          height={700}
          alt=""
          className="w-full md:h-96 h-44 object-cover absolute"
        />
        <div className="w-full  md:h-96 h-44 bg-main/20 backdrop-blur-sm relative"></div>
      </div>
      <div className="container  md:-mt-64 -mt-22 z-20 relative">
        <Image
          src={strApi + post?.previewImage?.url}
          width={2000}
          height={2000}
          alt=""
          className="w-full lg:h-[500px] md:h-96 bg-white h-52 object-cover max-w-[900px] shadow-md rounded-3xl mx-auto"
        />
      </div>
      <div className={`container ${montserrat.className}`}>
        <div className=" max-w-[900px]  mx-auto">
          <h1 className="lg:text-2xl text-xl font-bold mt-10">{post?.title}</h1>
          <div className="mt-5 flex justify-between items-center w-full  ">
            <p className="font-semibold md:text-base text-sm text-gray-400">
              {formatTimestampCustom(post?.publishedAt)}
            </p>

            <p> - {post.research_category.name}</p>
          </div>
          <br />
          <hr />
          <br />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post?.content || "" }}
          />
        </div>
      </div>

      <FooterTop />
      <Footer />
    </div>
  );
}

export default ReadResearches;
