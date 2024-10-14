import { ProjectDataType } from "@/interface/project";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlatformState {
  dataSet: ProjectDataType[];
  filter: ProjectDataType[];
  selectedProject?: ProjectDataType;
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
    setPlatformData: (state, action: PayloadAction<ProjectDataType[]>) => {
      state.dataSet = action.payload;
    },

    setSelectedProject: (
      state,
      action: PayloadAction<{
        project?: ProjectDataType;
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

export const { setPlatformData, setSelectedProject, unselectPlatformProject } =
  platformSlice.actions;

export default platformSlice.reducer;
