"use client";
import { selectIndustryItems } from "@/app/auth/signup/CompanyForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { data } from "@/data/citycountry.json";
import { Company, UserItem } from "@/interface/user";
import { client, genPbFiles } from "@/request/actions";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { useCompanyProfileState } from "./companyProfileState";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
function CompanyProfile({
  user,
  session,
}: {
  user: UserItem;
  session: Session;
}) {
  const { update } = useSession();
  const [loading, setLoading] = useState(false);
  const [cityList, setCityList] = useState<string[]>([]);
  const state = useCompanyProfileState();
  useEffect(() => {
    state.initCompanySate(user, user.expand!.company!);
  }, [user]);

  useEffect(() => {
    const countryData = data.find(
      (item) => item.country === state.state.country
    );
    // console.log("rebuild");
    setCityList(countryData ? countryData.cities : []);
  }, [state.state.country]);

  const onSave = async () => {
    toast.loading("Updating profile...");
    setLoading(true);
    try {
      const updateUser = client
        .patch(`/api/collections/users/records/${user.id}`)
        .form({
          breef: state.state.breef,
          linkedin: state.state.linkedin,
          twitter: state.state.twitter,
          instagram: state.state.instagram,
          youtube: state.state.youtube,
          targetTrees: parseInt(state.state.targetTrees),
          targetPlastic: parseInt(state.state.targetPlastic),
          first_name: state.state.first_name,
          last_name: state.state.last_name,
          mobile_no: state.state.mobile_no,
          country: state.state.country,
          city: state.state.city,
          gender: state.state.gender,
          socail_state: state.state.position,
        });

      if (state.state.file) {
        updateUser.append("avatar", state.state.file);
      }

      const company = client
        .patch(`/api/collections/companies/records/${user.expand!.company!.id}`)
        .form({
          mr_ms: state.state.mr_ms,
          application_name:
            state.state.first_name + " " + state.state.last_name,
          position: state.state.position,
          company_name: state.state.companyName,
          website: state.state.website,
          Industry_type: state.state.industry,
          size_hint: state.state.companySize,
          city: state.state.city,
          country: state.state.country,
          about_us: state.state.heardFrom,
          resonses: JSON.stringify(state.state.reasons),
          map_location: state.state.location,
          address: state.state.address,
        });

      const res = await Promise.all([
        updateUser.send<UserItem>({ Authorization: session.user.token }),
        company.send<Company>({ Authorization: session.user.token }),
      ]);
      const userData = res[0];
      await update({
        data: {
          ...session.user,
          name: userData.first_name + " " + userData.last_name,
          avatar: genPbFiles(userData, state.state.file),
        },
      });
      toast.dismiss();
      toast.success("Profile updated.");
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto mb-10">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files![0];
            state.setCompanyProfileState("file", file);
          }}
          className="hidden"
          id="avatar-upload"
        />
        <label htmlFor="avatar-upload">
          <Avatar className="w-36 h-36 cursor-pointer border-2 p-1">
            <AvatarImage
              className="object-cover rounded-full"
              src={
                state.state.file
                  ? URL.createObjectURL(state.state.file)
                  : genPbFiles(user, user.avatar) ||
                    "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
        </label>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 ">
        <div className="w-full">
          <Label>Mr./Ms.</Label>
          <Select
            value={state.state.mr_ms}
            onValueChange={(e) => {
              state.setCompanyProfileState("mr_ms", e);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="Mr." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr.">Mr.</SelectItem>
              <SelectItem value="Mis.">Mis.</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label>Company Name</Label>
          <Input
            name="companyName"
            value={state.state.companyName}
            className="w-full p-6 mt-2 shadow-none"
            onChange={(e) => {
              state.setCompanyProfileState("companyName", e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label>Email ID</Label>
          <Input
            name="email"
            value={state.state.email}
            className="w-full p-6 mt-2 shadow-none"
            type="email"
            readOnly
            disabled
            onChange={(e) => {
              state.setCompanyProfileState("email", e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label>Mobile No.</Label>
          <Input
            name="mobile_no"
            value={state.state.mobile_no}
            type="number"
            onChange={(e) => {
              state.setCompanyProfileState("mobile_no", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Country</Label>

          <Select
            name="country"
            value={state.state.country}
            onValueChange={(v) => {
              state.setCompanyProfileState("country", v);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="country" />
            </SelectTrigger>
            <SelectContent>
              {data.map((country, i) => (
                <SelectItem
                  key={country.country + "-country-" + i}
                  value={country.country}
                >
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
            value={state.state.city}
            onValueChange={(e) => {
              state.setCompanyProfileState("city", e);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder={state.state.city || "city"} />
            </SelectTrigger>
            <SelectContent>
              {cityList.map((city, i) => (
                <SelectItem key={city + "-city-" + i} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>Company/ Organization Size *</Label>

          <Select
            name="company_size"
            value={state.state.companySize}
            onValueChange={(v) => {
              state.setCompanyProfileState("companySize", v);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Start up Company">Start up Company</SelectItem>
              <SelectItem value="Small Facility (1-49 Employees)">
                Small Facility (1-49 Employees)
              </SelectItem>
              <SelectItem value="Medium Facility (50-249 Employees)">
                Medium Facility (50-249 Employees)
              </SelectItem>
              <SelectItem value="Large Facility (250 Employees and More)">
                Large Facility (250 Employees and More)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label>Industry Type</Label>
          <Select
            name="industry_type"
            value={state.state.industry}
            onValueChange={(v) => {
              state.setCompanyProfileState("industry", v);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              {selectIndustryItems.map((item, i) => (
                <SelectItem
                  key={item.value + "-industry-" + i}
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>Address</Label>
          <Input
            name="Address"
            value={state.state.address}
            className="w-full p-6 mt-2 shadow-none"
            onChange={(e) => {
              state.setCompanyProfileState("address", e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label>Map Location</Label>
          <Input
            name="Map Location"
            value={state.state.location}
            className="w-full p-6 mt-2 shadow-none"
            onChange={(e) => {
              state.setCompanyProfileState("location", e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label>Reasons</Label>
          <MultiSelect
            className="w-full min-h-12 mt-2 shadow-none"
            name="reasons"
            value={state.state.reasons}
            defaultValue={state.state.reasons}
            onValueChange={(v) => {
              state.setCompanyProfileState("reasons", v);
            }}
            options={[
              {
                label: "Start up Company",
                value: "Start up Company",
              },
              {
                label: "Small Facility (1-49 Employees)",
                value: "Small Facility (1-49 Employees)",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <Label>Contact Person First Name</Label>
          <Input
            name="first_name"
            value={state.state.first_name}
            onChange={(e) => {
              state.setCompanyProfileState("first_name", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Contact Person Last Name</Label>
          <Input
            name="last_name"
            value={state.state.last_name}
            onChange={(e) => {
              state.setCompanyProfileState("last_name", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Position</Label>
          <Input
            name="position"
            value={state.state.position}
            onChange={(e) => {
              state.setCompanyProfileState("position", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Gender</Label>
          <Select
            name="gender"
            value={state.state.gender}
            onValueChange={(e) => {
              state.setCompanyProfileState("gender", e);
            }}
          >
            <SelectTrigger className="w-full p-6 mt-2 shadow-none">
              <SelectValue placeholder="gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>Website</Label>
          <Input
            name="website"
            value={state.state.website}
            onChange={(e) => {
              state.setCompanyProfileState("website", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div>
          <Label>Linkedin</Label>
          <Input
            name="linkedin"
            value={state.state.linkedin}
            onChange={(e) => {
              state.setCompanyProfileState("linkedin", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div>
          <Label>Twitter</Label>
          <Input
            name="twitter"
            value={state.state.twitter}
            onChange={(e) => {
              state.setCompanyProfileState("twitter", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div>
          <Label>Instagram</Label>
          <Input
            name="instagram"
            value={state.state.instagram}
            onChange={(e) => {
              state.setCompanyProfileState("instagram", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div>
          <Label>Youtube</Label>
          <Input
            name="youtube"
            value={state.state.youtube}
            onChange={(e) => {
              state.setCompanyProfileState("youtube", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>
        <div className="w-full">
          <Label>Target Trees</Label>
          <Input
            type="number"
            name="targetTrees"
            value={state.state.targetTrees}
            onChange={(e) => {
              state.setCompanyProfileState("targetTrees", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="w-full">
          <Label>Target Plastic To be remove (kg)</Label>
          <Input
            type="number"
            name="targetPlastic"
            value={state.state.targetPlastic}
            onChange={(e) => {
              state.setCompanyProfileState("targetPlastic", e.target.value);
            }}
            className="w-full p-6 mt-2 shadow-none"
          />
        </div>

        <div className="lg:col-span-4">
          <Label>From where you heard about us *</Label>
          <Textarea
            value={state.state.breef}
            onChange={(e) => {
              state.setCompanyProfileState("breef", e.target.value);
            }}
            name="description"
            placeholder="Description"
            className="shadow-none h-36 mt-2"
          />
        </div>
      </div>
      <br />
      <Button
        disabled={loading}
        className="mb-20"
        onClick={() => {
          if (state.validateUserData(state.state)) {
            onSave();
          }
        }}
      >
        Update Profile
      </Button>
      <br />
    </div>
  );
}

export default CompanyProfile;