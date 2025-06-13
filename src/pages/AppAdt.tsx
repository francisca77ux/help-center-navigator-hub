
import React from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AppAdt = () => {
  const articles = [
    {
      title: "Descarga de la aplicación ADT Chile",
      url: "/articulo/descarga-app-adt"
    },
    {
      title: "Configuración inicial de la app",
      url: "/articulo/configuracion-inicial-app"
    },
    {
      title: "¿Cómo iniciar sesión?",
      url: "/articulo/iniciar-sesion-app"
    },
    {
      title: "Visualización de cámaras",
      url: "/articulo/visualizacion-camaras"
    },
    {
      title: "Control del sistema desde la app",
      url: "/articulo/control-sistema-app"
    },
    {
      title: "Notificaciones push",
      url: "/articulo/notificaciones-push"
    },
    {
      title: "Problemas de conexión",
      url: "/articulo/problemas-conexion-app"
    },
    {
      title: "Actualizaciones de la app",
      url: "/articulo/actualizaciones-app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Centro de Ayuda
          </Link>
          <h1 className="text-4xl font-bold mb-4">Aplicación ADT Chile</h1>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber sobre nuestra aplicación móvil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article, index) => (
            <Link key={index} to={article.url}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    Información detallada sobre {article.title.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              ¿Problemas con la app?
            </CardTitle>
            <CardDescription>
              Nuestro equipo técnico te ayudará con cualquier inconveniente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Soporte App</h4>
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
                <p className="text-sm text-muted-foreground">app@adtchile.cl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppAdt;
