"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { data } from "@/data/citycountry.json";
import { UserItem } from "@/interface/user";
import { client, extractErrors, genPbFiles } from "@/request/actions";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle, Send } from "lucide-react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
const social_options = [
  "Student",
  "Graduated",
  "Job Seeker",
  "Private Sector Employee",
  "Government Employee",
  "Entrepreneur",
  "other",
];

function ManageProfile({
  user,
  session,
  ambassadorRequestState,
}: {
  user: UserItem;
  session: Session;
  ambassadorRequestState: "pending" | "approved" | "reject" | null;
}) {
  const { update } = useSession();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    username: user.username,
    emailVisibility: user.emailVisibility,
    password: "",
    passwordConfirm: "",
    oldPassword: "",
    first_name: user.first_name,
    last_name: user.last_name,
    mobile_no: user.mobile_no,
    country: user.country,
    city: user.city,
    gender: user.gender,
    dob: user.dob,
    socail_state: user.socail_state,
    breef: user.breef,
    whyYouHere: user.whyYouHere,
    linkedin: user.linkedin,
    twitter: user.twitter,
    instagram: user.instagram,
    youtube: user.youtube,
    targetTrees: user.targetTrees,
    targetPlastic: user.targetPlastic,
    location: user.location,
    othersState: user.socail_state,
    targetCo2Save: user.targetCo2Save,
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const validateUserData = (data: Record<string, any>): boolean => {
    const requiredFields = [
      "first_name",
      "last_name",
      "mobile_no",
      "country",
      "city",
      "gender",
      "socail_state",
      "dob",

      "targetTrees",
      "targetPlastic",
    ];

    for (let field of requiredFields) {
      if (!data[field]) {
        toast.error(`"${field.replace("_", " ")}" is required.`);
        return false;
      }
    }

    return true;
  };

  const getCountryCities = useCallback(() => {
    const countryData = data.find((item) => item.country === state.country);
    return countryData ? countryData.cities : [];
  }, [state.country]);

  const onSave = async () => {
    if (validateUserData(state)) {
      setLoading(true);
      try {
        let payload = client
          .patch(`/api/collections/users/records/${user.id}`)
          .form(state);

        if (selectedImage) {
          payload.append("avatar", selectedImage);
        }
        const updateUser = await payload.send<UserItem>({
          Authorization: session.user.token,
        });
        await update({
          ...session,

          user: { ...session.user, image: updateUser.avatar },
        });
        toast.success("Profile updated successfully.");
      } catch (error: any) {
        console.log(error);
        const errors = extractErrors(error.response);
        toast.error(errors[0]);
      } finally {
        setLoading(false);
      }
    }
  };

  const sendAmbassadorRequest = useMutation({
    mutationFn: async () => {
      const res = await client
        .post("/api/collections/ambassador_requests/records")
        .json({
          user: user.id,
          status: "pending",
        })
        .send();
      return res;
    },
    onSuccess: () => {
      toast.success("Ambassador Request Sent Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error Sending Ambassador Request");
    },
  });

  return (
    <div className="flex justify-center flex-col items-center w-full max-w-[800px] h-full mx-auto">
      <div className="mx-auto">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="avatar-upload"
        />
        <label htmlFor="avatar-upload">
          <Avatar className="w-36 h-36 cursor-pointer">
            <AvatarImage
              className="object-cover"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : genPbFiles(user, user.avatar) ||
                    "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </label>
      </div>
      <div className="flex gap-2 mt-8">
        <Badge variant="secondary" className="shadow-none text-xs capitalize">
          Level: {user.level || "N/A"}
        </Badge>

        <Badge variant="outline" className="shadow-none text-xs capitalize">
          {user.user_type || "N/A"}
        </Badge>
      </div>
      {/* ///////////////////////////// */}

      {ambassadorRequestState == null && !sendAmbassadorRequest.data && (
        <Button
          size="sm"
          variant="default"
          className="flex gap-4 shadow-none mt-4"
          onClick={() => sendAmbassadorRequest.mutate()}
          disabled={sendAmbassadorRequest.isPending}
        >
          {sendAmbassadorRequest.isPending && (
            <LoaderCircle size={15} className="mr-3 animate-spin" />
          )}
          {!sendAmbassadorRequest.isPending && <Send size={14} />}
          Request Ambassador
        </Button>
      )}

      {ambassadorRequestState == "pending" && (
        <Button
          size="sm"
          variant="secondary"
          className="flex gap-4 shadow-none mt-4"
          disabled
        >
          <Send size={14} />
          Ambassador Request Pending
        </Button>
      )}
      {ambassadorRequestState == "reject" && (
        <Button
          size="sm"
          variant="destructive"
          className="flex gap-4 shadow-none mt-4"
          disabled
        >
          <BiErrorCircle size={14} />
          Ambassador Request Rejected
        </Button>
      )}
      {/* //////////////////////////////////// */}
      <div className="grid lg:grid-cols-2 mt-16 md:gap-8 gap-4 w-full">
        <div className="w-full">
          <Label>First Name</Label>
          <Input
            name="first_name"
            value={state.first_name}
            onChange={handleChange}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Last Name</Label>
          <Input
            name="last_name"
            value={state.last_name}
            onChange={handleChange}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full">
          <Label>Email ID</Label>
          <Input
            name="email"
            value={user.email}
            readOnly
            disabled
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full">
          <Label>Mobile No.</Label>
          <Input
            name="mobile_no"
            value={state.mobile_no}
            onChange={handleChange}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full">
          <Label>Country</Label>

          <Select
            name="country"
            value={state.country}
            onValueChange={(v) => {
              setState({ ...state, country: v });
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="country" />
            </SelectTrigger>
            <SelectContent>
              {data.map((country) => (
                <SelectItem key={country.country} value={country.country}>
                  {country.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>City</Label>

          <Select
            name="city"
            value={state.city}
            onValueChange={(e) => {
              setState({ ...state, city: e });
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder={state.city || "city"} />
            </SelectTrigger>
            <SelectContent>
              {getCountryCities().map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>Gender</Label>

          <Select
            value={state.gender}
            onValueChange={(e) => {
              setState({ ...state, gender: e });
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">male</SelectItem>
              <SelectItem value="female">female</SelectItem>
              <SelectItem value="others">others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>DOB</Label>
          <Input
            name="dob"
            type="date"
            value={state.dob}
            onChange={handleChange}
            className="w-full block justify-center items-center p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full lg:col-span-2">
          <Label>Social State</Label>

          <Select
            name="socail_state"
            value={state.socail_state}
            onValueChange={(e) => {
              setState({ ...state, socail_state: e });
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="social state" />
            </SelectTrigger>
            <SelectContent>
              {social_options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {!social_options.includes(state.socail_state) ||
        state.socail_state === "other" ? (
          <div className="w-full lg:col-span-2">
            <Label>Enter Your Social State</Label>
            <Input
              name="othersState"
              value={state.othersState}
              onChange={(e) => {
                setState({ ...state, othersState: e.target.value });
              }}
              className="w-full p-6 mt-2 shadow-none "
            />
          </div>
        ) : null}
        <div className="lg:col-span-2">
          <div className="">
            <Label>Breef</Label>
            <Textarea
              name="breef"
              value={state.breef}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
              placeholder="Breef"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <Label>How did you hear about the Grey to Green platform?</Label>
            <Select
              name="whyYouHere"
              onValueChange={(e) => {
                setState({ ...state, whyYouHere: e });
              }}
            >
              <SelectTrigger className="w-full p-6 mt-2 shadow-none ">
                <SelectValue placeholder="Select marketing source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social media">
                  Social Media (LinkedIn, Facebook, Instagram, etc.)
                </SelectItem>
                <SelectItem value="Search engine">
                  Search Engine (Google, Bing, etc.)
                </SelectItem>
                <SelectItem value="Email newsletter">
                  Email Newsletter
                </SelectItem>
                <SelectItem value="Online ads">
                  Online Ads (Google Ads, Facebook Ads, etc.)
                </SelectItem>
                <SelectItem value="Blogs or articles">
                  Blogs or Articles
                </SelectItem>
                <SelectItem value="Affiliate links">Affiliate Links</SelectItem>
                <SelectItem value="Customer review sites">
                  Customer Review Sites
                </SelectItem>
                <SelectItem value="Promotional videos">
                  Promotional Videos
                </SelectItem>
                <SelectItem value="Television">Television</SelectItem>
                <SelectItem value="Newspaper">Newspaper</SelectItem>
                <SelectItem value="Podcast">Podcast</SelectItem>
                <SelectItem value="Webinar">Webinar</SelectItem>
                <SelectItem value="Corporate outing/social">
                  Corporate Outing/Social
                </SelectItem>
                <SelectItem value="Networking event">
                  Networking Event
                </SelectItem>
                <SelectItem value="Training seminar">
                  Training Seminar
                </SelectItem>
                <SelectItem value="Ambassador">Ambassador</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full lg:col-span-2">
          <Label>Enter Location (url)</Label>
          <Input
            type="url"
            name="location"
            value={state.location}
            onChange={handleChange}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full lg:col-span-2 grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-4">
          <div>
            <Label>Linkedin</Label>
            <Input
              name="linkedin"
              value={state.linkedin}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>
          <div>
            <Label>Twitter</Label>
            <Input
              name="twitter"
              value={state.twitter}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>
          <div>
            <Label>Instagram</Label>
            <Input
              name="instagram"
              value={state.instagram}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>
          <div>
            <Label>Youtube</Label>
            <Input
              name="youtube"
              value={state.youtube}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-3 gap-5">
          <div className="w-full">
            <Label>Target Trees</Label>
            <Input
              type="number"
              name="targetTrees"
              value={state.targetTrees}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>

          <div className="w-full">
            <Label>Target Plastic To be remove (kg)</Label>
            <Input
              type="number"
              name="targetPlastic"
              value={state.targetPlastic}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>

          <div className="w-full">
            <Label>Target CO2 Save (kg)</Label>
            <Input
              type="number"
              name="targetCo2Save"
              value={state.targetCo2Save}
              onChange={handleChange}
              className="w-full p-6 mt-2 shadow-none"
            />
          </div>
        </div>
      </div>
      <Button
        disabled={loading}
        onClick={onSave}
        className="mt-10 w-full p-6 shadow-none mb-20"
      >
        {loading && <LoaderCircle size={15} className="mr-3 animate-spin" />}
        Saving Profile
      </Button>
    </div>
  );
}

export default ManageProfile;
