import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { StatCard } from "@/components/stat-card";
import { RevenueChart } from "@/components/revenue-chart";
import { OrdersChart } from "@/components/orders-chart";
import { RecentOrders } from "@/components/recent-orders";
import { TopProducts } from "@/components/top-products";
import { ActivityFeed } from "@/components/activity-feed";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
            <p className="text-muted-foreground">
              {"Here's what's happening with your store today."}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value="$45,231"
              change={12.5}
              icon={DollarSign}
            />
            <StatCard
              title="Orders"
              value="1,234"
              change={8.2}
              icon={ShoppingCart}
            />
            <StatCard
              title="Customers"
              value="892"
              change={5.1}
              icon={Users}
            />
            <StatCard
              title="Products"
              value="156"
              change={-2.4}
              icon={Package}
            />
          </div>

          {/* Charts Row */}
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <RevenueChart />
            <OrdersChart />
          </div>

          {/* Recent Orders Table */}
          <div className="mb-6">
            <RecentOrders />
          </div>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            <TopProducts />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
