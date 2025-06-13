import React, { useState } from 'react';
import { Search, Lock, ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Contenido actualizado con enlaces a páginas específicas
  const categories = [
    {
      id: 1,
      name: 'Servicios ADT',
      description: 'Información sobre nuestros servicios de monitoreo, instalación y mantenimiento',
      url: '/servicios-adt',
      articleCount: 25
    },
    {
      id: 2,
      name: 'Panel de Alarma',
      description: 'Guías sobre cómo usar tu panel de alarma ADT correctamente',
      url: '/panel-alarma',
      articleCount: 18
    },
    {
      id: 3,
      name: 'Aplicación ADT Chile',
      description: 'Todo sobre nuestra aplicación móvil para Android e iOS',
      url: '/app-adt',
      articleCount: 22
    },
    {
      id: 4,
      name: 'Facturación y Pagos',
      description: 'Consultas sobre facturación, medios de pago y estados de cuenta',
      url: '/facturacion',
      articleCount: 15
    },
    {
      id: 5,
      name: 'Instalación y Configuración',
      description: 'Proceso de instalación y configuración inicial de tu sistema',
      url: '/instalacion',
      articleCount: 12
    },
    {
      id: 6,
      name: 'Cámaras IP y Videovigilancia',
      description: 'Configuración y uso de cámaras de seguridad IP',
      url: '/camaras-ip',
      articleCount: 20
    },
    {
      id: 7,
      name: 'Central de Monitoreo',
      description: 'Información sobre nuestro servicio de monitoreo 24/7',
      url: '/monitoreo',
      articleCount: 8
    },
    {
      id: 8,
      name: 'Soporte Técnico',
      description: 'Solución de problemas técnicos y mantenimiento preventivo',
      url: '/soporte',
      articleCount: 16
    }
  ];

  const promotedArticles = [
    {
      id: 1,
      title: '¿Cómo activar y desactivar mi sistema de alarma ADT?',
      url: '/article/activar-desactivar-sistema',
      internal: false
    },
    {
      id: 2,
      title: 'Descarga y configuración de la App ADT Chile',
      url: '/article/app-adt-configuracion',
      internal: false
    },
    {
      id: 3,
      title: '¿Qué hacer cuando se activa mi alarma?',
      url: '/article/alarma-activada',
      internal: false
    },
    {
      id: 4,
      title: 'Medios de pago disponibles para tu servicio ADT',
      url: '/article/medios-pago',
      internal: false
    },
    {
      id: 5,
      title: 'Cambio de clave de usuario en el panel',
      url: '/article/cambio-clave-panel',
      internal: true
    },
    {
      id: 6,
      title: 'Visualización remota de cámaras desde tu celular',
      url: '/article/camaras-remotas',
      internal: false
    },
    {
      id: 7,
      title: 'Procedimiento en caso de falsa alarma',
      url: '/article/falsa-alarma',
      internal: false
    },
    {
      id: 8,
      title: 'Configuración de zonas en tu sistema de alarma',
      url: '/article/configuracion-zonas',
      internal: true
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'actualización',
      title: 'Actualizada: Guía de configuración App ADT Chile v4.2',
      time: 'hace 1 día'
    },
    {
      id: 2,
      type: 'nuevo',
      title: 'Nuevo: Manual de instalación sensores inalámbricos',
      time: 'hace 3 días'
    },
    {
      id: 3,
      type: 'actualización',
      title: 'Actualizada: Información sobre medios de pago',
      time: 'hace 5 días'
    },
    {
      id: 4,
      type: 'nuevo',
      title: 'Nuevo: Protocolo de atención emergencias',
      time: 'hace 1 semana'
    },
    {
      id: 5,
      type: 'actualización',
      title: 'Actualizada: Configuración panel central híbrida',
      time: 'hace 2 semanas'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Centro de Ayuda ADT Chile
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            ¡Hola! ¿En qué podemos ayudarte hoy? Encuentra respuestas rápidas a tus consultas sobre tu sistema de seguridad ADT
          </p>
          
          {/* Search Bar */}
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

      <div className="container mx-auto px-4 py-12">
        {/* Categories Section */}
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

        {/* Promoted Articles */}
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

        {/* Community and Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                ¿Necesitas más ayuda?
              </CardTitle>
              <CardDescription className="text-base">
                Si no encuentras la respuesta que buscas, nuestro equipo de atención al cliente está disponible para ayudarte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full group mb-3">
                Contactar Soporte
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Lunes a Viernes: 8:00 - 20:00 hrs<br />
                Sábados: 9:00 - 14:00 hrs
              </p>
            </CardContent>
          </Card>

          {/* Recent Activity */}
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
        </div>

        {/* Additional Help Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Otros Canales de Atención</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-muted-foreground text-sm mb-2">Para emergencias las 24 horas</p>
              <p className="text-primary font-medium">600 123 4567</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-2">Atención comercial</p>
              <p className="text-primary font-medium">+56 9 8765 4321</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-2">Consultas generales</p>
              <p className="text-primary font-medium">info@adtchile.cl</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
