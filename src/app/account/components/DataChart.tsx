"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  donate: {
    label: "Donate",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartViewComponent({ chartData }: { chartData: any }) {
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
          dot={false}
        />
        {/* <Line
          dataKey="donate"
          type="monotone"
          stroke="var(--color-mobile)"
          strokeWidth={2}
          dot={false}
        /> */}
      </LineChart>
    </ChartContainer>
  );
}
