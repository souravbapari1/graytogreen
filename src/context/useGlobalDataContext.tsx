// MyContext.tsx
import { Country, CountryList, getCountryCity } from "@/request/fetch/country";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the type for the context value
interface MyContextType {
  countryCity: Country[];
  map: mapboxgl.Map | null;
  setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | null>>;
}

// Create the context with a default value (it can be null initially)
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [countryCity, setCountryCity] = useState<Country[]>([]);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  const loadCountryCity = async () => {
    const data = getCountryCity();
    setCountryCity(data);
  };

  useEffect(() => {
    loadCountryCity();
  }, []);

  return (
    <MyContext.Provider value={{ countryCity, map, setMap }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalDataContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a GlobalContextProvider");
  }
  return context;
};
