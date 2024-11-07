import React from "react";

function YourBenefits({ content }: { content?: string }) {
  return (
    <div
      className=" flex flex-col gap-2"
      dangerouslySetInnerHTML={{ __html: content || "" }}
    />
  );
}

export default YourBenefits;
