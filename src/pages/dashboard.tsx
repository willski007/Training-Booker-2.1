import { StatsCard } from '@/components/dashboard/stats-card';
import { Activity, Users, DollarSign, LineChart } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="1,234"
          description="+12% from last month"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Active Projects"
          value="23"
          description="8 in progress"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Revenue"
          value="$45,231"
          description="+8% from last month"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Growth"
          value="+23%"
          description="Compared to last quarter"
          icon={<LineChart className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Activity content here</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <Button>Create New Project</Button>
              <Button variant="outline">View Reports</Button>
              <Button variant="outline">Manage Team</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}