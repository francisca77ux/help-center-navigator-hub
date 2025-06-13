
import React from 'react';
import { Wrench, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const Instalacion = () => {
  const breadcrumbItems = [
    { label: 'Instalación y Configuración' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Proceso de instalación paso a paso',
      description: 'Guía completa del proceso de instalación de tu sistema ADT',
      url: '/articulo/proceso-instalacion',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Configuración inicial del sistema',
      description: 'Cómo configurar tu sistema después de la instalación',
      url: '/articulo/configuracion-inicial',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Ubicación óptima de sensores',
      description: 'Mejores prácticas para la ubicación de sensores de seguridad',
      url: '/articulo/ubicacion-sensores',
      readTime: '5 min'
    },
    {
      id: 4,
      title: 'Configuración de zonas de seguridad',
      description: 'Cómo definir y configurar las zonas de tu sistema',
      url: '/articulo/configuracion-zonas-seguridad',
      readTime: '7 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Volver al Centro de Ayuda
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Instalación y Configuración</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber sobre la instalación y configuración inicial de tu sistema ADT
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Instalación Profesional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nuestros técnicos certificados realizan la instalación completa
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Configuración Rápida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sistema listo para usar en pocas horas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Capacitación Incluida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Te enseñamos a usar tu sistema de seguridad
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Articles Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Artículos de Ayuda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link key={article.id} to={article.url}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    <CardDescription className="text-sm mt-2">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs text-muted-foreground">
                      {article.readTime} de lectura
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Instalacion;
