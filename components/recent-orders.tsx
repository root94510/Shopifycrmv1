"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "#ORD-7892",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    product: "Premium Wireless Headphones",
    amount: "$299.99",
    status: "completed",
    date: "2 min ago",
  },
  {
    id: "#ORD-7891",
    customer: "Michael Chen",
    email: "michael@example.com",
    product: "Smart Watch Series 5",
    amount: "$449.00",
    status: "processing",
    date: "15 min ago",
  },
  {
    id: "#ORD-7890",
    customer: "Emily Davis",
    email: "emily@example.com",
    product: "Bluetooth Speaker Pro",
    amount: "$179.99",
    status: "completed",
    date: "32 min ago",
  },
  {
    id: "#ORD-7889",
    customer: "James Wilson",
    email: "james@example.com",
    product: "Laptop Stand Deluxe",
    amount: "$89.99",
    status: "pending",
    date: "1 hour ago",
  },
  {
    id: "#ORD-7888",
    customer: "Lisa Anderson",
    email: "lisa@example.com",
    product: "Mechanical Keyboard RGB",
    amount: "$159.00",
    status: "completed",
    date: "2 hours ago",
  },
];

const statusStyles = {
  completed: "bg-chart-4/10 text-chart-4",
  processing: "bg-chart-2/10 text-chart-2",
  pending: "bg-chart-3/10 text-chart-3",
  cancelled: "bg-chart-5/10 text-chart-5",
};

export function RecentOrders() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer orders</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-secondary/50 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                  {order.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-foreground">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">{order.email}</div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-foreground">
                  {order.product}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                  {order.amount}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                      statusStyles[order.status as keyof typeof statusStyles]
                    )}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
