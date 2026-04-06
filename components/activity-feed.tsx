"use client";

import { ShoppingCart, Users, Package, CreditCard, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "order",
    message: "New order received from Sarah Johnson",
    time: "2 min ago",
    icon: ShoppingCart,
    iconBg: "bg-chart-1/10",
    iconColor: "text-chart-1",
  },
  {
    id: 2,
    type: "customer",
    message: "New customer registered: Michael Chen",
    time: "15 min ago",
    icon: Users,
    iconBg: "bg-chart-2/10",
    iconColor: "text-chart-2",
  },
  {
    id: 3,
    type: "product",
    message: "Product stock low: Bluetooth Speaker Pro",
    time: "32 min ago",
    icon: Package,
    iconBg: "bg-chart-3/10",
    iconColor: "text-chart-3",
  },
  {
    id: 4,
    type: "payment",
    message: "Payment completed for order #ORD-7891",
    time: "1 hour ago",
    icon: CreditCard,
    iconBg: "bg-chart-4/10",
    iconColor: "text-chart-4",
  },
  {
    id: 5,
    type: "alert",
    message: "Order #ORD-7885 cancelled by customer",
    time: "2 hours ago",
    icon: AlertCircle,
    iconBg: "bg-chart-5/10",
    iconColor: "text-chart-5",
  },
];

export function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border p-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest store updates</p>
      </div>
      <div className="divide-y divide-border">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 px-6 py-4">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                activity.iconBg
              )}
            >
              <activity.icon className={cn("h-5 w-5", activity.iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
