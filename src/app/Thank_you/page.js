import HeaderPages from "@/components/headers/HeaderPages";
import OverviewThankYou from "@/components/thankYou/OverviewThankYou";
import React from "react";

function Thank_you() {
  return (
    <div>
      <HeaderPages
        typeList={"Thank you"}
        listSlug={{ title: "Thank you", slug: "Thank_you" }}
        singleSlug={""}
      />
      <OverviewThankYou
        body={
          "We Received Your Inquiry And Will Contact You Shortly On Your Email If You Didn't Receive A Replay Withing The Next 24H Please Check Your Spam, Junk."
        }
        title={"Thank You"}
      />
    </div>
  );
}

export default Thank_you;
