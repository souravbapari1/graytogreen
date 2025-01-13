import { FIleData } from "@/request/fetch/uploadFile";
import toast from "react-hot-toast";
import { create } from "zustand";

export interface EventState {
  events: EventsList[];
  addEvent: () => void;
  removeEvent: (index: number) => void;
  updateEvent: (
    index: number,
    field: keyof EventsList,
    value: string | FIleData | null
  ) => void;

  validateEvents: (state: EventsList[]) => boolean;

  resetEvents: () => void;
  addFile: (index: number, file: FIleData) => void;
  removeFile: (index: number, imageId: number) => void;
}

export const useReportEventState = create<EventState>((set) => ({
  events: [
    {
      activates: "",
      file: [],
      outcomes: "",
      title: "",
    },
  ],

  addEvent: () => {
    set((state) => ({
      events: [
        ...state.events,
        { title: "", file: null, outcomes: "", activates: "" },
      ],
    }));
  },

  removeEvent: (index: number) => {
    set((state) => ({
      events: state.events.filter((_, i) => i !== index),
    }));
  },

  updateEvent: (index: number, field: keyof EventsList, value: any) => {
    set((state) => ({
      events: state.events.map((event, i) =>
        i === index ? { ...event, [field]: value } : event
      ),
    }));
  },

  addFile: (index: number, file: FIleData) => {
    set((state) => ({
      events: state.events.map((event, i) =>
        i === index ? { ...event, file: [...(event.file || []), file] } : event
      ),
    }));
  },

  removeFile: (index: number, imageId: number) => {
    set((state) => ({
      events: state.events.map((event, i) =>
        i === index
          ? {
              ...event,
              file: event.file?.filter((file) => file.id !== imageId) || [],
            }
          : event
      ),
    }));
  },

  validateEvents: (state: EventsList[]) => {
    const requiredFields: Array<keyof EventsList> = [
      "title",
      "activates",
      "outcomes",
      "file",
    ];

    for (const event of state) {
      for (const field of requiredFields) {
        if (!event[field]) {
          toast.error(`Event ${field.replace("_", " ")} is required.`);
          return false;
        }
      }
    }
    return true;
  },

  resetEvents: () => {
    set((state) => ({
      events: [
        {
          activates: "",
          file: null,
          outcomes: "",
          title: "",
        },
      ],
    }));
  },
}));

export interface ChallengeState {
  challenges: Challenge[];
  addChallenge: () => void;
  removeChallenge: (index: number) => void;
  updateChallenge: (index: number, field: keyof Challenge, value: any) => void;
  validateChallenge: (state: ChallengeState["challenges"]) => boolean;
  resetChallenge: () => void;
  addChallengeFile: (index: number, file: FIleData) => void;
  removeChallengeFile: (index: number, imageId: number) => void;
}

export const useReportChallengeState = create<ChallengeState>((set) => ({
  challenges: [
    {
      whatYouDid: "",
      file: null,
      title: "",
    },
  ],

  addChallenge: () => {
    set((state) => ({
      challenges: [
        ...state.challenges,
        { title: "", file: null, whatYouDid: "" },
      ],
    }));
  },

  removeChallenge: (index: number) => {
    set((state) => ({
      challenges: state.challenges.filter((_, i) => i !== index),
    }));
  },

  updateChallenge: (index: number, field: keyof Challenge, value: string) => {
    set((state) => ({
      challenges: state.challenges.map((challenge, i) =>
        i === index ? { ...challenge, [field]: value } : challenge
      ),
    }));
  },

  validateChallenge: (state: ChallengeState["challenges"]) => {
    const requiredFields: Array<keyof Challenge> = ["title", "whatYouDid"];

    for (const challenge of state) {
      for (const field of requiredFields) {
        if (!challenge[field]) {
          toast.error(`Challenge ${field.replace("_", " ")} is required.`);
          return false;
        }
      }
    }
    return true;
  },

  resetChallenge: () => {
    set((state) => ({
      challenges: [
        {
          whatYouDid: "",
          file: null,
          title: "",
        },
      ],
    }));
  },

  addChallengeFile: (index: number, file: FIleData) => {
    set((state) => ({
      challenges: state.challenges.map((challenge, i) =>
        i === index
          ? { ...challenge, file: [...(challenge.file || []), file] }
          : challenge
      ),
    }));
  },

  removeChallengeFile: (index: number, imageId: number) => {
    set((state) => ({
      challenges: state.challenges.map((challenge, i) =>
        i === index
          ? {
              ...challenge,
              file: challenge.file?.filter((file) => file.id !== imageId) || [],
            }
          : challenge
      ),
    }));
  },
}));

export interface EventStates {
  summary: string;
  eventsList: EventsList[];
  challenges: Challenge[];
  nextPlan: string;
  reportKey: string;
  user: string;
}

export interface EventsList {
  title: string;
  activates: string;
  outcomes: string;
  file: FIleData[] | null;
}

export interface Challenge {
  title: string;
  whatYouDid: string;
  file: FIleData[] | null;
}
