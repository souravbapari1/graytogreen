import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function OnlineForm() {
  return (
    <div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">Name of the event</p>
        <Input className="p-5 shadow-none" />
      </div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">Event host</p>
        <Input className="p-5 shadow-none" />
      </div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          Date, time of the whole event and desired time of the presentation
        </p>
        <Input className="p-5 shadow-none" />
      </div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          Location and meeting point with Climate Justice Ambassadors
        </p>
        <Input className="p-5 shadow-none" />
      </div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">Donation(OMN)</p>
        <Input className="p-5 shadow-none" />
      </div>
      <div className="mt-6">
        <p className="font-medium mb-2 text-gray-600">
          Please tell us what the event is about and for which target group it
          is intended:{" "}
        </p>
        <Textarea className="p-5 shadow-none" />
      </div>
    </div>
  );
}

export default OnlineForm;
