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
  filterBy: null | "PLTH" | "PHTL" | "OLDTONEW" | "NEWTOOLD" | "ATZ" | "ZTA";
  minPrice: number;
  maxPrice: number;
  mapCenter: null | { lat: number; lng: number };
  toggleFilter: (category: keyof FilterState["filters"], value: string) => void;
  clearAllFilters: () => void;
  setTopProjects: (value: boolean) => void;
  setSearch: (value: string) => void;
  setFilterBy: (
    value: null | "PLTH" | "PHTL" | "OLDTONEW" | "NEWTOOLD" | "ATZ" | "ZTA"
  ) => void;
  setMapCenter: (value: null | { lat: number; lng: number }) => void;

  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}

export const useFilterState = create<FilterState>((set) => ({
  topProjects: false,
  search: "",
  maxPrice: 100,
  minPrice: 0,
  filters: {
    types: [],
    mainInterventions: [],
    countries: [],
    cities: [],
    unitTypes: [],
    sdgs: [],
    accStandards: [],
  },
  filterBy: null,
  mapCenter: null,
  setSearch: (value: string) => {
    set({ search: value });
  },
  setTopProjects: (value: boolean) => {
    set({ topProjects: value });
  },

  setMinPrice: (value: number) => {
    set({ minPrice: value });
  },
  setMaxPrice: (value: number) => {
    set({ maxPrice: value });
  },

  setFilterBy: (
    value: null | "PLTH" | "PHTL" | "OLDTONEW" | "NEWTOOLD" | "ATZ" | "ZTA"
  ) => {
    set({ filterBy: value });
  },
  setMapCenter(value) {
    set({ mapCenter: value });
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
      minPrice: 0,
      search: "",
      topProjects: false,
      filterBy: null,
    });
  },
}));
