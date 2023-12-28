import HeaderSingelBlog from "@/components/singelBlog/HeaderSingelBlog";
import React, { Suspense } from "react";
import { getData } from "../../../../utils/featchApi";
import dynamic from "next/dynamic";
const OverViewBlog = dynamic(() =>
  import("@/components/singelBlog/OverViewBlog")
);
const RelatedTour = dynamic(() =>
  import("@/components/singelBlog/RelatedTour")
);
const ShareIcons = dynamic(() => import("@/components/singelBlog/ShareIcons"));
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
async function SingleBlog({ params: { slug } }) {
  const singleBlog = await getData(`/posts/${slug}`);
  const { title, updated_at, author, image, description, tours, created_at } =
    singleBlog?.data;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image,
    datePublished: created_at,
    dateModified: updated_at,
  };
  // console.log(singleBlog?.data);
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <Suspense fallback={<>-----------</>}>
              <FormInquery notStiky />
            </Suspense>
            <RelatedTour relatedTous={tours} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
