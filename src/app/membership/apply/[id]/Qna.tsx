"use client";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import { MembershipItem } from "@/interface/membership";
import { cn } from "@/lib/utils";
import { localClient } from "@/request/actions";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Qna({ data, id }: { id: string; data: MembershipItem }) {
  const router = useRouter();

  const [answers, setAnswers] = useState<{ qus: string; answers: string }[]>(
    []
  );

  const payMutate = useMutation({
    mutationKey: ["pay"],
    mutationFn: async () => {
      return await localClient
        .post(`/api/membership/${id}`)
        .json({ qna: answers })
        .send<{ payUrl: string }>();
    },
    onSuccess: (data) => {
      router.replace(data.payUrl);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="mt-6">
      {data.qna?.map((question, index) => (
        <div key={question.question! + index} className="mb-10">
          <h1 className="font-bold text-lg mb-2">
            {`Q${index + 1}. ${question.question}`}
          </h1>
          <div
            className={cn(
              `flex flex-col select-none text-sm gap-4 ${montserrat.className}`
            )}
          >
            {question.answers.map((option, index) => (
              <div className="w-full" key={index + option}>
                <div
                  className={cn(
                    "border-2 px-5  py-2 cursor-pointer rounded-lg",
                    answers.find(
                      (e) => e.qus === question.question && e.answers === option
                    )
                      ? "border-primary text-primary"
                      : ""
                  )}
                  onClick={() => {
                    setAnswers((prev) => {
                      const remove = prev.filter(
                        (e) => e.qus !== question.question
                      );
                      return [
                        ...remove,
                        {
                          qus: question.question || "",
                          answers: option,
                        },
                      ];
                    });
                  }}
                >
                  <p>{option}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="">
        <Button
          onClick={() => {
            if (answers.length === data.qna?.length) {
              payMutate.mutate();
            } else {
              toast.error("Please answer all questions");
            }
          }}
          disabled={payMutate.isPending}
          className="donateBtn shadow-2xl py-5 mb-7 md:px-6 rounded-xl px-8"
        >
          Submit and Proceed To Pay
        </Button>
      </div>
    </div>
  );
}

export default Qna;
