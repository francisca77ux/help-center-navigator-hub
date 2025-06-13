
import React from 'react';
import { ArrowLeft, CreditCard, FileText, Calendar, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Facturacion = () => {
  const sections = [
    {
      id: 1,
      title: "Medios de Pago",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      description: "Conoce las opciones de pago disponibles",
      articles: [
        {
          title: "Medios de pago disponibles",
          url: "/articulo/medios-pago-disponibles"
        },
        {
          title: "Configuración de débito automático",
          url: "/articulo/configuracion-debito-automatico"
        },
        {
          title: "Pago con tarjeta de crédito",
          url: "/articulo/pago-tarjeta-credito"
        }
      ]
    },
    {
      id: 2,
      title: "Facturación",
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: "Información sobre tu facturación mensual",
      articles: [
        {
          title: "¿Cómo consultar mi factura?",
          url: "/articulo/consultar-factura"
        },
        {
          title: "Descarga de facturas",
          url: "/articulo/descarga-facturas"
        },
        {
          title: "Historial de pagos",
          url: "/articulo/historial-pagos"
        }
      ]
    },
    {
      id: 3,
      title: "Vencimientos y Pagos",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      description: "Gestiona tus fechas de pago",
      articles: [
        {
          title: "Fechas de vencimiento",
          url: "/articulo/fechas-vencimiento"
        },
        {
          title: "¿Qué hacer si mi pago está vencido?",
          url: "/articulo/pago-vencido"
        },
        {
          title: "Cambio de fecha de vencimiento",
          url: "/articulo/cambio-fecha-vencimiento"
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
          <h1 className="text-4xl font-bold mb-4">Facturación y Pagos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Toda la información sobre facturación, medios de pago y gestión de tu cuenta
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

export default Facturacion;
