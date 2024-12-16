"use client";

import React, { memo, useState, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";

const ITEMS_PER_LOAD = 50;

const SelectCity = ({
  className,
  props,
  select,
  country,
}: {
  className?: string;
  props?: SelectPrimitive.SelectProps;
  select?: SelectPrimitive.SelectValueProps;
  country?: string;
}) => {
  const { data: citydata = [] } = useQuery<string[]>({
    queryKey: ["country", country],
    queryFn: async () => {
      if (!country) return [];
      const res = await fetch("/api/country?name=" + country);
      if (!res.ok) throw new Error("Failed to fetch countries");
      return res.json();
    },
    enabled: !!country,
    staleTime: 1000 * 60 * 5, // Cache results for 5 minutes
  });

  // State to manage lazy loading of items
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    // Reset visible items when the country changes
    setVisibleCount(ITEMS_PER_LOAD);
  }, [country]);

  // Compute visible items
  const visibleCities = useMemo(
    () => citydata.slice(0, visibleCount),
    [citydata, visibleCount]
  );

  // Handle lazy load trigger
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, citydata.length));
  };

  return (
    <Select disabled={!country} {...props}>
      <SelectTrigger className={className}>
        <SelectValue {...props} />
      </SelectTrigger>
      <SelectContent>
        {visibleCities.map((city, index) => (
          <SelectItem key={city + "-city" + index} value={city}>
            {city}
          </SelectItem>
        ))}
        {visibleCount < citydata.length && (
          <div
            onClick={handleLoadMore}
            className="cursor-pointer text-center text-blue-500 p-2"
          >
            Load More
          </div>
        )}
      </SelectContent>
    </Select>
  );
};

SelectCity.displayName = "SelectCity";

export default memo(SelectCity);
