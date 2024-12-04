"use client";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import React, { lazy, memo, Suspense } from "react";

const fallback = (
  <div style={{ background: "#ddd", width: 10, height: 10, borderRadius: 4 }} />
);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}
export const iconsList = Object.keys(
  dynamicIconImports
) as (keyof typeof dynamicIconImports)[];

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(
    dynamicIconImports[name as keyof typeof dynamicIconImports]
  );

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default memo(Icon);
