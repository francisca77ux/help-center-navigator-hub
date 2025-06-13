
import React from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Download, Settings, Video, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AppAdt = () => {
  const sections = [
    {
      id: 1,
      title: "Instalación y Configuración",
      icon: <Download className="h-6 w-6 text-primary" />,
      description: "Descarga e instalación inicial de la app",
      articles: [
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
        }
      ]
    },
    {
      id: 2,
      title: "Funciones Principales",
      icon: <Settings className="h-6 w-6 text-primary" />,
      description: "Control y gestión de tu sistema desde la app",
      articles: [
        {
          title: "Control del sistema desde la app",
          url: "/articulo/control-sistema-app"
        },
        {
          title: "Estados del sistema en tiempo real",
          url: "/articulo/estados-tiempo-real"
        },
        {
          title: "Historial de eventos",
          url: "/articulo/historial-eventos"
        }
      ]
    },
    {
      id: 3,
      title: "Videovigilancia",
      icon: <Video className="h-6 w-6 text-primary" />,
      description: "Visualización y control de cámaras",
      articles: [
        {
          title: "Visualización de cámaras",
          url: "/articulo/visualizacion-camaras"
        },
        {
          title: "Grabación y reproducción",
          url: "/articulo/grabacion-reproduccion"
        },
        {
          title: "Configuración de cámaras",
          url: "/articulo/configuracion-camaras-app"
        }
      ]
    },
    {
      id: 4,
      title: "Notificaciones y Soporte",
      icon: <Bell className="h-6 w-6 text-primary" />,
      description: "Alertas, actualizaciones y solución de problemas",
      articles: [
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
      ]
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

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mt-12">
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
