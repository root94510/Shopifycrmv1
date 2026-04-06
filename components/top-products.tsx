"use client";

import { ChevronRight } from "lucide-react";

const products = [
  {
    name: "Premium Wireless Headphones",
    sales: 1245,
    revenue: "$372,505",
    trend: "+15.2%",
  },
  {
    name: "Smart Watch Series 5",
    sales: 982,
    revenue: "$441,018",
    trend: "+12.8%",
  },
  {
    name: "Bluetooth Speaker Pro",
    sales: 876,
    revenue: "$157,724",
    trend: "+8.4%",
  },
  {
    name: "Mechanical Keyboard RGB",
    sales: 654,
    revenue: "$103,986",
    trend: "+5.2%",
  },
  {
    name: "Laptop Stand Deluxe",
    sales: 543,
    revenue: "$48,814",
    trend: "+3.1%",
  },
];

export function TopProducts() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
          <p className="text-sm text-muted-foreground">Best selling products</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="divide-y divide-border">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.sales} sales</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{product.revenue}</p>
              <p className="text-sm font-medium text-chart-4">{product.trend}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
