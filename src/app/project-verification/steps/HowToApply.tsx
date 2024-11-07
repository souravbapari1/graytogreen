import React from "react";

function HowToApply({ content }: { content?: string }) {
  return (
    <div
      className=" flex flex-col gap-2"
      dangerouslySetInnerHTML={{ __html: content || "" }}
    />
  );
}

export default HowToApply;
