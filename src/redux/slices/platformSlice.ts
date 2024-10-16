import { ProjectItem } from "@/interface/project";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlatformState {
  dataSet: ProjectItem[];
  filter: ProjectItem[];
  selectedProject?: ProjectItem;
  selectedProjectType?: string;
}

const initialState: PlatformState = {
  dataSet: [],
  selectedProject: undefined,
  filter: [],
  selectedProjectType: undefined,
};

const platformSlice = createSlice({
  name: "platformSlice",
  initialState,
  reducers: {
    setPlatformData: (state, action: PayloadAction<ProjectItem[]>) => {
      state.dataSet = action.payload;
    },

    setPlatformFilter: (state, action: PayloadAction<ProjectItem[]>) => {
      state.filter = action.payload;
    },

    setSelectedProject: (
      state,
      action: PayloadAction<{
        project?: ProjectItem;
        type?: string;
      }>
    ) => {
      state.selectedProject = action.payload.project;
      state.selectedProjectType = action.payload.type;
    },

    unselectPlatformProject: (state) => {
      state.selectedProject = undefined;
      state.selectedProjectType = undefined;
    },
  },
});

export const {
  setPlatformData,
  setSelectedProject,
  unselectPlatformProject,
  setPlatformFilter,
} = platformSlice.actions;

export default platformSlice.reducer;
