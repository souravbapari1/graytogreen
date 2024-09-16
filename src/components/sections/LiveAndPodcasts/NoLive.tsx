import { Button } from "@/components/ui/button";
import React from "react";
import { MdLiveTv } from "react-icons/md";

function NoLive() {
  return (
    <div className="container">
      <div className="flex justify-center items-center flex-col gap-6">
        <MdLiveTv size={80} className="text-red-500 mt-16" />
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p>No live currently</p>
        <Button className="donate-btn rounded-full border-none shadow">
          Go To Home
        </Button>
      </div>
    </div>
  );
}

export default NoLive;
