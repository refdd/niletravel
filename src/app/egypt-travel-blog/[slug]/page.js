import HeaderSingelBlog from "@/components/singelBlog/HeaderSingelBlog";
import React from "react";
import { getData } from "../../../../utils/featchApi";
import dynamic from "next/dynamic";
const OverViewBlog = dynamic(() =>
  import("@/components/singelBlog/OverViewBlog")
);
const RelatedTour = dynamic(() =>
  import("@/components/singelBlog/RelatedTour")
);
const ShareIcons = dynamic(() => import("@/components/singelBlog/ShareIcons"));
async function SingleBlog({ params: { slug } }) {
  const singleBlog = await getData(`/posts/${slug}`);
  const { title, updated_at, author, image, description, tours } =
    singleBlog?.data;
  //   console.log(tours[0]);
  return (
    <div>
      <HeaderSingelBlog
        title={title}
        updated_at={updated_at}
        author={author}
        image={image}
      />
      <div className="container mx-auto px-3 md:px-10 mt-5">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <div className="col-span-2">
            <OverViewBlog description={description} author={author} />
            <ShareIcons subSlug={slug} />
          </div>
          <div>
            <RelatedTour relatedTous={tours} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
