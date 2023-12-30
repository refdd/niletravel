import HeaderPages from "@/components/headers/HeaderPages";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { getData } from "../../../utils/featchApi";
const ListBlolgContainer = dynamic(() =>
  import("@/components/blog/ListBlolgContainer")
);
const FormInquery = dynamic(() => import("@/components/form/FormInquery"));
export async function generateMetadata({ params: { slug }, searchParams }) {
  return {
    title: "Egypt Travel Blog | Egypt Travel Advisory",
    description:
      "The top Popular Egypt travel blog featuring travel tips, fashion, food and photography from around Egypt Read before starting adventures Read more!",
  };
}
async function ListBlog() {
  const blog = await getData(`/posts`);

  return (
    <div>
      <HeaderPages
        typeList={"List Travel Blog "}
        listSlug={{ title: "blog", slug: "egypt-travel-blog" }}
        singleSlug={""}
      />
      <div className="container mx-auto px-4 mt-28 md:px-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <Suspense fallback={<>-----------</>}>
            <ListBlolgContainer dataBlog={blog?.data} />
          </Suspense>

          <div>
            <Suspense fallback={<>-----------</>}>
              <FormInquery />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBlog;
