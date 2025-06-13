
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery, onSearch }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      navigate(`/buscar/${encodedQuery}`);
    }
    onSearch(e);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 py-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
          Centro de Ayuda ADT Chile
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          ¡Hola! ¿En qué podemos ayudarte hoy? Encuentra respuestas rápidas a tus consultas sobre tu sistema de seguridad ADT
        </p>
        
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Buscar en el centro de ayuda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-base bg-background/80 backdrop-blur-sm border-2 focus:border-primary/50 rounded-xl shadow-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
