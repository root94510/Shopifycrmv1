"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12 hours ago", completed: 32, pending: 8, cancelled: 2 },
  { time: "10 hours ago", completed: 45, pending: 12, cancelled: 3 },
  { time: "8 hours ago", completed: 58, pending: 15, cancelled: 4 },
  { time: "6 hours ago", completed: 42, pending: 10, cancelled: 2 },
  { time: "4 hours ago", completed: 55, pending: 14, cancelled: 5 },
  { time: "2 hours ago", completed: 68, pending: 18, cancelled: 3 },
  { time: "Now", completed: 75, pending: 20, cancelled: 4 },
];

export function OrdersChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Order Status</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">375</span>
            <span className="text-sm text-muted-foreground">total orders</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-4" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-3" />
            <span className="text-sm text-muted-foreground">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-5" />
            <span className="text-sm text-muted-foreground">Cancelled</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 7%)",
                border: "1px solid hsl(0, 0%, 18%)",
                borderRadius: "8px",
                color: "hsl(0, 0%, 95%)",
              }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="hsl(142, 71%, 45%)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="pending"
              stroke="hsl(45, 93%, 47%)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="hsl(0, 84%, 60%)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
