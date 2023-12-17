import React from "react";
import CardBlog from "./CardBlog";

function ListBlolgContainer({ dataBlog }) {
  return (
    <div className="md:col-span-2">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {dataBlog?.map((item) => (
          <CardBlog
            key={item.id}
            slugType={""}
            imgSrc={item.image}
            description={item?.description}
            title={item?.title}
            slug={item?.slug}
            authorImage={item?.author.image}
            authorName={item.author.name}
            metaTitle={item.meta_title}
          />
        ))}
      </div>
    </div>
  );
}

export default ListBlolgContainer;
