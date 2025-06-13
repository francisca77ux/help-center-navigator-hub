
import React from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Shield, Monitor, Wrench, MapPin, Smartphone, Wifi, Camera, Lock, Settings, Key, Home, Zap, AlertTriangle, FileText, Clock, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServiciosAdt = () => {
  const sections = [
    {
      id: 1,
      title: "Tipos de Servicios",
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: "Conoce todos los servicios de seguridad disponibles",
      articles: [
        {
          title: "¿Qué servicios ofrece ADT?",
          url: "/articulo/servicios-adt-disponibles",
          icon: <Shield className="h-4 w-4 text-primary" />
        },
        {
          title: "Tipos de monitoreo disponibles",
          url: "/articulo/tipos-monitoreo",
          icon: <Monitor className="h-4 w-4 text-primary" />
        },
        {
          title: "Servicios adicionales",
          url: "/articulo/servicios-adicionales",
          icon: <Settings className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 2,
      title: "Monitoreo y Vigilancia",
      icon: <Monitor className="h-6 w-6 text-primary" />,
      description: "Todo sobre nuestro servicio de monitoreo 24/7",
      articles: [
        {
          title: "¿Cómo funciona el monitoreo 24/7?",
          url: "/articulo/monitoreo-24-7",
          icon: <Clock className="h-4 w-4 text-primary" />
        },
        {
          title: "Central de monitoreo ADT",
          url: "/articulo/central-monitoreo",
          icon: <Monitor className="h-4 w-4 text-primary" />
        },
        {
          title: "Protocolo de emergencias",
          url: "/articulo/protocolo-emergencias",
          icon: <AlertTriangle className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 3,
      title: "ADT Smart Security",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      description: "Tecnología inteligente para la seguridad de tu hogar",
      articles: [
        {
          title: "¿Qué es ADT Smart Security?",
          url: "/articulo/que-es-adt-smart-security",
          icon: <Smartphone className="h-4 w-4 text-primary" />
        },
        {
          title: "Dispositivos inteligentes disponibles",
          url: "/articulo/dispositivos-inteligentes-disponibles",
          icon: <Settings className="h-4 w-4 text-primary" />
        },
        {
          title: "Cámaras de seguridad inteligentes",
          url: "/articulo/camaras-seguridad-inteligentes",
          icon: <Camera className="h-4 w-4 text-primary" />
        },
        {
          title: "Control remoto de tu sistema",
          url: "/articulo/control-remoto-sistema",
          icon: <Smartphone className="h-4 w-4 text-primary" />
        },
        {
          title: "Automatización del hogar",
          url: "/articulo/automatizacion-hogar",
          icon: <Home className="h-4 w-4 text-primary" />
        },
        {
          title: "Sensores inteligentes",
          url: "/articulo/sensores-inteligentes",
          icon: <Zap className="h-4 w-4 text-primary" />
        },
        {
          title: "Cerraduras inteligentes",
          url: "/articulo/cerraduras-inteligentes",
          icon: <Lock className="h-4 w-4 text-primary" />
        },
        {
          title: "Configuración de notificaciones",
          url: "/articulo/configuracion-notificaciones",
          icon: <MessageCircle className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 4,
      title: "Instalación y Mantenimiento",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      description: "Servicios técnicos y de soporte",
      articles: [
        {
          title: "Servicios de instalación",
          url: "/articulo/servicios-instalacion",
          icon: <Wrench className="h-4 w-4 text-primary" />
        },
        {
          title: "Mantenimiento preventivo",
          url: "/articulo/mantenimiento-preventivo",
          icon: <Settings className="h-4 w-4 text-primary" />
        },
        {
          title: "Garantías de servicio",
          url: "/articulo/garantias-servicio",
          icon: <FileText className="h-4 w-4 text-primary" />
        }
      ]
    },
    {
      id: 5,
      title: "Cobertura",
      icon: <MapPin className="h-6 w-6 text-primary" />,
      description: "Información sobre nuestra cobertura geográfica",
      articles: [
        {
          title: "Cobertura geográfica",
          url: "/articulo/cobertura-geografica",
          icon: <MapPin className="h-4 w-4 text-primary" />
        },
        {
          title: "Zonas de servicio",
          url: "/articulo/zonas-servicio",
          icon: <MapPin className="h-4 w-4 text-primary" />
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
          <h1 className="text-4xl font-bold mb-4">Servicios ADT</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Información completa sobre todos nuestros servicios de seguridad y monitoreo
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

export default ServiciosAdt;
