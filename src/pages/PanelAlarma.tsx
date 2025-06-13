
import React from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Settings, Key, AlertTriangle, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PanelAlarma = () => {
  const sections = [
    {
      id: 1,
      title: "Operación Básica",
      icon: <Settings className="h-6 w-6 text-primary" />,
      description: "Activación, desactivación y uso diario del panel",
      articles: [
        {
          title: "¿Cómo activar mi sistema de alarma?",
          url: "/articulo/activar-sistema-alarma"
        },
        {
          title: "¿Cómo desactivar mi sistema de alarma?",
          url: "/articulo/desactivar-sistema-alarma"
        },
        {
          title: "Modos de armado parcial y total",
          url: "/articulo/modos-armado"
        }
      ]
    },
    {
      id: 2,
      title: "Configuración y Claves",
      icon: <Key className="h-6 w-6 text-primary" />,
      description: "Gestión de claves y configuración de zonas",
      articles: [
        {
          title: "Cambio de clave maestra",
          url: "/articulo/cambio-clave-maestra"
        },
        {
          title: "Configuración de zonas",
          url: "/articulo/configuracion-zonas"
        },
        {
          title: "Creación de códigos de usuario",
          url: "/articulo/codigos-usuario"
        }
      ]
    },
    {
      id: 3,
      title: "Solución de Problemas",
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      description: "Diagnóstico y resolución de inconvenientes",
      articles: [
        {
          title: "Problemas con el panel",
          url: "/articulo/problemas-panel"
        },
        {
          title: "Luces indicadoras del panel",
          url: "/articulo/luces-indicadoras-panel"
        },
        {
          title: "Sonidos y alertas",
          url: "/articulo/sonidos-alertas"
        }
      ]
    },
    {
      id: 4,
      title: "Documentación",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description: "Manuales y guías detalladas",
      articles: [
        {
          title: "Manual del usuario",
          url: "/articulo/manual-usuario-panel"
        },
        {
          title: "Guía de referencia rápida",
          url: "/articulo/guia-referencia-rapida"
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
          <h1 className="text-4xl font-bold mb-4">Panel de Alarma</h1>
          <p className="text-muted-foreground text-lg">
            Guías completas para el uso correcto de tu panel de alarma ADT
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
              ¿Necesitas ayuda con tu panel?
            </CardTitle>
            <CardDescription>
              Contacta a nuestro soporte técnico especializado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Soporte 24/7</h4>
                <p className="text-sm text-muted-foreground">600 123 4567</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">+56 9 8765 4321</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Soporte Técnico</h4>
                <p className="text-sm text-muted-foreground">soporte@adtchile.cl</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PanelAlarma;
