import React from 'react';
import { Headphones, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const Soporte = () => {
  const breadcrumbItems = [
    { label: 'Soporte Técnico' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Problemas comunes y soluciones',
      description: 'Resuelve los problemas más frecuentes de tu sistema ADT',
      url: '/articulo/problemas-comunes-soluciones',
      readTime: '12 min'
    },
    {
      id: 2,
      title: 'Mantenimiento preventivo del sistema',
      description: 'Cómo mantener tu sistema funcionando óptimamente',
      url: '/articulo/mantenimiento-preventivo',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Diagnóstico de fallas técnicas',
      description: 'Identifica y soluciona problemas técnicos básicos',
      url: '/articulo/diagnostico-fallas-tecnicas',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'Actualización de firmware',
      description: 'Mantén tu sistema actualizado con las últimas versiones',
      url: '/articulo/actualizacion-firmware',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Reemplazo de baterías',
      description: 'Cuándo y cómo cambiar las baterías de tus dispositivos',
      url: '/articulo/reemplazo-baterias',
      readTime: '5 min'
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
            <Headphones className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Soporte Técnico</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Solución de problemas técnicos y mantenimiento de tu sistema ADT
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Teléfono</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Atención técnica especializada
              </p>
              <p className="font-medium">600 123 4567</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Chat directo con técnicos
              </p>
              <p className="font-medium">+56 9 8765 4321</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Soporte por correo electrónico
              </p>
              <p className="font-medium">soporte@adtchile.cl</p>
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

export default Soporte;
