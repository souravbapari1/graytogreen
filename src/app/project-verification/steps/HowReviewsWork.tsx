import React from "react";

function HowReviewsWork({ content }: { content?: string }) {
  return (
    <div
      className=" flex flex-col gap-2"
      dangerouslySetInnerHTML={{ __html: content || "" }}
    />
  );
}

export default HowReviewsWork;
