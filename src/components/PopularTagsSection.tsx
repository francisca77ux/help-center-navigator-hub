
import React from 'react';
import { Tag, Search, Settings, Smartphone, Shield, Key, Eye, Bell, HeadphonesIcon } from 'lucide-react';
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

  const tagIcons = {
    'Panel de Alarma': Settings,
    'App ADT': Smartphone,
    'Servicios ADT': Shield,
    'Configuración': Settings,
    'Códigos': Key,
    'Monitoreo 24/7': Eye,
    'Notificaciones': Bell,
    'Soporte Técnico': HeadphonesIcon,
    'Seguridad': Shield
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Search className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold text-center">Temas Más Buscados</h2>
      </div>
      <p className="text-muted-foreground text-center mb-8">Las categorías más consultadas por nuestros usuarios</p>
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1 justify-items-center place-content-center mx-auto max-w-screen-xl">
        {popularTags.map((tag) => {
          const IconComponent = tagIcons[tag.name as keyof typeof tagIcons] || Tag;
          
          return (
            <Link key={tag.name} to={`/etiqueta/${encodeURIComponent(tag.name)}`}>
              <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer w-28 h-28">
                <CardContent className="p-0.5 w-full h-full flex flex-col justify-center items-center text-center">
                  <IconComponent className="h-4 w-4 text-primary mb-1" />
                  <h3 className="font-semibold text-xs group-hover:text-primary transition-colors mb-1 leading-tight">
                    {tag.name}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-1 py-0.5 rounded-full">
                    {tag.count}
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularTagsSection;
