"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useSession } from "next-auth/react";
import { UserItem } from "@/interface/user";

const chartConfig = {
  donate: {
    label: "Donate",
    color: "hsl(var(--chart-1))",
  },
  fund: {
    label: "Add Funds",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartViewComponent({
  chartData,
  user,
}: {
  chartData: any;
  user: UserItem;
}) {
  const session = useSession();
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="donate"
          type="monotone"
          stroke="green"
          strokeWidth={2}
          dot={true}
        />
        {user?.user_type == "partner" && (
          <Line
            dataKey="fund"
            type="monotone"
            stroke="orange"
            strokeWidth={2}
            dot={true}
          />
        )}
      </LineChart>
    </ChartContainer>
  );
}
