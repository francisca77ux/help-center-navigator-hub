
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface PopularTopic {
  id: number;
  category: string;
  title: string;
  searches: string;
  url: string;
}

interface RecentActivitySectionProps {
  popularTopics: PopularTopic[];
}

const RecentActivitySection = ({ popularTopics }: RecentActivitySectionProps) => {
  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            Temas Más Buscados
          </CardTitle>
          <CardDescription>
            Los temas más consultados por nuestros usuarios esta semana
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularTopics.map((topic) => (
            <Link 
              key={topic.id} 
              to={topic.url}
              className="flex items-start justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group block"
            >
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                  {topic.title}
                </h4>
                <p className="text-xs text-muted-foreground">{topic.searches} búsquedas</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {topic.category}
                </Badge>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default RecentActivitySection;
