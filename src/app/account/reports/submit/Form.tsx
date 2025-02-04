"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { deleteFile, FIleData, uploadFile } from "@/request/fetch/uploadFile";
import { setTheReportOnDB } from "@/request/worker/reports/manageReports";
import { useMutation } from "@tanstack/react-query";
import { File } from "lucide-react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";
import toast from "react-hot-toast";
import { FiPlusCircle } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { useReportChallengeState, useReportEventState } from "./state";
import Swal from "sweetalert2";

const QuillEditor = dynamic(
  () => import("@/components/extension/quillEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-24 bg-gray-100 flex justify-center items-center text-center">
        <p>Loading...</p>
      </div>
    ),
  }
);

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
    addFile,
    removeFile,
  } = useReportEventState();
  const {
    addChallenge,
    challenges,
    removeChallenge,
    updateChallenge,
    validateChallenge,
    resetChallenge,
    addChallengeFile,
    removeChallengeFile,
  } = useReportChallengeState();

  const uploadFileQuery = useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: async (action: {
      file: File;
      onUploaded: (file: FIleData) => void;
    }) => {
      return await uploadFile(action.file, session?.data?.user?.id || "");
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
        user: session.data?.user?.id || "",
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

      Swal.fire({
        title: "Submitted!",
        text: "Your Report Under Review By GTG Team.",
        icon: "success",
      });

      setTimeout(() => {
        router.back();
      }, 2000);
    },
    onError: (error) => {
      toast.dismiss();
      toast.error("Report submission failed");
      console.log(error);
    },
  });

  const handelSubmit = async () => {
    if (validateEvents(events) && validateChallenge(challenges)) {
      if (nextStep.trim().length <= 10) {
        toast.error("Next Week Plan Content is required");
        return false;
      }
      if (summery.trim().length <= 10) {
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
          <Label className="text-sm mb-2 block font-medium mt-5">
            Summary Of This Week
          </Label>
          <QuillEditor
            className="shadow-none rounded-md mt-2 border min-h-40 w-full"
            value={summery}
            onChange={(e) => setSummery(e)}
          />
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-medium  block mb-1 ">
              Events List
            </Label>
            <div
              className="flex justify-end cursor-pointer text-primary items-center gap-3 font-medium text-sm  mb-1 mt-5"
              onClick={addEvent}
            >
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {events.map((e, i) => {
              return (
                <div className="" key={i + "event"}>
                  <div className="border p-4  rounded-md">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium  block mb-1 ">
                        Event {i + 1}
                      </h3>
                      <IoCloseCircle
                        color="red"
                        className="cursor-pointer"
                        onClick={() => {
                          if (e.file) {
                            Promise.all(
                              e.file.map((file) => deleteFile(file.id))
                            ).then((e) => {
                              console.log(e);
                            });
                          }
                          if (i === 0 && events.length === 1) {
                            updateEvent(i, "file", null);
                            updateEvent(i, "title", "");
                            updateEvent(i, "activates", "");
                            updateEvent(i, "outcomes", "");
                          } else {
                            removeEvent(i);
                          }
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <Label className="font-medium text-sm block mb-1 mt-5">
                        Event Title
                      </Label>
                      <QuillEditor
                        className="shadow-none rounded-md border"
                        value={e.title}
                        onChange={(e) => updateEvent(i, "title", e)}
                      />
                    </div>

                    <div className="mt-2">
                      <Label className="font-medium text-sm block mb-1 mt-5">
                        Activates
                      </Label>
                      <QuillEditor
                        className="shadow-none rounded-md border"
                        value={e.activates}
                        onChange={(e) => updateEvent(i, "activates", e)}
                      />
                    </div>

                    <div className="mt-2">
                      <Label className="font-medium text-sm block mb-1 mt-5">
                        Outcomes
                      </Label>
                      <QuillEditor
                        className="shadow-none rounded-md border"
                        value={e.outcomes}
                        onChange={(e) => updateEvent(i, "outcomes", e)}
                      />
                    </div>

                    <div className="mt-3">
                      {e.file?.map((file) => (
                        <div
                          key={file.id}
                          className="flex justify-between items-center gap-2 mt-2 w-full"
                        >
                          <p className="text-xs text-primary text-ellipsis line-clamp-1">
                            {file.file.filename}
                          </p>
                          <IoCloseCircle
                            color="red"
                            className="cursor-pointer"
                            onClick={() => {
                              removeFile(i, file.id);
                              deleteFile(file.id);
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor={"file-event-" + i}
                        className="bg-primary p-1 text-xs text-white rounded flex gap-4 mt-2 justify-center items-center cursor-pointer w-full"
                      >
                        <File size={10} /> <p>Add File</p>
                      </label>
                      <input
                        id={"file-event-" + i}
                        type="file"
                        disabled={uploadFileQuery.isPending}
                        className="shadow-none hidden rounded-md w-full pt-2 max-w-[300px]"
                        accept="image/*,video/*,.pdf"
                        onChange={(e) => {
                          if (e.target.files) {
                            toast.loading("Uploading file...");
                            uploadFileQuery.mutate({
                              file: e.target.files[0],
                              onUploaded: (data) => {
                                addFile(i, data);
                              },
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-medium  block mb-1 mt-5">
              Challenges you Faced How You Solved It
            </Label>
            <div
              onClick={addChallenge}
              className="flex justify-end cursor-pointer text-primary items-center gap-3 font-medium text-sm  mb-1 mt-5"
            >
              <p>Add</p>
              <FiPlusCircle size={24} />
            </div>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {challenges.map((e, i) => {
              return (
                <div key={i} className="border p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <h3 className=" font-bold text-sm block ">
                      Challenge {i + 1}
                    </h3>
                    <IoCloseCircle
                      color="red"
                      className="cursor-pointer"
                      onClick={() => {
                        if (e.file) {
                          Promise.all(
                            e.file.map((file) => deleteFile(file.id))
                          ).then((e) => {
                            console.log(e);
                          });
                        }
                        if (i === 0 && challenges.length === 1) {
                          updateChallenge(i, "file", null);
                          updateChallenge(i, "title", "");
                          updateChallenge(i, "whatYouDid", "");
                        } else {
                          removeChallenge(i);
                        }
                      }}
                    />
                  </div>

                  <div className="mt-2">
                    <Label className="font-medium text-sm block mb-1 mt-5">
                      Challenge Title
                    </Label>
                    <QuillEditor
                      className="shadow-none rounded-md border"
                      value={e.title}
                      onChange={(e) => updateChallenge(i, "title", e)}
                    />
                  </div>

                  <div className="mt-2">
                    <Label className="font-medium text-sm block mb-1 mt-5">
                      What You Did
                    </Label>
                    <QuillEditor
                      className="shadow-none rounded-md border"
                      value={e.whatYouDid}
                      onChange={(e) => updateChallenge(i, "whatYouDid", e)}
                    />
                  </div>

                  <div className="mt-3">
                    {e.file?.map((file) => (
                      <div
                        key={file.id}
                        className="flex justify-between items-center gap-2 mt-2 w-full"
                      >
                        <p className="text-xs text-primary text-ellipsis line-clamp-1">
                          {file.file.filename}
                        </p>
                        <IoCloseCircle
                          color="red"
                          className="cursor-pointer"
                          onClick={() => {
                            removeChallengeFile(i, file.id);
                            deleteFile(file.id);
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor={"file-challenge-" + i}
                      className="bg-primary p-1 text-xs text-white rounded flex gap-4 mt-2 justify-center items-center cursor-pointer w-full"
                    >
                      <File size={10} /> <p>Add File</p>
                    </label>
                    <input
                      id={"file-challenge-" + i}
                      type="file"
                      disabled={uploadFileQuery.isPending}
                      className="shadow-none hidden rounded-md w-full pt-2 max-w-[300px]"
                      accept="image/*,video/*,.pdf"
                      onChange={(e) => {
                        if (e.target.files) {
                          toast.loading("Uploading file...");
                          uploadFileQuery.mutate({
                            file: e.target.files[0],
                            onUploaded: (data) => {
                              addChallengeFile(i, data);
                            },
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <Label className="text-lg font-medium block mb-1 mt-5">
            Plan For Next Week
          </Label>
          <QuillEditor
            className="shadow-none rounded-md mt-2 min-h-48 border"
            value={nextStep}
            onChange={(e) => setNextStep(e)}
          />
        </div>
        <SubmitAction submit={handelSubmit} loading={formSubmit.isPending}>
          <Button
            className="mb-20 p-4 mt-10 "
            // onClick={handelSubmit}
            disabled={formSubmit.isPending}
          >
            Submit Report
          </Button>
        </SubmitAction>
      </div>
    </div>
  );
}

export default SubmitForm;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function SubmitAction({
  children,
  loading,
  submit,
}: {
  children: ReactNode;
  submit: Function;
  loading: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            You will not be able to edit your report once you confirm your
            submission so pls double check from all information
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          <Button
            disabled={loading}
            className="shadow-none"
            onClick={async () => {
              await submit();
              setIsOpen(false);
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
          <DialogTrigger>
            <Button className="shadow-none" variant="destructive">
              Cancel
            </Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
}
