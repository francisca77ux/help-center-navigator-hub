
import React from 'react';
import { Shield, ArrowRight, Clock, Phone, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const Monitoreo = () => {
  const breadcrumbItems = [
    { label: 'Central de Monitoreo' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Cómo funciona el monitoreo 24/7',
      description: 'Conoce el proceso completo de monitoreo profesional',
      url: '/articulo/como-funciona-monitoreo-247',
      readTime: '6 min'
    },
    {
      id: 2,
      title: 'Protocolo de respuesta a emergencias',
      description: 'Qué sucede cuando se activa tu alarma',
      url: '/articulo/protocolo-respuesta-emergencias',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Tipos de señales monitoreadas',
      description: 'Todas las señales que supervisa nuestra central',
      url: '/articulo/tipos-senales-monitoreadas',
      readTime: '7 min'
    },
    {
      id: 4,
      title: 'Comunicación con la central',
      description: 'Cómo mantener comunicación efectiva con nuestros operadores',
      url: '/articulo/comunicacion-central',
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
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Central de Monitoreo</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Información sobre nuestro servicio de monitoreo profesional las 24 horas
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">24/7/365</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Monitoreo continuo todos los días del año
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Operadores Certificados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Personal altamente capacitado y certificado
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Respuesta Inmediata</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contacto inmediato con autoridades cuando es necesario
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

export default Monitoreo;
