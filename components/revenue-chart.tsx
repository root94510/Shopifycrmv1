"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12 hours ago", revenue: 1200, orders: 45 },
  { time: "10 hours ago", revenue: 1800, orders: 62 },
  { time: "8 hours ago", revenue: 2400, orders: 78 },
  { time: "6 hours ago", revenue: 1900, orders: 55 },
  { time: "4 hours ago", revenue: 2200, orders: 70 },
  { time: "2 hours ago", revenue: 2800, orders: 88 },
  { time: "Now", revenue: 3200, orders: 95 },
];

export function RevenueChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Revenue</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">$24,589</span>
            <span className="text-sm font-medium text-chart-4">+12.5%</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-1" />
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="text-sm text-muted-foreground">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 18%)" />
            <XAxis
              dataKey="time"
              stroke="hsl(0, 0%, 45%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(0, 0%, 45%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 7%)",
                border: "1px solid hsl(0, 0%, 18%)",
                borderRadius: "8px",
                color: "hsl(0, 0%, 95%)",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(262, 83%, 58%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
