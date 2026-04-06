import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        <div className="mt-2 flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="h-4 w-4 text-chart-4" />
          ) : (
            <TrendingDown className="h-4 w-4 text-chart-5" />
          )}
          <span
            className={cn(
              "text-sm font-medium",
              isPositive ? "text-chart-4" : "text-chart-5"
            )}
          >
            {isPositive ? "+" : ""}
            {change}%
          </span>
          <span className="text-sm text-muted-foreground">vs last period</span>
        </div>
      </div>
    </div>
  );
}
