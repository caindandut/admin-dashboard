import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/dashboard/stats-card";
import OverviewChart from "@/components/dashboard/overview-chart";
import RecentSales from "@/components/dashboard/recent-sales";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Revenue" 
          value="$45,231.89" 
          description="+20.1% from last month" 
          icon={DollarSign} 
        />
        <StatsCard 
          title="New Subscriptions" 
          value="+2350" 
          description="+180.1% from last month" 
          icon={Users} 
        />
        <StatsCard 
          title="Sales" 
          value="+12,234" 
          description="+19% from last month" 
          icon={CreditCard} 
        />
        <StatsCard 
          title="Active Now" 
          value="+573" 
          description="+201 since last hour" 
          icon={Activity} 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <p className="text-sm text-muted-foreground">
              You made 265 sales this month.
            </p>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}