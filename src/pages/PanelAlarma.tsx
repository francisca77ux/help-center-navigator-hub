
import React from 'react';
import { ArrowLeft, Shield, Power, Key, Settings, Users, Phone, Mail, MessageCircle, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PanelAlarma = () => {
  const sections = [
    {
      id: 1,
      title: "Activación y Desactivación",
      icon: <Power className="h-6 w-6 text-primary" />,
      description: "Aprende a controlar tu sistema de alarma",
      articles: [
        {
          title: "¿Cómo activar mi sistema de alarma?",
          url: "/articulo/activar-sistema-alarma",
          icon: <Power className="h-4 w-4 text-primary" />
        },
        {
          title: "¿Cómo desactivar mi sistema de alarma?",
          url: "/articulo/desactivar-sistema-alarma",
          icon: <Power className="h-4 w-4 text-primary" />
        },
        {
          title: "Modos de armado disponibles",
          url: "/articulo/modos-armado",
          icon: <Shield className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 2,
      title: "Configuración de Códigos",
      icon: <Key className="h-6 w-6 text-primary" />,
      description: "Gestiona los códigos de acceso de tu sistema",
      articles: [
        {
          title: "Cambio de clave maestra",
          url: "/articulo/cambio-clave-maestra",
          icon: <Key className="h-4 w-4 text-primary" />
        },
        {
          title: "Códigos de usuario",
          url: "/articulo/codigos-usuario",
          icon: <Users className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 3,
      title: "Configuración Avanzada",
      icon: <Settings className="h-6 w-6 text-primary" />,
      description: "Personaliza tu sistema según tus necesidades",
      articles: [
        {
          title: "Configuración de zonas",
          url: "/articulo/configuracion-zonas",
          icon: <Settings className="h-4 w-4 text-primary" />
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
          <h1 className="text-4xl font-bold mb-4">Panel de Alarma</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre el uso y configuración de tu panel de alarma ADT
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
                        <div className="flex items-start gap-3 mb-2">
                          {article.icon}
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors flex-1">
                            {article.title}
                          </h3>
                        </div>
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
                <a 
                  href="tel:6001234567" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  600 123 4567
                </a>
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

export default PanelAlarma;
