import { create } from "zustand";

interface FilterState {
  filters: {
    types: string[];
    mainInterventions: string[];
    countries: string[];
    cities: string[];
    unitTypes: string[];
    sdgs: string[];
    accStandards: string[];
  };
  topProjects: boolean;
  search: string;
  toggleFilter: (category: keyof FilterState["filters"], value: string) => void;
  clearAllFilters: () => void;
  setTopProjects: (value: boolean) => void;
  setSearch: (value: string) => void;
}

export const useFilterState = create<FilterState>((set) => ({
  topProjects: false,
  search: "",
  filters: {
    types: [],
    mainInterventions: [],
    countries: [],
    cities: [],
    unitTypes: [],
    sdgs: [],
    accStandards: [],
  },
  setSearch: (value: string) => {
    set({ search: value });
  },
  setTopProjects: (value: boolean) => {
    set({ topProjects: value });
  },

  toggleFilter: (category: keyof FilterState["filters"], value: string) => {
    set((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [category]: prev.filters[category].includes(value)
          ? prev.filters[category].filter((item) => item !== value)
          : [...prev.filters[category], value],
      },
    }));
  },
  clearAllFilters: () => {
    set({
      filters: {
        types: [],
        mainInterventions: [],
        countries: [],
        cities: [],
        unitTypes: [],
        sdgs: [],
        accStandards: [],
      },
      search: "",
      topProjects: false,
    });
  },
}));
