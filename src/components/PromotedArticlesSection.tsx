
import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PromotedArticle {
  id: number;
  title: string;
  url: string;
  internal: boolean;
}

interface PromotedArticlesSectionProps {
  promotedArticles: PromotedArticle[];
}

const PromotedArticlesSection = ({ promotedArticles }: PromotedArticlesSectionProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-2 text-center">Artículos Destacados</h2>
      <p className="text-muted-foreground text-center mb-8">Los artículos más consultados por nuestros usuarios</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promotedArticles.map((article) => (
          <Card key={article.id} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-base group-hover:text-primary transition-colors flex-1 pr-4 leading-tight">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {article.internal && (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  )}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PromotedArticlesSection;
