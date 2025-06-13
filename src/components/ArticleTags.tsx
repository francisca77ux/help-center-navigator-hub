
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleTagsProps {
  tags: string[];
  className?: string;
}

const ArticleTags = ({ tags, className = "" }: ArticleTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <Tag className="h-4 w-4 text-muted-foreground" />
      {tags.map((tag, index) => (
        <Link key={index} to={`/etiqueta/${encodeURIComponent(tag)}`}>
          <Badge variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors cursor-pointer">
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default ArticleTags;
