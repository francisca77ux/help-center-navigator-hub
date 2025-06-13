
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  description: string;
  url: string;
  articleCount: number;
}

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-2 text-center">Explorar por Categoría</h2>
      <p className="text-muted-foreground text-center mb-8">Encuentra información organizada por temas</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={category.url}>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <CardDescription className="text-sm mt-2">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Badge variant="secondary" className="text-xs">
                  {category.articleCount} artículos
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
