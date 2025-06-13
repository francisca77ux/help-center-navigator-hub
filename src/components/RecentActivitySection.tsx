
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RecentActivity {
  id: number;
  type: string;
  title: string;
  time: string;
}

interface RecentActivitySectionProps {
  recentActivity: RecentActivity[];
}

const RecentActivitySection = ({ recentActivity }: RecentActivitySectionProps) => {
  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Actualizaciones Recientes
          </CardTitle>
          <CardDescription>
            Las últimas actualizaciones en nuestro centro de ayuda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">{activity.title}</h4>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default RecentActivitySection;
