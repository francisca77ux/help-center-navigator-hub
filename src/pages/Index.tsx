
import React, { useState } from 'react';
import { Search, Lock, ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Contenido basado en ADT Chile
  const categories = [
    {
      id: 1,
      name: 'Instalación y Configuración',
      description: 'Guías para instalar y configurar tu sistema de seguridad ADT',
      url: '/category/instalacion',
      articleCount: 15
    },
    {
      id: 2,
      name: 'Panel de Control',
      description: 'Cómo usar y programar tu panel de alarma ADT',
      url: '/category/panel-control',
      articleCount: 22
    },
    {
      id: 3,
      name: 'Aplicación Móvil ADT',
      description: 'Guías para usar la app móvil de ADT Chile',
      url: '/category/app-movil',
      articleCount: 18
    },
    {
      id: 4,
      name: 'Sensores y Detectores',
      description: 'Información sobre sensores de movimiento, puertas y ventanas',
      url: '/category/sensores',
      articleCount: 12
    },
    {
      id: 5,
      name: 'Cámaras de Seguridad',
      description: 'Configuración y uso de cámaras IP y análogas',
      url: '/category/camaras',
      articleCount: 20
    },
    {
      id: 6,
      name: 'Monitoreo 24/7',
      description: 'Información sobre nuestro servicio de monitoreo',
      url: '/category/monitoreo',
      articleCount: 8
    },
    {
      id: 7,
      name: 'Plan de Contingencia',
      description: 'Qué hacer en caso de emergencia o falla del sistema',
      url: '/category/contingencia',
      articleCount: 10
    },
    {
      id: 8,
      name: 'Facturación y Pagos',
      description: 'Información sobre pagos, facturas y planes de servicio',
      url: '/category/facturacion',
      articleCount: 6
    }
  ];

  const promotedArticles = [
    {
      id: 1,
      title: '¿Cómo activar y desactivar mi sistema de alarma?',
      url: '/article/activar-desactivar-alarma',
      internal: false
    },
    {
      id: 2,
      title: 'Configuración inicial de la aplicación ADT Chile',
      url: '/article/configuracion-app',
      internal: false
    },
    {
      id: 3,
      title: '¿Qué hacer cuando suena la alarma?',
      url: '/article/alarma-suena',
      internal: false
    },
    {
      id: 4,
      title: 'Solución de problemas comunes del panel',
      url: '/article/problemas-panel',
      internal: false
    },
    {
      id: 5,
      title: 'Cambio de contraseña del sistema',
      url: '/article/cambio-contrasena',
      internal: true
    },
    {
      id: 6,
      title: '¿Cómo ver mis cámaras desde el celular?',
      url: '/article/camaras-celular',
      internal: false
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'artículo',
      title: 'Nueva guía: Configuración de notificaciones push',
      time: 'hace 2 horas'
    },
    {
      id: 2,
      type: 'actualización',
      title: 'Actualizada: Guía de instalación de sensores',
      time: 'hace 1 día'
    },
    {
      id: 3,
      type: 'comunidad',
      title: 'Discusión: Mejores prácticas de seguridad',
      time: 'hace 3 días'
    },
    {
      id: 4,
      type: 'artículo',
      title: 'Nuevo: Manual de la aplicación ADT v3.2',
      time: 'hace 1 semana'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Centro de Ayuda ADT Chile
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Encuentra respuestas, obtén ayuda y aprende a sacar el máximo provecho de tu sistema de seguridad ADT
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Busca artículos, guías y más..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-background/80 backdrop-blur-sm border-2 focus:border-primary/50 rounded-xl shadow-lg"
              />
            </div>
          </form>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Explorar por Categoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
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
            ))}
          </div>
        </section>

        {/* Promoted Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Artículos Destacados</h2>
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

        {/* Community and Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                Únete a Nuestra Comunidad
              </CardTitle>
              <CardDescription className="text-base">
                Conéctate con otros usuarios de ADT, comparte experiencias y obtén ayuda de la comunidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full group">
                Únete a la Conversación
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Actividad Reciente
              </CardTitle>
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
        </div>
      </div>
    </div>
  );
};

export default Index;
