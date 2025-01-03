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
import { Send } from "lucide-react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
function ManageProfile({
  user,
  session,
}: {
  user: UserItem;
  session: Session;
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
    linkedin: user.linkedin,
    twitter: user.twitter,
    instagram: user.instagram,
    youtube: user.youtube,
    targetTrees: user.targetTrees,
    targetPlastic: user.targetPlastic,
    location: user.location,
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
        <Badge variant="secondary" className="shadow-none text-xs">
          Level: {user.level || "N/A"}
        </Badge>

        <Badge variant="outline" className="shadow-none text-xs">
          {user.user_type || "N/A"}
        </Badge>
      </div>
      {user.user_type == "individual" && (
        <Button
          size="sm"
          variant="default"
          className="flex gap-4 shadow-none mt-4"
        >
          <Send size={14} />
          Request Ambassador
        </Button>
      )}

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
          <Label>Social Stat:</Label>

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
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="graduated">Graduated</SelectItem>
              <SelectItem value="job seeker">Job Seeker</SelectItem>
              <SelectItem value="private sector employee">
                Privet sector emolpyee
              </SelectItem>
              <SelectItem value="gov">gov</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:col-span-2">
          <Label>Brief</Label>
          <Textarea
            name="breef"
            value={state.breef}
            onChange={handleChange}
            className="w-full p-6 mt-2 shadow-none"
          />
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
      </div>
      <Button
        disabled={loading}
        onClick={onSave}
        className="mt-10 w-full p-6 shadow-none mb-20"
      >
        Save Profile
      </Button>
    </div>
  );
}

export default ManageProfile;
