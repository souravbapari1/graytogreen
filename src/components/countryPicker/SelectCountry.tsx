"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";

function SelectCountry({
  className,
  props,
  select,
}: {
  className?: string;
  props?: SelectPrimitive.SelectProps;
  select?: SelectPrimitive.SelectValueProps;
}) {
  const country = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const res = await fetch("/api/country");
      const data = await res.json();
      return data as string[];
    },
  });
  return (
    <Select {...props}>
      <SelectTrigger className={className}>
        <SelectValue {...select} />
      </SelectTrigger>
      <SelectContent>
        {country.data?.map((country) => (
          <SelectItem key={country} value={country}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default memo(SelectCountry);
