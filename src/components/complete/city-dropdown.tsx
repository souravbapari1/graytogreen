"use client";

import { ChevronDown, Search } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

export function CityDropdown({
  onChange,
  value,
  country,
  className,
}: {
  value: string;
  onChange: (e: string) => void;
  country?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState<
    {
      id: number;
      name: string;
      cityId: number;
    }[]
  >();

  const searchCity = useMutation({
    mutationKey: ["city"],
    mutationFn: async () => {
      const data = await fetch(
        `https://country-city.grey-to-green.com/city/${country}?search=` +
          search
      );
      return await data.json();
    },
    onSuccess(data) {
      setData(data);
    },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() && country) {
        searchCity.mutate();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={!country}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[400px] justify-between", className)}
          ref={ref}
        >
          {value ? value : "Select city..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] p-0"
        style={{ width: ref.current?.clientWidth }}
      >
        <Command>
          <div
            className="flex items-center border-b px-3"
            cmdk-input-wrapper=""
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              autoComplete="off"
              placeholder="Search City"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={cn(
                "flex h-11 w-full  focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-offset-0  rounded-md  border-none bg-transparent px-2 py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              )}
            />
          </div>
          <CommandList>
            <CommandEmpty>No City Found.</CommandEmpty>
            <CommandGroup>
              {data?.map((city) => (
                <CommandItem
                  key={city.id}
                  value={city.name}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {city.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
