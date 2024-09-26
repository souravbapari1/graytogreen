import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ParticipantApplyForm from "./froms/ParticipantApplyForm";

function ApplyForm() {
  return (
    <div>
      <p className="font-semibold mb-2">
        Register As <span className="text-red-600 text-xl font-bold ">*</span>
      </p>
      <Select>
        <SelectTrigger className="w-full p-5 shadow-none font-bold">
          <SelectValue placeholder="Participant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null" disabled>
            - Select -
          </SelectItem>
          <SelectItem value="Participant">Participant (Child)</SelectItem>
          <SelectItem value="Chaperone">Chaperone</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
          <SelectItem value="Teacher">Teacher</SelectItem>
          <SelectItem value="Moderator">Moderator</SelectItem>
          <SelectItem value="Co-Moderator">Co-Moderator</SelectItem>
        </SelectContent>
      </Select>
      <br />
      <ParticipantApplyForm />
    </div>
  );
}

export default ApplyForm;
