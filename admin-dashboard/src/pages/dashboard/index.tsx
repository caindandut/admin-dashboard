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
          title="Tổng Doanh Thu" 
          value="$45,231.89" 
          description="+20.1% so với tháng trước" 
          icon={DollarSign} 
        />
        <StatsCard 
          title="Đăng Ký Mới" 
          value="+2350" 
          description="+180.1% so với tháng trước" 
          icon={Users} 
        />
        <StatsCard 
          title="Đơn Hàng" 
          value="+12,234" 
          description="+19% so với tháng trước" 
          icon={CreditCard} 
        />
        <StatsCard 
          title="Đang Hoạt Động" 
          value="+573" 
          description="+201 kể từ giờ trước" 
          icon={Activity} 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tổng Quan</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Giao Dịch Gần Đây</CardTitle>
            <p className="text-sm text-muted-foreground">
              Bạn có 265 đơn hàng trong tháng này.
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