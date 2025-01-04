"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { UpcomingAcademy } from "../../GreenKidsAcademys";
import { submitAcademicRegistration } from "./actions";
import { useRouter } from "next/navigation";
import { UserItem } from "@/interface/user";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/complete/country-dropdown";
import { CityDropdown } from "@/components/complete/city-dropdown";

// Define types for Participant and Parent
interface Participant {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  school: string;
  grade: string;
  tshirtSize: string;
}

interface ParentDetails {
  title: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  relation: string;
  country: string;
  city: string;
  state: string;
}

function ApplyForm({
  data,
  userData,
}: {
  data: UpcomingAcademy;
  userData: UserItem | null;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [participants, setParticipants] = useState<Participant[]>([
    {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      email: "",
      school: "",
      grade: "",
      tshirtSize: "",
    },
  ]);

  const [parent, setParent] = useState<ParentDetails>({
    title: userData?.gender === "male" ? "Mr." : "Mrs.",
    firstName: userData?.first_name || "",
    lastName: userData?.last_name || "",
    address: "",
    email: userData?.email || "",
    phone: userData?.mobile_no || "",
    relation: "",
    city: userData?.city || "",
    country: userData?.country || "",
    state: "",
  });

  const [message, setMessage] = useState<string>("");
  const [participantQuestion, setParticipantQuestion] = useState<string>("");

  const handleParticipantChange = (
    index: number,
    field: keyof Participant,
    value: string
  ) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleParentChange = (field: keyof ParentDetails, value: string) => {
    setParent({ ...parent, [field]: value });
  };

  const validateFields = () => {
    let isValid = true;
    toast.dismiss();
    participants.forEach((participant, index) => {
      for (const [key, value] of Object.entries(participant)) {
        if (!value && key !== "email") {
          isValid = false;
          toast.error(`Participant ${index + 1} is missing ${key}.`);
          return false;
        }
      }
    });

    for (const [key, value] of Object.entries(parent)) {
      if (!value) {
        isValid = false;
        toast.error(`Parent is missing ${key}.`);
        return false;
      }
    }

    // if (!message) {
    //   isValid = false;
    //   toast.error("Message is required.");
    //   return false;
    // }

    // if (!participantQuestion) {
    //   isValid = false;
    //   toast.error("Participant contact question is required.");
    //   return false;
    // }

    return isValid;
  };

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",
        school: "",
        grade: "",
        tshirtSize: "",
      },
    ]);
  };

  const removeParticipant = (index: number) => {
    const updatedParticipants = participants.filter((_, i) => i !== index);
    setParticipants(updatedParticipants);
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const applicationData = {
      participants,
      parent,
      message,
      participantQuestion,
    };

    try {
      setLoading(true);
      await submitAcademicRegistration({
        academic: JSON.stringify(data),
        applicationData: JSON.stringify({
          applicationData,
          userId: userData?.id,
        }),
      });
      // Simulate submission
      console.log("Submitting application data:", applicationData);
      toast.success("Application submitted successfully!");
      router.replace("/academies/greenkidsacademy/registration/thankyou");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Application Form</h2>

      {/* Parent Details */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Parent Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Title</Label>
            <Input
              value={parent.title}
              onChange={(e) => handleParentChange("title", e.target.value)}
              placeholder="Title (Mr., Mrs., etc.)"
              className="py-2"
            />
          </div>
          <div>
            <Label>First Name</Label>
            <Input
              value={parent.firstName}
              onChange={(e) => handleParentChange("firstName", e.target.value)}
              placeholder="First Name"
              className="py-2"
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              value={parent.lastName}
              onChange={(e) => handleParentChange("lastName", e.target.value)}
              placeholder="Last Name"
              className="py-2"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              value={parent.email}
              onChange={(e) => handleParentChange("email", e.target.value)}
              placeholder="Email"
              className="py-2"
            />
          </div>
          <div>
            <Label>Phone</Label>
            <PhoneInput
              value={parent.phone}
              onChange={(e) => handleParentChange("phone", e)}
              placeholder="Phone Number"
            />
          </div>
          <div className="">
            <Label>Relation</Label>
            <Select
              value={parent.relation}
              onValueChange={(value) => handleParentChange("relation", value)}
            >
              <SelectTrigger className="py-2">
                <SelectValue placeholder="Select Relation" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Father",
                  "Mother",
                  "Brother",
                  "Sister",
                  "Grandfather",
                  "Grandmother",
                  "Uncle",
                  "Aunt",
                  "Other",
                ].map((value, index) => (
                  <SelectItem key={index} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label>Country</Label>
            <CountryDropdown
              value={parent.country}
              className="w-full"
              onChange={(value) => handleParentChange("country", value)}
            />
          </div>
          <div className="">
            <Label>City</Label>
            <CityDropdown
              onChange={(value) => handleParentChange("city", value)}
              value={parent.city}
              className="w-full"
              country={parent.country}
            />
          </div>
          <div className="">
            <Label>State</Label>
            <Input
              value={parent.state}
              onChange={(e) => handleParentChange("state", e.target.value)}
            />
          </div>
        </div>

        <Label>Address</Label>
        <Textarea
          value={parent.address}
          onChange={(e) => handleParentChange("address", e.target.value)}
          placeholder="Full Address"
        />
      </div>

      {/* Participants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Participants</h3>
        {participants.map((participant, index) => (
          <div
            key={index}
            className="p-4 border rounded-md flex flex-col gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input
                  value={participant.firstName}
                  onChange={(e) =>
                    handleParticipantChange(index, "firstName", e.target.value)
                  }
                  placeholder="First Name"
                  className="py-2"
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  value={participant.lastName}
                  onChange={(e) =>
                    handleParticipantChange(index, "lastName", e.target.value)
                  }
                  placeholder="Last Name"
                  className="py-2"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label>Gender</Label>
                <Select
                  value={participant.gender}
                  onValueChange={(value) =>
                    handleParticipantChange(index, "gender", value)
                  }
                >
                  <SelectTrigger className="py-2">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Date of Birth</Label>
                <Input
                  type="date"
                  value={participant.dob}
                  onChange={(e) =>
                    handleParticipantChange(index, "dob", e.target.value)
                  }
                  className="py-2"
                />
              </div>

              <div>
                <Label>T-shirt Size</Label>
                <Select
                  value={participant.tshirtSize}
                  onValueChange={(value) =>
                    handleParticipantChange(index, "tshirtSize", value)
                  }
                >
                  <SelectTrigger className="py-2">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xs">XS</SelectItem>
                    <SelectItem value="sm">SM</SelectItem>
                    <SelectItem value="md">MD</SelectItem>
                    <SelectItem value="lg">LG</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 w-full gap-4">
              <div className="">
                <Label>School Name</Label>
                <Input
                  type="test"
                  value={participant.school}
                  onChange={(e) =>
                    handleParticipantChange(index, "school", e.target.value)
                  }
                  className="py-2"
                />
              </div>
              <div className="">
                <Label>Grade</Label>
                <Input
                  type="text"
                  value={participant.grade}
                  onChange={(e) =>
                    handleParticipantChange(index, "grade", e.target.value)
                  }
                  className="py-2"
                />
              </div>
            </div>

            <Button
              variant="destructive"
              onClick={() => removeParticipant(index)}
              disabled={participants.length === 1}
              className="py-2"
            >
              Remove Participant
            </Button>
          </div>
        ))}
        <Button onClick={addParticipant} className="py-2">
          Add Participant
        </Button>
      </div>

      {/* Other Details */}
      <div>
        <Label>Message</Label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Any additional message"
        />
      </div>

      <div>
        <Label>Participant Contact Question</Label>
        <Textarea
          value={participantQuestion}
          onChange={(e) => setParticipantQuestion(e.target.value)}
          placeholder="Contact Question for Participants"
        />
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit} disabled={loading} className="py-3">
        Submit Application
      </Button>
    </div>
  );
}

export default ApplyForm;
