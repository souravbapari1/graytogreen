"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { deleteFile, FIleData, uploadFile } from "@/request/fetch/uploadFile";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiPlusCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useReportChallengeState, useReportEventState } from "./state";
import { setTheReportOnDB } from "@/request/worker/reports/manageReports";

function SubmitForm() {
  const router = useRouter();
  const [summery, setSummery] = useState("");
  const [nextStep, setNextStep] = useState("");
  const params = useSearchParams();
  const session = useSession();
  const {
    events,
    addEvent,
    removeEvent,
    updateEvent,
    validateEvents,
    resetEvents,
  } = useReportEventState();
  const {
    addChallenge,
    challenges,
    removeChallenge,
    updateChallenge,
    validateChallenge,
    resetChallenge,
  } = useReportChallengeState();

  const uploadFileQuery = useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: async (action: {
      file: File;
      onUploaded: (file: FIleData) => void;
    }) => {
      return await uploadFile(action.file, session.data?.user.id || "");
    },
    onSuccess: (data, variables) => {
      variables.onUploaded(data);
      toast.dismiss();
      toast.success("File uploaded successfully");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error("File upload failed");
      console.log(error);
    },
  });

  const id = params.get("id");
  if (!id) {
    return (
      <div className="flex justify-center items-center container">
        <h1>No report found</h1>
      </div>
    );
  }
  const title = id.split("-");

  if (title.length < 3) {
    return (
      <div className="flex justify-center items-center container">
        <h1>No report found</h1>
      </div>
    );
  }
  const genPageTitle = () => {
    switch (title[2]) {
      case "WEEK1":
        return `Week 1 ( 1st - 7th of ${title[1]}, ${title[0]}) Reporting`;
      case "WEEK2":
        return `Week 2 ( 8th - 14th of ${title[1]}, ${title[0]}) Reporting`;
      case "WEEK3":
        return `Week 3 ( 15th - 21st of ${title[1]}, ${title[0]}) Reporting`;
      case "WEEK4":
        return `Week 4 ( 22nd - 28th of ${title[1]}, ${title[0]}) Reporting`;
      default:
        return "Unknown Report";
    }
  };

  const formSubmit = useMutation({
    mutationKey: ["formSubmit"],
    mutationFn: async () => {
      return await setTheReportOnDB({
        year: title[0],
        month: title[1],
        report_key: title[0] + title[1],
        user: session.data?.user.id || "",
        [title[2].toLowerCase()]: {
          summery,
          events,
          challenges,
          nextStep,
        },
      });
    },
    onSuccess: (data, variables) => {
      console.log(data);
      resetEvents();
      resetChallenge();
      toast.dismiss();
      toast.success("Report submitted successfully");
      router.back();
    },
    onError: (error) => {
      toast.dismiss();
      toast.error("Report submission failed");
      console.log(error);
    },
  });

  const handelSubmit = async () => {
    if (validateEvents(events) && validateChallenge(challenges)) {
      if (!nextStep.trim()) {
        toast.error("Next step is required");
        return false;
      }
      if (!summery.trim()) {
        toast.error("Summary is required");
        return false;
      }
      formSubmit.mutate();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">{genPageTitle()}</h1>
      <div className="">
        <div className="mt-20">
          <Label className="text-lg font-semibold">Summary Of This Week</Label>
          <Textarea
            className="shadow-none rounded-none mt-2 h-48"
            value={summery}
            onChange={(e) => setSummery(e.target.value)}
          />
        </div>
        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">Events List</Label>
            <div
              className="flex justify-end cursor-pointer text-primary items-center gap-3 font-semibold"
              onClick={addEvent}
            >
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5">
            <Table className="border ">
              <TableHeader className="bg-green-900/10 ">
                <TableRow>
                  <TableHead className="py-3 md:w-[30px] text-center">
                    SN
                  </TableHead>
                  <TableHead className="py-3 border-r border-l text-center">
                    Event Title
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    Activates
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    Outcomes
                  </TableHead>
                  <TableHead className="py-3 text-center w-[250px] ">
                    Media (Image, Vid , Doc)
                  </TableHead>
                  <TableHead className="py-3 text-center w-3 ">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((e, i) => {
                  return (
                    <TableRow key={i + "event"}>
                      <TableCell className="py-3 text-center border-r">
                        {i + 1}
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input
                          className="shadow-none rounded-none border-none"
                          value={e.title}
                          onChange={(e) =>
                            updateEvent(i, "title", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Input
                          className="shadow-none rounded-none border-none"
                          value={e.activates}
                          onChange={(e) =>
                            updateEvent(i, "activates", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input
                          className="shadow-none rounded-none border-none"
                          value={e.outcomes}
                          onChange={(e) =>
                            updateEvent(i, "outcomes", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className=" text-center flex border-r justify-center items-center">
                        <input
                          type="file"
                          disabled={uploadFileQuery.isPending}
                          className="shadow-none rounded-none w-full pt-2 max-w-[300px] "
                          accept="image/*,video/*,.pdf"
                          onChange={(e) => {
                            if (e.target.files) {
                              toast.loading("Uploading file...");
                              uploadFileQuery.mutate({
                                file: e.target.files[0],
                                onUploaded: (data) => {
                                  updateEvent(i, "file", data);
                                },
                              });
                            }
                          }}
                        />
                      </TableCell>

                      <TableCell
                        className=" text-center border-r w-3  "
                        onClick={() => {
                          if (e.file?.id) {
                            deleteFile(e.file.id)
                              .then((e) => {
                                console.log(e);
                              })
                              .catch((e) => {
                                console.log(e);
                              });
                          }
                          if (i == 0 && events.length == 1) {
                            updateEvent(i, "file", null);
                            updateEvent(i, "title", "");
                            updateEvent(i, "activates", "");
                            updateEvent(i, "outcomes", "");
                          } else {
                            removeEvent(i);
                          }
                        }}
                      >
                        <div className="flex justify-center items-center cursor-pointer ">
                          <IoClose size={20} color="red" />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">
              Challenges you Faced How How You solved it
            </Label>
            <div
              onClick={addChallenge}
              className="flex justify-end cursor-pointer text-primary items-center gap-3 font-semibold"
            >
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5">
            <Table className="border ">
              <TableHeader className="bg-gray-900/10 ">
                <TableRow>
                  <TableHead className="py-3 md:w-[30px] text-center">
                    SN
                  </TableHead>
                  <TableHead className="py-3 border-r border-l text-center">
                    Challenges
                  </TableHead>
                  <TableHead className="py-3 text-center border-r">
                    What You Did?
                  </TableHead>

                  <TableHead className="py-3 text-center w-[250px] ">
                    Media (Image, Vid , Doc)
                  </TableHead>
                  <TableHead className="py-3 text-center w-3 ">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {challenges.map((e, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell className="py-3 text-center border-r">
                        {i + 1}
                      </TableCell>
                      <TableCell className=" text-center border-r">
                        <Input
                          className="shadow-none rounded-none border-none"
                          value={e.title}
                          onChange={(e) =>
                            updateChallenge(i, "title", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Input
                          className="shadow-none rounded-none border-none"
                          value={e.whatYouDid}
                          onChange={(e) =>
                            updateChallenge(i, "whatYouDid", e.target.value)
                          }
                        />
                      </TableCell>

                      <TableCell className=" text-center flex justify-center items-center border-r">
                        <input
                          disabled={uploadFileQuery.isPending}
                          accept="image/*,video/*,.pdf"
                          onChange={(e) => {
                            if (e.target.files) {
                              toast.loading("Uploading file...");
                              uploadFileQuery.mutate({
                                file: e.target.files[0],
                                onUploaded: (data) => {
                                  updateChallenge(i, "file", data);
                                },
                              });
                            }
                          }}
                          type="file"
                          className="shadow-none rounded-none w-full pt-2 max-w-[300px] "
                        />
                      </TableCell>

                      <TableCell
                        className=" text-center border-r w-3  "
                        onClick={() => {
                          if (e.file?.id) {
                            deleteFile(e.file.id)
                              .then((e) => {
                                console.log(e);
                              })
                              .catch((e) => {
                                console.log(e);
                              });
                          }
                          if (i == 0 && events.length == 1) {
                            updateChallenge(i, "file", null);
                            updateChallenge(i, "title", "");
                            updateChallenge(i, "whatYouDid", "");
                          } else {
                            removeChallenge(i);
                          }
                        }}
                      >
                        <div className="flex justify-center items-center cursor-pointer ">
                          <IoClose size={20} color="red" />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-20">
          <Label className="text-lg font-semibold">Plan For Next Week</Label>
          <Textarea
            className="shadow-none rounded-none mt-2 h-48"
            value={nextStep}
            onChange={(e) => setNextStep(e.target.value)}
          />
        </div>
        <br />
        <br />
        <Button
          className="mb-20 p-6 border-none shadow-none"
          onClick={handelSubmit}
          disabled={formSubmit.isPending}
        >
          Submit Your Report
        </Button>
      </div>
    </div>
  );
}

export default SubmitForm;
