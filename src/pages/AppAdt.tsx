
import React from 'react';
import { ArrowLeft, Smartphone, Download, Settings, Bell, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AppAdt = () => {
  const sections = [
    {
      id: 1,
      title: "Descarga e Instalación",
      icon: <Download className="h-6 w-6 text-primary" />,
      description: "Obtén la aplicación móvil ADT",
      articles: [
        {
          title: "Descarga de la App ADT",
          url: "/articulo/descarga-app-adt"
        },
        {
          title: "Instalación en Android",
          url: "/articulo/instalacion-android"
        },
        {
          title: "Instalación en iOS",
          url: "/articulo/instalacion-ios"
        }
      ]
    },
    {
      id: 2,
      title: "Configuración",
      icon: <Settings className="h-6 w-6 text-primary" />,
      description: "Configura tu aplicación móvil",
      articles: [
        {
          title: "Primer acceso a la app",
          url: "/articulo/primer-acceso-app"
        },
        {
          title: "Configuración de notificaciones",
          url: "/articulo/configuracion-notificaciones-app"
        },
        {
          title: "Vinculación con tu sistema",
          url: "/articulo/vinculacion-sistema"
        }
      ]
    },
    {
      id: 3,
      title: "Funcionalidades",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      description: "Aprovecha todas las funciones de la app",
      articles: [
        {
          title: "Control remoto del sistema",
          url: "/articulo/control-remoto-app"
        },
        {
          title: "Visualización de eventos",
          url: "/articulo/visualizacion-eventos"
        },
        {
          title: "Gestión de usuarios",
          url: "/articulo/gestion-usuarios-app"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Centro de Ayuda
          </Link>
          <h1 className="text-4xl font-bold mb-4">App ADT Chile</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Guías completas para usar la aplicación móvil de ADT Chile
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="space-y-8 mx-8">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {section.articles.map((article, index) => (
                  <Link key={index} to={article.url}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full group">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Información detallada sobre {article.title.toLowerCase()}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mt-12 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3">
              ¿Necesitas más información?
            </CardTitle>
            <CardDescription>
              Nuestro equipo de atención al cliente está disponible para ayudarte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Teléfono</h4>
                <p className="text-sm text-muted-foreground">600 123 4567</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">+56 9 8765 4321</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground">info@adtchile.cl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppAdt;
