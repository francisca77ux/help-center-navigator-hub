
import React from 'react';
import { Tag, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface PopularTag {
  name: string;
  count: number;
  description: string;
}

const PopularTagsSection = () => {
  const popularTags: PopularTag[] = [
    { name: 'Panel de Alarma', count: 45, description: 'Guías sobre el uso del panel de control' },
    { name: 'App ADT', count: 38, description: 'Todo sobre la aplicación móvil' },
    { name: 'Servicios ADT', count: 32, description: 'Información sobre nuestros servicios' },
    { name: 'Configuración', count: 28, description: 'Configuración de sistema y dispositivos' },
    { name: 'Códigos', count: 25, description: 'Gestión de códigos y claves' },
    { name: 'Monitoreo 24/7', count: 22, description: 'Central de monitoreo y supervisión' },
    { name: 'Notificaciones', count: 20, description: 'Alertas y notificaciones del sistema' },
    { name: 'Soporte Técnico', count: 18, description: 'Resolución de problemas técnicos' },
    { name: 'Seguridad', count: 16, description: 'Funciones de seguridad avanzadas' }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Search className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold text-center">Temas Más Buscados</h2>
      </div>
      <p className="text-muted-foreground text-center mb-8">Las categorías más consultadas por nuestros usuarios</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {popularTags.map((tag) => (
          <Link key={tag.name} to={`/etiqueta/${encodeURIComponent(tag.name)}`}>
            <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer h-full">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {tag.name}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {tag.count}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tag.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTagsSection;
